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

  grid.innerHTML = MEMBERS.map((m) => {
    const avatar = m.avatarUrl
      ? `<img src="${m.avatarUrl}" alt="${m.name}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">`
      : initials(m.name);

    return `
      <div class="member-card slot" data-username="${m.discordUsername}">
        <div class="member-avatar">${avatar}</div>
        <div class="member-name">${m.name}</div>
        <div class="member-handle">@${m.discordUsername}</div>
        <span class="member-role${m.isAdmin ? " admin" : ""}">${m.role}</span>
      </div>
    `;
  }).join("");
}

/* ---------------- メンバー個人YouTube描画 ---------------- */
function renderMemberYoutubeLinks() {
  const wrap = document.getElementById("yt-members");
  if (!wrap) return;

  wrap.innerHTML = MEMBERS.map((m) => {
    const url = m.youtube && m.youtube.length ? m.youtube : YOUTUBE_SAMPLE_URL;
    const isSample = !(m.youtube && m.youtube.length);
    return `
      <a class="yt-chip" href="${url}" target="_blank" rel="noopener">
        ${m.name}${isSample ? "(準備中)" : ""}
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
  const onlineCount = document.getElementById("widget-online-count");
  const onlineList = document.getElementById("widget-online-list");

  try {
    const res = await fetch(WIDGET_JSON_URL);
    if (!res.ok) throw new Error("widget fetch failed");
    const data = await res.json();

    const count = data.presence_count ?? (data.members ? data.members.length : 0);

    if (statusText) {
      statusText.textContent = `現在 ${count} 人がDiscordにオンライン`;
    }
    if (onlineCount) {
      onlineCount.textContent = count;
    }
    if (onlineList && Array.isArray(data.members)) {
      onlineList.innerHTML = data.members
        .slice(0, 12)
        .map((mem) => `<span class="online-chip">${mem.username}</span>`)
        .join("");
    }

    // メンバーカードにオンラインの緑ドットを付ける
    if (Array.isArray(data.members)) {
      const onlineNames = new Set(data.members.map((mem) => mem.username));
      document.querySelectorAll(".member-card").forEach((card) => {
        const uname = card.dataset.username;
        if (onlineNames.has(uname)) {
          card.style.boxShadow = "0 0 0 1px var(--online)";
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
