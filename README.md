# gwh-utils
**函数工具集**

## 安装
```
npm install --save gwh-utils
```

## Array

### chunk 拆分数组

#### 参数类型
```ts
function chunk(array: any[], size: number): any[];
```

#### 使用实例
```ts
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8];
const chunkedArray = chunk(originalArray, 3);
console.log(chunkedArray);
// 输出: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8 ] ]
```

### 待补充...