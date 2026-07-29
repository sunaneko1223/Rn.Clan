/**
 * Rnクラン メンバーデータ
 * -----------------------------------------------------------
 * ・discordUsername は Discordウィジェット(members.js が自動取得する
 *   オンライン一覧)とアイコンの下の名前を突き合わせるためのキーです。
 *   Discordのユーザー名(表示名ではなく @から始まるユーザー名)を入れてください。
 * ・youtube が空文字("")のメンバーはサンプルリンクとして
 *   YOUTUBE_SAMPLE_URL が使われます。実際のチャンネルが決まったら
 *   ここにURLを入れて上書きしてください。
 * ・avatarUrl を指定すると、そのメンバーのカードはアイコン画像を表示します。
 *   未指定の場合は名前の頭文字で自動生成します。
 * -----------------------------------------------------------
 */

const YOUTUBE_SAMPLE_URL = "https://www.youtube.com/@Rnクラン公式";

const MEMBERS = [
  {
    name: "すなねこ",
    discordUsername: "sunaneko2929",
    role: "管理者・鯖主",
    isAdmin: true,
    youtube: "",
    avatarUrl: ""
  },
  {
    name: "ねこっち",
    discordUsername: "nekottigames",
    role: "管理者",
    isAdmin: true,
    youtube: "",
    avatarUrl: ""
  },
  {
    name: "isikazu",
    discordUsername: "isikazu_87914",
    role: "メンバー",
    isAdmin: false,
    youtube: "",
    avatarUrl: ""
  },
  {
    name: "Deadly Flour",
    discordUsername: "flour_deadly",
    role: "メンバー",
    isAdmin: false,
    youtube: "",
    avatarUrl: ""
  },
  {
    name: "die",
    discordUsername: "mi1234561",
    role: "メンバー",
    isAdmin: false,
    youtube: "",
    avatarUrl: ""
  },
  {
    name: "simachan_jp",
    discordUsername: "simachan_jp",
    role: "メンバー",
    isAdmin: false,
    youtube: "",
    avatarUrl: ""
  },
  {
    name: "クッパ",
    discordUsername: "kutsupasan.",
    role: "メンバー",
    isAdmin: false,
    youtube: "",
    avatarUrl: ""
  },
  {
    name: "Ryutaka_MC",
    discordUsername: "ryutakaminecraft_22760_8",
    role: "メンバー",
    isAdmin: false,
    youtube: "",
    avatarUrl: ""
  }
];
