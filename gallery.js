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
  { src: "assets/gallery/拠点内.png", caption: "簡易拠点" },
  { src: "assets/gallery/拠点外.png", caption: "拠点周り" },
  { src: "assets/gallery/採掘場", caption: "採掘場" },
  { src: "assets/gallery/ねざー.png", caption: "ネザーポータル付近" },
];
