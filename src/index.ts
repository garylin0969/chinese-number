// Locales，可以是 'zh-TW' 或 'zh-CN'
type Locales = 'zh-TW' | 'zh-CN';

// 中文數字位數名稱
const twDigits: string[] = ['', '十', '百', '千', '萬', '十', '百', '千', '億', '十', '百', '千', '兆', '十', '百', '千'];
const cnDigits: string[] = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '兆', '十', '百', '千'];

// 將繁體的大寫數字映射到其對應的其他表示方式
const twUpperCaseMap: Map<string, string[]> = new Map([
    ['零', ['0', '０', '〇', '零']],
    ['壹', ['1', '１', '一', '壹']],
    ['貳', ['2', '２', '二', '貳', '贰']],
    ['參', ['3', '３', '三', '參', '叁']],
    ['肆', ['4', '４', '四', '肆']],
    ['伍', ['5', '５', '五', '伍']],
    ['陸', ['6', '６', '六', '陸', '陆']],
    ['柒', ['7', '７', '七', '柒']],
    ['捌', ['8', '８', '八', '捌']],
    ['玖', ['9', '９', '九', '玖']],
    ['拾', ['十', '拾']],
    ['佰', ['百', '佰']],
    ['仟', ['千', '仟']],
    ['萬', ['萬', '万']],
    ['億', ['億', '亿']],
    ['兆', ['兆']],
    ['點', ['.', '．', '點', '点']],
]);

// 將簡體的大寫數字映射到其對應的其他表示方式
const cnUpperCaseMap: Map<string, string[]> = new Map([
    ['零', ['0', '０', '〇', '零']],
    ['壹', ['1', '１', '一', '壹']],
    ['贰', ['2', '２', '二', '貳', '贰']],
    ['叁', ['3', '３', '三', '參', '叁']],
    ['肆', ['4', '４', '四', '肆']],
    ['伍', ['5', '５', '五', '伍']],
    ['陆', ['6', '６', '六', '陸', '陆']],
    ['柒', ['7', '７', '七', '柒']],
    ['捌', ['8', '８', '八', '捌']],
    ['玖', ['9', '９', '九', '玖']],
    ['拾', ['十', '拾']],
    ['佰', ['百', '佰']],
    ['仟', ['千', '仟']],
    ['万', ['萬', '万']],
    ['亿', ['億', '亿']],
    ['兆', ['兆']],
    ['点', ['.', '．', '點', '点']],
]);

// 將字串數字映射到其對應的其他表示方式
const convertNumber: Map<string, string[]> = new Map([
    ['0', ['0', '０', '〇', '零']],
    ['1', ['1', '１', '一', '壹']],
    ['2', ['2', '２', '二', '貳', '贰']],
    ['3', ['3', '３', '三', '參', '叁']],
    ['4', ['4', '４', '四', '肆']],
    ['5', ['5', '５', '五', '伍']],
    ['6', ['6', '６', '六', '陸', '陆']],
    ['7', ['7', '７', '七', '柒']],
    ['8', ['8', '８', '八', '捌']],
    ['9', ['9', '９', '九', '玖']],
    ['.', ['.', '．', '點', '点']],
]);

// 將.轉換為中文點
const pointChinses = (locales: Locales = 'zh-TW'): string => (locales === 'zh-TW' ? '點' : '点');

// 將數字字串轉換為大寫
const toUpperCase = (str: string, locales: Locales = 'zh-TW'): string => {
    // 定義大寫數字的映射
    const upperCaseMap: Map<string, string[]> = locales === 'zh-TW' ? twUpperCaseMap : cnUpperCaseMap;
    let result: string = '';
    for (const char of str) {
        let found: boolean = false;
        // 遍歷大寫數字的映射
        for (const [upperCase, chars] of upperCaseMap.entries()) {
            if (chars.includes(char)) {
                result += upperCase;
                found = true;
                break;
            }
        }
        if (!found) result += char;
    }
    return result;
};

// 將數字轉換為中文
function toChinese(num: number, locales: Locales = 'zh-TW') {
    let result = num.toLocaleString('zh-Hans-CN-u-nu-hanidec', { useGrouping: false });
    // 將.取代為中文點
    result = result.replace(/\./g, pointChinses(locales));
    return result;
}

// 將中文數字字串轉換為數字
function toNumber(str: string): number {
    let result: string = '';
    for (const char of str) {
        let found: boolean = false;
        // 遍歷數字的映射
        for (const [num, chars] of convertNumber.entries()) {
            if (chars.includes(char)) {
                result += num;
                found = true;
                break;
            }
        }
        if (!found) return NaN;
    }

    return Number(result);
}

//將數字轉成中文(含單位)
function toChineseWithUnits(num: number, locales: Locales = 'zh-TW'): string {
    // 定義中文數位的陣列
    const chineseDigits = locales === 'zh-TW' ? twDigits : cnDigits;
    // 將數字轉換為字串
    const numStr = num.toString();
    // 將數字字串以小數點分割
    const numStrArr = numStr.split('.');
    // 獲取整數部分
    const integerPart = numStrArr[0];
    // 獲取小數部分
    const floatPart = numStrArr[1];

    // 初始化結果字串
    let result = '';

    // 遍歷數字的每一位
    for (let i = 0; i < integerPart.length; i++) {
        // 獲取當前位的數字
        const currentChineseNumber = parseInt(integerPart[i]).toLocaleString('zh-Hans-CN-u-nu-hanidec', { useGrouping: false });
        // 獲取當前位的中文數位
        const currentDigit = chineseDigits[integerPart.length - i - 1];
        // 格式化當前位的中文數字和數位
        const currentFormat =
            currentChineseNumber !== '〇' || ['萬', '万', '億', '亿', '兆'].includes(currentDigit)
                ? currentChineseNumber + currentDigit
                : currentChineseNumber;
        // 將格式化的結果添加到結果字串中
        result += currentFormat;
    }

    // 判斷是否有小數部分
    if (floatPart) {
        // 將小數部分添加到結果字串中
        result += pointChinses(locales);
        // 遍歷小數部分的每一位
        for (let i = 0; i < floatPart.length; i++) {
            // 獲取當前位的數字
            const currentChineseNumber = parseInt(floatPart[i]).toLocaleString('zh-Hans-CN-u-nu-hanidec', { useGrouping: false });
            // 將格式化的結果添加到結果字串中
            result += currentChineseNumber;
        }
    }

    // 移除結果中的多餘零和單位
    result = result
        // 將連續的零替換為一個零
        .replace(/〇+/g, '〇')
        // 將零萬、零億和零兆替換為萬、億和兆
        .replace(/〇(萬|万|億|亿|兆)/g, '$1')
        // 移除結尾的零
        .replace(/〇+$/, '');

    // 返回結果
    return result;
}

export { toChinese, toChineseWithUnits, toNumber, toUpperCase };
