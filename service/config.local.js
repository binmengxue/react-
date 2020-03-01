"use strict";
module.exports = app => {
  const exports = {};
  exports.cluster = {
    listen: {
      port: 8090,
      hostname: "127.0.0.1"
    }
  };
  return exports;
};
