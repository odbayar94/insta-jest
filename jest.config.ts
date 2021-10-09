import type { Config } from "@jest/types";

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  // "moduleNameMapper": {
  //   "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "./__mocks__/fileMock.ts",
  //   "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  // },
  
  "transformIgnorePatterns": [
    "node_modules/(?!node-sass)/"
],
  "reporters": [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        "pageTitle": "Report Unit test"
      }
    ]
  ],
  "transform": {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
    ".(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "./jest-config/file-mock.ts",
    '.(css|less)$': './jest-config/style-mock.ts'
  }
   
};
export default config;