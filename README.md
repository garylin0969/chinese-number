# chinese-number-format

## Features

-   數字轉中文 Convert numbers to Chinese
-   數字轉中文含單位 Convert numbers to Chinese including units
-   中文轉數字 Convert Chinese to numbers
-   中文數字轉大寫 Conversion of Chinese numerals to uppercase

## Quick start

-   Install with [npm](https://www.npmjs.com/): `npm install chinese-number-format`
-   Clone the repo: `git clone https://github.com/garylin0969/chinese-number-format.git`

## Example

```js
import {
    toChinese, // 數字轉中文
    toChineseWithUnits, // 數字轉中文含單位
    toNumber, // 中文轉數字
    toUpperCase, // 中文數字轉大寫
} from 'chinese-number-format';

// 預設為zh-TW

console.log(toChinese(1234567890, 'zh-TW')); // 一二三四五六七八九〇
console.log(toChinese(9876543210, 'zh-CN')); // 九八七六五四三二一〇

console.log(toChineseWithUnits(1234567890, 'zh-TW')); // 一十二億三千四百五十六萬七千八百九十
console.log(toChineseWithUnits(1234567890, 'zh-CN')); // 一十二亿三千四百五十六万七千八百九十
console.log(toChineseWithUnits(123.45, 'zh-TW')); // 一百二十三點四五
console.log(toChineseWithUnits(123.45, 'zh-CN')); // 一百二十三点四五

console.log(toNumber('一二三四五六七八九〇')); // 1234567890
console.log(toNumber('壹貳參肆伍陸柒捌玖零')); // 1234567890
console.log(toNumber('一二三點四五')); // 123.45
console.log(toNumber('一二三点四五')); // 123.45

console.log(toUpperCase('一二三', 'zh-TW')); // 壹貳參
console.log(toUpperCase('123', 'zh-TW')); // 壹貳參
console.log(toUpperCase('一二三', 'zh-CN')); // 壹贰叁
console.log(toUpperCase('123', 'zh-CN')); // 壹贰叁
```

## 備註

-   預設為 zh-TW
-   toChineseWithUnits 最大支援單位為千兆，其餘無限制
-   toNumber 不支援帶有單位的轉換
