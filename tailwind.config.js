module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{vue,js,ts}',
      './index.html',
    ],
  },
  theme: {
    extend: {
      zIndex: {
        '10000': 10000,
      },
    },
  },
}
