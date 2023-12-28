module.exports = {
    preset: 'ts-jest',
    testPathIgnorePatterns: [
        '/node_modules/', // 忽略 node_modules 文件下的文件
        '/dist/', // 忽略 dist 文件下的文件
    ],
    moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
    testEnvironment: 'node',
};
