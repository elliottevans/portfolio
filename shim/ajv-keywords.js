// shim/ajv-keywords.js
module.exports = function ajvKeywords(ajv /*, opts */) {
  return ajv; // no-op; don't register legacy keywords
};