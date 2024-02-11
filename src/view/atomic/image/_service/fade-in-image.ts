/**
 * 画像の読み込み状態を切り替える関数
 * 画像が読み込まれている場合、即表示する
 * 画像が読み込まれていない場合、viewportに入った時に表示する
 * @param elm 切り替える対象の画像要素
 */
export const toggleImageOpacityOnInterSection = (elm: HTMLImageElement) => {
  if (elm.complete) {
    toggleImageOpacity(elm);
  } else {
    createIntersectionObserver(() => toggleImageOpacity(elm)).observe(elm);
  }
};

/**
 * @param action viewportに入った時に実行する関数
 * @returns IntersectionObserver viewportの監視をするインスタンス
 */
const createIntersectionObserver = (action: () => void) => {
  return new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        action();
        observer.disconnect();
      }
    });
  });
};

/**
 * 画像要素のopacityを1にする関数
 * @param elm 切り替える対象の画像要素
 */
function toggleImageOpacity(elm: HTMLImageElement) {
  elm.style.opacity = "1";
}
