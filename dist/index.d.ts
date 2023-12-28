type Locales = 'zh-TW' | 'zh-CN';
declare const toUpperCase: (str: string, locales?: Locales) => string;
declare function toChinese(num: number, locales?: Locales): string;
declare function toNumber(str: string): number;
declare function toChineseWithUnits(num: number, locales?: Locales): string;
export { toChinese, toChineseWithUnits, toNumber, toUpperCase };
