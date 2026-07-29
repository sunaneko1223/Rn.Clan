/**
 * Rnクラン ギャラリー画像データ
 * -----------------------------------------------------------
 * 画像を追加する手順:
 *   1. 画像ファイルを assets/gallery/ フォルダに入れる
 *      (例: assets/gallery/spawn-castle.png)
 *   2. 下の配列に { src: "assets/gallery/spawn-castle.png", caption: "説明文" }
 *      のような形で1行追加する
 *
 * 配列が空のままだと、枠だけのプレースホルダーが表示されます。
 * 枠の数は GALLERY_PLACEHOLDER_COUNT で調整できます。
 * -----------------------------------------------------------
 */

const GALLERY_PLACEHOLDER_COUNT = 8;

const GALLERY_IMAGES = [
  // 例:
  // { src: "assets/gallery/spawn-castle.png", caption: "スポーン城" },
];
