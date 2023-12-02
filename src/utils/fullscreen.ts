/**
 * ### 判断是否全屏中
 * @returns `true|false`
 */
function isFullScreen(): boolean {
  return !!(
    document.fullscreenElement !== null ||
    (document.mozFullScreenElement !== null && document.mozFullScreen) ||
    (document.webkitFullscreenElement !== null &&
      document.webkitIsFullScreen) ||
    (document.msFullscreenElement !== null &&
      document.msFullscreenElement !== undefined)
  );
}

/**
 * ### 传入一个 `dom` 元素, 使其全屏
 * @param element 要全屏的 `dom` 元素
 */
function requestFullscreen(element: HTMLElement): void {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

/**
 * ### 退出全屏
 */
function exitFullscreen(): void {
  if (isFullScreen()) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

export { requestFullscreen, exitFullscreen, isFullScreen };
