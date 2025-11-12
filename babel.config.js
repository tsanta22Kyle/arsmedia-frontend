module.exports = {
  presets: [
    "next/babel",          // utilise les presets Next.js
    "@babel/preset-typescript",
    ["@babel/preset-react",{"runtime":"automatic"}],
  ],
};
