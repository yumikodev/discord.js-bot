exports.CommandBuilder = class {
  /**
   * @param {import("../types/CommandBuilderOptions").CmdBuilderOptions} options
   */
  constructor(options) {
    this.data = options.data;
    this.run = options.run;
  }
};

exports.SlashBuilder = class {
  /**
   * @param {import("../types/CommandBuilderOptions").SlashBuilderOptions} options
   */
  constructor(options) {
    this.data = options.data;
    this.run = options.run;
  }
};
