/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://projectlandscape.ca",
  generateRobotsTxt: true, // (optional)
  // ...other options
};
