import { toChinese, toChineseWithUnits, toNumber, toUpperCase, toChineseApproximate } from '../src/index';

describe('toChinese 函數', () => {
    test('應該將整數轉換為中文字 (繁體)', () => {
        expect(toChinese(1234567890)).toBe('一二三四五六七八九零');
        expect(toChinese(0)).toBe('零');
        expect(toChinese(9999999999)).toBe('九九九九九九九九九九');
    });

    test('應該將整數轉換為中文字 (簡體)', () => {
        expect(toChinese(1234567890, 'zh-CN')).toBe('一二三四五六七八九零');
        expect(toChinese(0, 'zh-CN')).toBe('零');
    });

    test('應該將小數轉換為中文字 (繁體)', () => {
        expect(toChinese(123.45)).toBe('一二三點四五');
        expect(toChinese(0.1)).toBe('零點一');
    });

    test('應該將小數轉換為中文字 (簡體)', () => {
        expect(toChinese(123.45, 'zh-CN')).toBe('一二三点四五');
        expect(toChinese(0.1, 'zh-CN')).toBe('零点一');
    });
});

describe('toChineseWithUnits 函數', () => {
    test('應該將整數轉換為帶單位的中文字 (繁體)', () => {
        expect(toChineseWithUnits(1234567890)).toBe('一十二億三千四百五十六萬七千八百九十');
        expect(toChineseWithUnits(10000)).toBe('一萬');
        expect(toChineseWithUnits(100000000)).toBe('一億');
        expect(toChineseWithUnits(1000000000000)).toBe('一兆');
    });

    test('應該將整數轉換為帶單位的中文字 (簡體)', () => {
        expect(toChineseWithUnits(1234567890, 'zh-CN')).toBe('一十二亿三千四百五十六万七千八百九十');
        expect(toChineseWithUnits(10000, 'zh-CN')).toBe('一万');
        expect(toChineseWithUnits(100000000, 'zh-CN')).toBe('一亿');
        expect(toChineseWithUnits(1000000000000, 'zh-CN')).toBe('一兆');
    });

    test('應該正確處理零', () => {
        expect(toChineseWithUnits(0)).toBe('零');
        expect(toChineseWithUnits(0, 'zh-CN')).toBe('零');
    });

    test('應該將小數轉換為帶單位的中文字 (繁體)', () => {
        expect(toChineseWithUnits(123.45)).toBe('一百二十三點四五');
        expect(toChineseWithUnits(1000.1)).toBe('一千點一');
    });

    test('應該將小數轉換為帶單位的中文字 (簡體)', () => {
        expect(toChineseWithUnits(123.45, 'zh-CN')).toBe('一百二十三点四五');
        expect(toChineseWithUnits(1000.1, 'zh-CN')).toBe('一千点一');
    });

    test('應該正確處理大數字 (繁體)', () => {
        expect(toChineseWithUnits(1e16)).toBe('一京');
        expect(toChineseWithUnits(1e20)).toBe('一垓');
        expect(toChineseWithUnits(1e24)).toBe('一秭');
    });

    test('應該正確處理大數字 (簡體)', () => {
        expect(toChineseWithUnits(1e16, 'zh-CN')).toBe('一京');
        expect(toChineseWithUnits(1e20, 'zh-CN')).toBe('一垓');
        expect(toChineseWithUnits(1e24, 'zh-CN')).toBe('一秭');
        expect(toChineseWithUnits(1e28, 'zh-CN')).toBe('一穰');
        expect(toChineseWithUnits(1e32, 'zh-CN')).toBe('一沟');
        expect(toChineseWithUnits(1e36, 'zh-CN')).toBe('一涧');
        expect(toChineseWithUnits(1e40, 'zh-CN')).toBe('一正');
        expect(toChineseWithUnits(1e44, 'zh-CN')).toBe('一载');
    });
});

describe('toChineseApproximate 函數', () => {
    test('應該正確處理近似值 (繁體)', () => {
        expect(toChineseApproximate(12345)).toBe('一點二萬');
        expect(toChineseApproximate(1234567890)).toBe('十二點三億');
    });

    test('應該正確處理近似值 (簡體)', () => {
        expect(toChineseApproximate(12345, { locale: 'zh-CN' })).toBe('一点二万');
        expect(toChineseApproximate(1234567890, { locale: 'zh-CN' })).toBe('十二点三亿');
    });

    test('應該支援自定義精度', () => {
        expect(toChineseApproximate(12345, { precision: 2 })).toBe('一點二三萬');
        expect(toChineseApproximate(12345, { locale: 'zh-CN', precision: 2 })).toBe('一点二三万');
    });

    test('應該在小於一萬時返回完整數字', () => {
        expect(toChineseApproximate(9999)).toBe('九千九百九十九');
        expect(toChineseApproximate(9999, { locale: 'zh-CN' })).toBe('九千九百九十九');
    });
});

describe('toNumber 函數', () => {
    test('應該將中文字轉換為數字', () => {
        expect(toNumber('一二三四五六七八九零')).toBe(1234567890);
        expect(toNumber('零')).toBe(0);
    });

    test('應該將大寫中文字轉換為數字', () => {
        expect(toNumber('壹貳參肆伍陸柒捌玖零')).toBe(1234567890);
        expect(toNumber('零')).toBe(0);
    });

    test('應該將中文小數轉換為數字', () => {
        expect(toNumber('一二三點四五')).toBe(123.45);
        expect(toNumber('一二三点四五')).toBe(123.45);
    });

    test('應該處理無效輸入', () => {
        expect(toNumber('無效輸入')).toBeNaN();
        expect(toNumber('一二三四A')).toBeNaN();
        expect(toNumber('')).toBeNaN();
    });
});

describe('toUpperCase 函數', () => {
    test('應該將中文數字轉換為大寫 (繁體)', () => {
        expect(toUpperCase('一二三')).toBe('壹貳參');
        expect(toUpperCase('零一二三四五六七八九')).toBe('零壹貳參肆伍陸柒捌玖');
    });

    test('應該將中文數字轉換為大寫 (簡體)', () => {
        expect(toUpperCase('一二三', 'zh-CN')).toBe('壹贰叁');
        expect(toUpperCase('零一二三四五六七八九', 'zh-CN')).toBe('零壹贰叁肆伍陆柒捌玖');
    });

    test('應該處理小數點', () => {
        expect(toUpperCase('一二三點四五')).toBe('壹貳參點肆伍');
        expect(toUpperCase('一二三点四五', 'zh-CN')).toBe('壹贰叁点肆伍');
    });

    test('應該保留非數字字符', () => {
        expect(toUpperCase('abc123')).toBe('abc123');
        expect(toUpperCase('測試123')).toBe('測試123');
    });
});
