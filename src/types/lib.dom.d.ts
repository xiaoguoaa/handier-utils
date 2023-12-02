interface HTMLElement {
  mozRequestFullScreen: () => void;
  webkitRequestFullscreen: () => void;
  msRequestFullscreen: () => void;
}

interface Document {
  mozCancelFullScreen: () => void;
  webkitExitFullscreen: () => void;
  msExitFullscreen: () => void;
  mozFullScreenElement: HTMLElement;
  mozFullScreen: HTMLElement;
  webkitFullscreenElement: HTMLElement;
  webkitIsFullScreen: HTMLElement;
  msFullscreenElement: HTMLElement;
}
