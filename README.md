# Rnクラン ホームページ

Rnクラン(マインクラフトコミュニティ)の公式ホームページです。素のHTML / CSS / JavaScript のみで作られているので、GitHub Pagesでそのまま公開できます。

## ファイル構成

```
rn-clan-site/
├── index.html        ページ本体
├── style.css          デザイン(色・フォント・レイアウト)
├── script.js          メンバー/ギャラリー描画、Discordウィジェット取得
├── members.js         メンバー情報(ここを編集して更新)
├── gallery.js         ギャラリー画像リスト(ここを編集して更新)
└── assets/
    ├── logo.png       クランロゴ
    └── gallery/        ギャラリー用の画像を入れるフォルダ
```

## GitHub Pagesで公開する手順

1. GitHubで新しいリポジトリを作成する(例: `rn-clan`)
2. このフォルダの中身をすべてリポジトリのルートに置いて `git push`
3. リポジトリの **Settings → Pages** を開く
4. **Branch** を `main`(またはpushしたブランチ)、フォルダを `/ (root)` に設定して保存
5. 数分待つと `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開されます

## 更新のしかた

### メンバーを追加・変更する
`members.js` を開いて配列に1人分追加/編集します。`discordUsername` はDiscordの
ユーザー名(表示名ではなく `@から始まるほう`)。ここが合っていると、その人が
今Discordにオンラインのときにカードがうっすら光ります。

`youtube` を空文字 `""` のままにしておくと、公式チャンネルへのリンクが
仮表示されます。個人チャンネルが決まったらURLを入れてください。

### ギャラリー画像を追加する
1. 画像を `assets/gallery/` フォルダに入れる
2. `gallery.js` の配列に1行追加する

```js
const GALLERY_IMAGES = [
  { src: "assets/gallery/spawn-castle.png", caption: "スポーン城" },
];
```

画像を1枚も登録していない間は「準備中」の枠が自動で表示されます。

### Discordのオンライン人数表示について
`script.js` 内の `DISCORD_SERVER_ID` を使って、Discordの公式ウィジェットJSON
(`https://discord.com/api/guilds/{ID}/widget.json`)から取得しています。
トークン不要・CORS対応の公開エンドポイントなので、静的サイトのままで動作します。

ただし、この方式で分かるのは **今オンラインの人だけ** です。サーバー設定で
ウィジェットをOFFにすると人数が取得できなくなるので、その場合は
「Discordサーバーはいつでも参加OKです」という文言にフォールバックします。

## まだ仮になっている部分

- ギャラリー画像(未設定 → 「準備中」枠を表示中)
- メンバー個人のYouTubeチャンネルURL(未設定 → 公式チャンネルのリンクで仮表示)
- メンバーのアバター画像(現在は名前の頭文字を表示。`members.js` の
  `avatarUrl` に画像URLを入れると差し替わります)
