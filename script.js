/**
 * Rnクラン ホームページ本体スクリプト
 * - members.js / gallery.js のデータをもとにカードを描画
 * - Discordの公式ウィジェットJSON(トークン不要)からオンライン状況を取得
 */

const DISCORD_SERVER_ID = "1486288789402812469";
const WIDGET_JSON_URL = `https://discord.com/api/guilds/${DISCORD_SERVER_ID}/widget.json`;

/* ---------------- メンバー描画 ---------------- */
function initials(name) {
  const trimmed = name.trim();
  return trimmed.length ? trimmed[0].toUpperCase() : "?";
}

function renderMembers() {
  const grid = document.getElementById("member-grid");
  if (!grid) return;

  // 運営に関わっている人(isStaff: true)だけを掲載する
  const staff = MEMBERS.filter((m) => m.isStaff);

  if (!staff.length) {
    grid.innerHTML = `<p style="color:var(--text-dim);font-family:var(--font-mono);font-size:0.85rem;">
      members.js の isStaff を true にすると、ここに表示されます。
    </p>`;
    return;
  }

  grid.innerHTML = staff.map((m) => `
    <div class="member-card slot" data-key="${m.name}">
      <div class="member-avatar" data-avatar-slot="${m.name}">${initials(m.name)}</div>
      <div class="member-name">${m.name}</div>
      <div class="member-handle">@${m.discordUsername}</div>
      <span class="member-role${m.isAdmin ? " admin" : ""}">${m.role}</span>
    </div>
  `).join("");
}

/* ---------------- メンバー個人YouTube描画 ---------------- */
function renderMemberYoutubeLinks() {
  const wrap = document.getElementById("yt-members");
  if (!wrap) return;

  const doing = MEMBERS.filter((m) => m.youtube);

  if (!doing.length) {
    wrap.innerHTML = `<p style="color:var(--text-dim);font-family:var(--font-mono);font-size:0.85rem;">
      members.js の youtube を true にすると、ここに表示されます。
    </p>`;
    return;
  }

  wrap.innerHTML = doing.map((m) => {
    const hasUrl = m.youtubeUrl && m.youtubeUrl.length;
    const url = hasUrl ? m.youtubeUrl : YOUTUBE_SAMPLE_URL;
    return `
      <a class="yt-chip" href="${url}" target="_blank" rel="noopener">
        ${m.name}${hasUrl ? "" : "(準備中)"}
      </a>
    `;
  }).join("");
}

/* ---------------- ギャラリー描画 ---------------- */
function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  if (GALLERY_IMAGES.length > 0) {
    grid.innerHTML = GALLERY_IMAGES.map((g) => `
      <div class="gallery-item">
        <img src="${g.src}" alt="${g.caption || "Rnクラン ギャラリー画像"}" loading="lazy">
      </div>
    `).join("");
    return;
  }

  grid.innerHTML = Array.from({ length: GALLERY_PLACEHOLDER_COUNT }).map(() => `
    <div class="gallery-item">
      <div class="gallery-empty">
        <span class="plus">+</span>
        <span>準備中</span>
      </div>
    </div>
  `).join("");
}

/* ---------------- Discordウィジェット(オンライン状況) ---------------- */
async function loadDiscordWidget() {
  const statusText = document.getElementById("widget-status-text");

  try {
    const res = await fetch(WIDGET_JSON_URL);
    if (!res.ok) throw new Error("widget fetch failed");
    const data = await res.json();

    // members.js に登録済みのメンバーだけを対象にする(Bot・部外者は除外)
    // 注意: Discordウィジェットの username は「アカウント名」ではなく
    // サーバー内の「表示名(ニックネーム)」が返ってくるため、
    // members.js の discordUsername ではなく name の方で照合する
    const matchMember = (widgetUsername) =>
      MEMBERS.find((m) => m.name === widgetUsername) ||
      MEMBERS.find((m) => m.discordUsername === widgetUsername);

    const knownOnline = Array.isArray(data.members)
      ? data.members.map((mem) => matchMember(mem.username)).filter(Boolean)
      : [];

    if (statusText) {
      statusText.textContent = `現在 ${knownOnline.length} 人のクランメンバーがオンライン`;
    }

    // メンバーカードにオンラインの緑ドット & アバター画像を反映
    if (Array.isArray(data.members)) {
      // widget の username(表示名) → 一致した members.js のエントリ、の形にまとめる
      const onlineByKey = new Map();
      data.members.forEach((mem) => {
        const matched = matchMember(mem.username);
        if (matched) onlineByKey.set(matched.name, mem);
      });

      document.querySelectorAll(".member-card").forEach((card) => {
        const key = card.dataset.key;
        const mem = onlineByKey.get(key);
        if (!mem) return;

        card.style.boxShadow = "0 0 0 1px var(--online)";

        const slot = card.querySelector(`[data-avatar-slot="${key}"]`);
        if (slot && mem.avatar_url) {
          slot.innerHTML = `<img src="${mem.avatar_url}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">`;
        }
      });
    }
  } catch (err) {
    // ウィジェットが無効化されている/一時的に取得できない場合はサイレントにフォールバック
    if (statusText) {
      statusText.textContent = "Discordサーバーはいつでも参加OKです";
    }
    if (onlineCount) onlineCount.textContent = "–";
    console.warn("Discord widget を取得できませんでした:", err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderMembers();
  renderMemberYoutubeLinks();
  renderGallery();
  loadDiscordWidget();
});
