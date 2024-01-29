# handier-utils

**函数工具集**

## 安装

```
npm install --save handier-utils
```

## chunk

> 拆分数组

### 参数类型

```ts
function chunk(array: any[], size: number): any[];
```

### 使用示例

```ts
import { chunk } from "handier-utils";
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = chunk(originalArray, 3);
console.log(chunkedArray);
// 输出: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]
```

## debounce

> 防抖函数

```ts
function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay?: number
): (this: ThisParameterType<T>, ...args: Parameters<T>) => void;
```

## throttle

> 节流函数

```ts
function throttle<T extends (...args: any[]) => void>(
  func: T,
  delay?: number
): (this: ThisParameterType<T>, ...args: Parameters<T>) => void;
```

## cloneDeep

> 深拷贝

```ts
function cloneDeep<T>(source: T): T;
```

### 使用示例

```ts
import { cloneDeep } from "handier-utils";
const source = { a: 1, b: { c2 } };
const target = cloneDeep(source);
console.log(source.b === target.b);
// 输出: false
```

## getRandomNumber

> 生成范围内[min, max]随机数

```ts
function getRandomNumber(min?: number, max?: number): number;
```

## getRandomHexColor

> 生成随机十六进制颜色码

```ts
function getRandomHexColor(): string;
```

## getRandomRgbColor

> 生成 `rgb|rgba` 类型随机颜色

```ts
function getRandomRgbColor(type?: "rgb" | "rgba"): string;
```

## getRandomString

> 生成随机字符串

```ts
function getRandomString(len?: number): string;
```

## formatNumberWithCommas

> 数字转换为带千字符的字符串

```ts
function formatNumberWithCommas(num: number): string;
```

## firstLetterUpper

> 首字母大写

```ts
function firstLetterUpper(str: string): string;
```

## isFullScreen

> 判断是否全屏中

```ts
function isFullScreen(): boolean;
```

## requestFullscreen

> 传入一个 `dom` 元素, 使其全屏

```ts
function requestFullscreen(element: HTMLElement): void;
```

## exitFullscreen

> 退出全屏

```ts
function exitFullscreen(): void;
```

## fileToBase64

> 文件转 base64

```ts
function fileToBase64(file: File): Promise<string | null>;
```

## base64toFile

> base64 转 file

```ts
function base64toFile(base64String: string, fileName: string): File;
```

## base64toBlob

> base64 转 blob

```ts
function base64toBlob(base64String: string): Blob;
```

## blobToFile

> blob 转 file

```ts
function blobToFile(blob: Blob, fileName: string): File;
```

## fileToBlob

> file 转 blob

```ts
function downloadFile(file: Blob, fileName: string): void;
```

## getImageSize

> 获取图片宽高

```ts
function getImageSize(imageSource: string | File): Promise<{
  width: number;
  height: number;
}>;
```

## add

> 数字相加，解决精度丢失问题

```ts
function add(...numbers: number[]): number;
```

## sub

> 数字相减，解决精度丢失问题

```ts
function sub(...numbers: number[]): number;
```

## wait

> 等待指定时间

```ts
function wait(ms: number): Promise<void>;
```

## copyTextToClipboard

> 复制文本到剪贴板

```ts
function copyTextToClipboard(text: string): void;
```
