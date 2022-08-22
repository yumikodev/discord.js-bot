const { version } = require("../../package.json");
require("dotenv").config();

module.exports = {
  token: process.env.TOKEN, // Your token here
  guildId: "...", // Your guild id here
  clientId: "...", // Your client id here
  prefix: "!", // Your bot prefix here
  version, // Your bot version here
};
