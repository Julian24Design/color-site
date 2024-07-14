/** @type {import('postcss-load-config').Config} */
const px2remOptions = {
  rootValue: { px: 16 },
  unitPrecision: 5,
  mediaQuery: false,
  minPixelValue: 0,
};

const config = {
  plugins: {
    tailwindcss: {},
    "postcss-plugin-px2rem": px2remOptions,
  },
};

export default config;
