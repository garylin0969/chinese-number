# [chinese-number-format](https://www.npmjs.com/package/chinese-number-format)

[![NPM version][npm-version-image]][npm-url]

> A utility for converting between Chinese numerals and Arabic numbers, supporting both Traditional (zh-TW) and Simplified Chinese (zh-CN).

## Install

```bash
$ npm install chinese-number-format
```

## Usage

```js
import { toChinese, toChineseWithUnits, toChineseApproximate, toNumber, toUpperCase } from 'chinese-number-format';

// Convert numbers to Chinese characters
toChinese(1234567890, 'zh-TW');
//=> '一二三四五六七八九零'
toChinese(9876543210, 'zh-CN');
//=> '九八七六五四三二一零'

// Convert numbers to Chinese with units
toChineseWithUnits(1234567890, 'zh-TW');
//=> '一十二億三千四百五十六萬七千八百九十'
toChineseWithUnits(123.45, 'zh-CN');
//=> '一百二十三点四五'

// Convert Chinese to numbers
toNumber('一二三四五六七八九零');
//=> 1234567890
toNumber('一二三點四五');
//=> 123.45

// Convert to uppercase Chinese numerals
toUpperCase('一二三', 'zh-TW');
//=> '壹貳參'
toUpperCase('123', 'zh-CN');
//=> '壹贰叁'

// Convert numbers to approximate Chinese (New in 1.0.3)
toChineseApproximate(12345);
//=> '一點二萬'
toChineseApproximate(1234567890, { locale: 'zh-CN' });
//=> '十二点三亿'
toChineseApproximate(12345, { precision: 2 });
//=> '一點二三萬'
```

## Features

-   Convert numbers to Chinese characters
-   Convert numbers to Chinese with units (up to 載/载)
-   Convert numbers to approximate Chinese with units (New in 1.0.3)
-   Convert Chinese characters to numbers
-   Convert to uppercase Chinese numerals
-   Support both Traditional Chinese (zh-TW) and Simplified Chinese (zh-CN)

## API

### toChinese(number, locale?)

Returns: `String`
Converts a number to Chinese characters without units.

### toChineseWithUnits(number, locale?)

Returns: `String`
Converts a number to Chinese characters with appropriate units.

### toNumber(chinese)

Returns: `Number`
Converts Chinese numerals to numbers. Does not support numbers with units.

### toUpperCase(input, locale?)

Returns: `String`
Converts numbers or Chinese numerals to uppercase Chinese characters.

### toChineseApproximate(number, options?) (New in 1.0.3)

Returns: `String`
Converts a number to approximate Chinese representation.

Options:

-   `locale`: 'zh-TW' | 'zh-CN' (Default: 'zh-TW')
-   `precision`: number (Default: 1) - Number of decimal places

#### locale

Type: `'zh-TW' | 'zh-CN'`
Default: `'zh-TW'`

## Notes

-   Default locale is zh-TW (Traditional Chinese)
-   Maximum supported unit for toChineseWithUnits is 載/载 (10^44)
-   toNumber does not support conversion of numbers with units
-   toChineseApproximate supports automatic unit selection for large numbers

## Changelog

### 1.0.3

-   Added new `toChineseApproximate` function for approximate number representation
-   Optimized zero handling in number conversion
-   Improved large number support

[npm-url]: https://www.npmjs.com/package/chinese-number-format
[npm-version-image]: https://img.shields.io/npm/v/chinese-number-format.svg?style=flat
