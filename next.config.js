
// const { i18n } = require('./next-i18next.config');

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   i18n,
// };

// export default nextConfig;
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n,
};

module.exports = nextConfig; // ✅ Use CommonJS export
