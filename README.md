# chinese-number-format

[![NPM version][npm-version-image]][npm-url]

> A utility for converting between Chinese numerals and Arabic numbers, supporting both Traditional (zh-TW) and Simplified Chinese (zh-CN).

## Features

-   Convert numbers to Chinese characters
-   Convert numbers to Chinese with units (up to 載/载)
-   Convert numbers to approximate Chinese with units
-   Convert Chinese characters to numbers
-   Convert to uppercase Chinese numerals
-   Support both Traditional Chinese (zh-TW) and Simplified Chinese (zh-CN)

## Installation

```bash
npm install chinese-number-format
```

## API Reference

### Basic Conversion

```js
import { toChinese } from 'chinese-number-format';

// Basic number to Chinese
toChinese(1234567890, 'zh-TW'); // => '一二三四五六七八九零'
toChinese(9876543210, 'zh-CN'); // => '九八七六五四三二一零'
```

### Units Conversion

```js
import { toChineseWithUnits } from 'chinese-number-format';

// Number to Chinese with units
toChineseWithUnits(1234567890, 'zh-TW'); // => '一十二億三千四百五十六萬七千八百九十'
toChineseWithUnits(123.45, 'zh-CN'); // => '一百二十三点四五'
```

### Approximate Numbers

```js
import { toChineseApproximate } from 'chinese-number-format';

// Convert to approximate values
toChineseApproximate(12345); // => '一點二萬'
toChineseApproximate(1234567890, { locale: 'zh-CN' }); // => '十二点三亿'
toChineseApproximate(12345, { precision: 2 }); // => '一點二三萬'
```

### Chinese to Number

```js
import { toNumber } from 'chinese-number-format';

// Chinese to number
toNumber('一二三四五六七八九零'); // => 1234567890
toNumber('一二三點四五'); // => 123.45
```

### Uppercase Conversion

```js
import { toUpperCase } from 'chinese-number-format';

// Convert to uppercase Chinese numerals
toUpperCase('一二三', 'zh-TW'); // => '壹貳參'
toUpperCase('123', 'zh-CN'); // => '壹贰叁'
```

### Month Conversion

```js
import { toChineseMonth } from 'chinese-number-format';

// Convert to Chinese month
toChineseMonth(1); // => '一月'
toChineseMonth(1, { format: 'traditional' }); // => '正月'
toChineseMonth(12, { locale: 'zh-CN', format: 'traditional' }); // => '腊月'
```

## API Details

### toChinese(number, locale?)

-   `number`: Number to convert
-   `locale`: 'zh-TW' | 'zh-CN' (Default: 'zh-TW')
-   Returns: String

### toChineseWithUnits(number, locale?)

-   `number`: Number to convert
-   `locale`: 'zh-TW' | 'zh-CN' (Default: 'zh-TW')
-   Returns: String

### toChineseApproximate(number, options?)

-   `number`: Number to convert
-   `options`:
    -   `locale`: 'zh-TW' | 'zh-CN' (Default: 'zh-TW')
    -   `precision`: number (Default: 1)
-   Returns: String

### toNumber(chinese)

-   `chinese`: Chinese numeral string
-   Returns: Number

### toUpperCase(input, locale?)

-   `input`: String to convert
-   `locale`: 'zh-TW' | 'zh-CN' (Default: 'zh-TW')
-   Returns: String

### toChineseMonth(month, options?)

-   `month`: Number (1-12)
-   `options`:
    -   `locale`: 'zh-TW' | 'zh-CN' (Default: 'zh-TW')
    -   `format`: 'traditional' | 'simple' (Default: 'simple')
-   Returns: String

## Notes

-   Default locale is zh-TW (Traditional Chinese)
-   Maximum supported unit for toChineseWithUnits is 載/载 (10^44)
-   toNumber does not support conversion of numbers with units
-   toChineseApproximate supports automatic unit selection for large numbers

[npm-url]: https://www.npmjs.com/package/chinese-number-format
[npm-version-image]: https://img.shields.io/npm/v/chinese-number-format.svg?style=flat
