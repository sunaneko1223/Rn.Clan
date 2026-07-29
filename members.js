/**
 * Rnクラン メンバーデータ
 * -----------------------------------------------------------
 * ・isStaff: true のメンバーだけが「メンバー紹介」セクションに表示されます。
 *   (鯖にいるだけの人まで全員載せると人数が増えたときに邪魔になるため、
 *    運営に関わっている人だけを掲載する方針)
 *
 * ・youtube: true にすると「メンバー個人チャンネル」に表示されます。
 *   youtubeUrl が空のままだと、代わりに YOUTUBE_SAMPLE_URL (公式チャンネル)
 *   へのリンクが仮表示されます。実際のチャンネルが決まったら
 *   youtubeUrl にURLを入れてください。
 *
 * ・discordUsername は Discordのユーザー名(@から始まるほう)。
 *   ここが合っていると、Discordウィジェットから
 *     - オンライン状況(メンバーカードの縁が光る)
 *     - アバター画像(オンライン中のみ自動取得)
 *   が反映されます。画像を用意してアップロードする必要はありません。
 *
 * ・isAdmin: true にすると名前バッジが金色になります
 *   (Discordの「管理者」ロールを持つ人向け)
 * -----------------------------------------------------------
 */

const YOUTUBE_SAMPLE_URL = "https://www.youtube.com/@Rnクラン公式";

const MEMBERS = [
  {
    name: "すなねこ",
    discordUsername: "sunaneko2929",
    role: "管理者・鯖主",
    isAdmin: true,
    isStaff: true,
    youtube: true,
    youtubeUrl: "http://www.youtube.com/@すなねこ1223"
  },
  {
    name: "ねこっち",
    discordUsername: "nekottigames",
    role: "管理者",
    isAdmin: true,
    isStaff: true,
    youtube: false,
    youtubeUrl: ""
  },
  {
    name: "isikazu",
    discordUsername: "isikazu_87914",
    role: "マイクラ鯖管理者",
    isAdmin: false,
    isStaff: true,
    youtube: false,
    youtubeUrl: ""
  },
  {
    name: "Deadly Flour",
    discordUsername: "flour_deadly",
    role: "メンバー",
    isAdmin: false,
    isStaff: false,
    youtube: false,
    youtubeUrl: ""
  },
  {
    name: "die",
    discordUsername: "mi1234561",
    role: "メンバー",
    isAdmin: false,
    isStaff: false,
    youtube: false,
    youtubeUrl: ""
  },
  {
    name: "simachan_jp",
    discordUsername: "simachan_jp",
    role: "メンバー",
    isAdmin: false,
    isStaff: false,
    youtube: false,
    youtubeUrl: ""
  },
  {
    name: "クッパ",
    discordUsername: "kutsupasan.",
    role: "メンバー",
    isAdmin: false,
    isStaff: false,
    youtube: false,
    youtubeUrl: ""
  },
  {
    name: "Ryutaka_MC",
    discordUsername: "ryutakaminecraft_22760_8",
    role: "メンバー",
    isAdmin: false,
    isStaff: false,
    youtube: false,
    youtubeUrl: ""
  }
];
