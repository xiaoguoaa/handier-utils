import chunk from "./utils/chunk";
import throttle from "./utils/throttle";
import debounce from "./utils/debounce";
import clone from "./utils/clone";
import cloneDeep from "./utils/cloneDeep";
import getRandomNumber from "./utils/getRandomNumber";
import getRandomHexColor from "./utils/getRandomHexColor";
import getRandomRgbColor from "./utils/getRandomRgbColor";
import getRandomString from "./utils/getRandomString";
import formatNumberWithCommas from "./utils/formatNumberWithCommas";
import firstLetterUpper from "./utils/firstLetterUpper";
import {
  requestFullscreen,
  exitFullscreen,
  isFullScreen,
} from "./utils/fullscreen";

// file
import fileToBase64 from "./utils/file/fileToBase64";
import base64toFile from "./utils/file/base64toFile";
import base64toBlob from "./utils/file/base64toBlob";
import blobToFile from "./utils/file/blobToFile";
import fileToBlob from "./utils/file/fileToBlob";
import downloadFile from "./utils/file/downloadFile";
import getImageSize from "./utils/file/getImageSize";

import { add, sub } from "./utils/math";

import wait from "./utils/wait";

export {
  chunk,
  throttle,
  debounce,
  clone,
  cloneDeep,
  getRandomNumber,
  getRandomHexColor,
  getRandomRgbColor,
  getRandomString,
  formatNumberWithCommas,
  firstLetterUpper,
  requestFullscreen,
  exitFullscreen,
  isFullScreen,
  fileToBase64,
  base64toFile,
  base64toBlob,
  blobToFile,
  fileToBlob,
  downloadFile,
  getImageSize,
  add,
  sub,
  wait,
};
