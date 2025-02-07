type Locales = 'zh-TW' | 'zh-CN';
declare const toUpperCase: (str: string, locales?: Locales) => string;
declare function toChinese(num: number, locale?: Locales): string;
declare function toNumber(str: string): number;
declare function toChineseWithUnits(num: number, locale?: Locales): string;
interface Options {
    locale?: Locales;
    precision?: number;
}
declare function toChineseApproximate(num: number, options?: Options): string;
export { toChinese, toChineseWithUnits, toChineseApproximate, toNumber, toUpperCase, type Options };
