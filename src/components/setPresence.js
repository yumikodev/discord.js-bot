const { ActivityType, Client } = require("discord.js");

class setPresence {
  /**
   * @param {Client} client
   * @param {import("../types/StatusType").StatusType} statusOptions
   */
  constructor(client, statusOptions) {
    setInterval(() => {
      const options = Math.floor(Math.random() * statusOptions.length);
      let presence;

      if (statusOptions[options].type !== ActivityType.Streaming) {
        presence = {
          activities: [
            {
              name: statusOptions[options].content,
              type: statusOptions[options].type,
            },
          ],
          status: statusOptions[options].status,
        };
      } else {
        presence = {
          activities: [
            {
              name: statusOptions[options].content,
              type: statusOptions[options].type,
              url: statusOptions[options].url,
            },
          ],
          status: statusOptions[options].status,
        };
      }
      client.user?.setPresence(presence);
    }, 8 * 1000);
  }
}

module.exports = setPresence;
