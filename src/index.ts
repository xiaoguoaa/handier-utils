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
import readFileAsBase64 from "./utils/file/readFileAsBase64";
import base64toFile from "./utils/file/base64toFile";
import base64toBlob from "./utils/file/base64toBlob";
import blobToFile from "./utils/file/blobToFile";
import fileToBlob from "./utils/file/fileToBlob";

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
  readFileAsBase64,
  base64toFile,
  base64toBlob,
  blobToFile,
  fileToBlob,
};
