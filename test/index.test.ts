import { toChinese, toChineseWithUnits, toNumber, toUpperCase } from '../src/index';

describe('toChinese function', () => {
    it('數字轉中文整數', () => {
        expect(toChinese(1234567890, 'zh-TW')).toBe('一二三四五六七八九〇');
        expect(toChinese(9876543210, 'zh-CN')).toBe('九八七六五四三二一〇');
    });

    it('數字轉中文小數', () => {
        expect(toChinese(123.45, 'zh-TW')).toBe('一二三點四五');
        expect(toChinese(123.45, 'zh-CN')).toBe('一二三点四五');
    });
});

describe('toChineseWithUnits function', () => {
    it('數字轉中文整數含單位', () => {
        expect(toChineseWithUnits(1234567890, 'zh-TW')).toBe('一十二億三千四百五十六萬七千八百九十');
        expect(toChineseWithUnits(1234567890, 'zh-CN')).toBe('一十二亿三千四百五十六万七千八百九十');
    });

    it('數字轉中文小數含單位', () => {
        expect(toChineseWithUnits(123.45, 'zh-TW')).toBe('一百二十三點四五');
        expect(toChineseWithUnits(123.45, 'zh-CN')).toBe('一百二十三点四五');
    });
});

describe('toNumber function', () => {
    it('整數中文轉數字', () => {
        expect(toNumber('一二三四五六七八九〇')).toBe(1234567890);
        expect(toNumber('壹貳參肆伍陸柒捌玖零')).toBe(1234567890);
    });

    it('小數中文轉數字', () => {
        expect(toNumber('一二三點四五')).toBe(123.45);
        expect(toNumber('一二三点四五')).toBe(123.45);
    });

    it('非數字中文', () => {
        expect(toNumber('InvalidInput')).toBeNaN();
    });
});

describe('toUpperCase function', () => {
    it('整數中文轉大寫', () => {
        expect(toUpperCase('一二三', 'zh-TW')).toBe('壹貳參');
        expect(toUpperCase('一二三', 'zh-CN')).toBe('壹贰叁');
    });
});
