/* eslint-disable @typescript-eslint/no-var-requires */
const PostCssConvertRemToPixel = require('postcss-convert-rem-to-pixel')

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    PostCssConvertRemToPixel({ baseValue: 16 }),
  ],
}
