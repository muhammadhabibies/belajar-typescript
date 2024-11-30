/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  // preset: "ts-jest",
  // testEnvironment: "node",
  // // transform: {
  // //   "^.+.tsx?$": ["ts-jest", {}],
  // // },
  // // transformIgnorePatterns: [
  // //   "/node_modules/(?!your-package-to-transform).+\\.js$",
  // // ],
  // moduleFileExtensions: ["ts", "js"],
  // transform: {
  //   "^.+\\.ts$": "ts-jest", // Pastikan .ts dan .tsx diproses oleh ts-jest
  // },
  // globals: {
  //   "ts-jest": {
  //     tsconfig: "tsconfig.json", // Pastikan tsconfig digunakan
  //   },
  // },
  // =============
  // preset: "ts-jest",
  // testEnvironment: "node",
  // transform: {
  //   "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest",
  // },
  // transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
  // ================
  roots: ["<rootDir>/tests"],
  testMatch: [
    "**/tests/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  // namespace alias path import agar tidak error, kadang ada yang error kadang ada yang engga, tapi buat yang error solusinya moduleNameMapper ini ditambahkan
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Atur sesuai dengan konfigurasi paths di tsconfig
  },
};

// kalo di package.json, ga pake file ini, tapi typescript ga akan error euy kalo ga pake jest.config.ini, sebelumnya di package.json tambahin ini:
// "jest": {
//   "transform": {
//     "^.+\\.[t|j]sx?$": "babel-jest"
//   }
// },
// ternyata bisa package.json ini asal babel-jest nya ini diganti jadi ts-jest

// masih belum ngerti juga kenapa test di package.json bisa dipanggil cuman npm test doang ga npm run test aih
