# [chinese-number-format](https://www.npmjs.com/package/chinese-number-format)

[![NPM version][npm-version-image]][npm-url]

> A utility for converting between Chinese numerals and Arabic numbers, supporting both Traditional (zh-TW) and Simplified Chinese (zh-CN).

## Install

```bash
$ npm install chinese-number-format
```

## Usage

```js
import { toChinese, toChineseWithUnits, toNumber, toUpperCase } from 'chinese-number-format';

// Convert numbers to Chinese characters
toChinese(1234567890, 'zh-TW');
//=> '一二三四五六七八九〇'
toChinese(9876543210, 'zh-CN');
//=> '九八七六五四三二一〇'

// Convert numbers to Chinese with units
toChineseWithUnits(1234567890, 'zh-TW');
//=> '一十二億三千四百五十六萬七千八百九十'
toChineseWithUnits(123.45, 'zh-CN');
//=> '一百二十三点四五'

// Convert Chinese to numbers
toNumber('一二三四五六七八九〇');
//=> 1234567890
toNumber('一二三點四五');
//=> 123.45

// Convert to uppercase Chinese numerals
toUpperCase('一二三', 'zh-TW');
//=> '壹貳參'
toUpperCase('123', 'zh-CN');
//=> '壹贰叁'
```

## Features

-   Convert numbers to Chinese characters
-   Convert numbers to Chinese with units (up to 兆/trillion)
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

#### locale

Type: `'zh-TW' | 'zh-CN'`
Default: `'zh-TW'`

## Notes

-   Default locale is zh-TW (Traditional Chinese)
-   Maximum supported unit for toChineseWithUnits is 兆 (trillion)
-   toNumber does not support conversion of numbers with units

[npm-url]: https://www.npmjs.com/package/chinese-number-format
[npm-version-image]: https://img.shields.io/npm/v/chinese-number-format.svg?style=flat
