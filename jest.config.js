let Load_All_Project_Properties = require('./src/SetUp_TearDown/Load_Test_Data.js').Load_All_Project_Properties;
let Load_All_Test_Data = require('./src/SetUp_TearDown/Load_Test_Data.js').Load_All_Test_Data;
let Load_All_Test_Locators = require('./src/SetUp_TearDown/Load_Test_Data.js').Load_All_Test_Locators;

module.exports = {
    verbose: true,
    roots: [
        "./"
    ],
    modulePaths: [
        "<rootDir>/src/",
        "<rootDir>/src/resources/Drivers",
        "<rootDir>/src/resources/Test_Data",
        "<rootDir>/src/resources/Project_Properties",
        "<rootDir>/src/resources/Test_Data_Locators",
        "<rootDir>/src/SetUp_TearDown",
        "<rootDir>/src/Suite_Functions",
        "<rootDir>/src/Tests_Main",
    ],
    moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node","yaml", "yml"],
    testMatch: ["<rootDir>/src/Tests_Main/*.js","<rootDir>/src/Tests_Main/**/*.js"],
    globals: {
        __Test_Data: Load_All_Test_Data,
        __Test_Locators: Load_All_Test_Locators,
        __Test_Project_Properties: Load_All_Project_Properties
    }
};