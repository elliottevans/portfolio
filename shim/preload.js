// Ensure Ajv is lenient and neutralize legacy keywords + provide schema-utils.validateOptions adapter.
const path = require('path');
const Module = require('module');
const originalLoad = Module._load;

const AJV_KEYWORDS_SHIM = path.resolve(__dirname, 'ajv-keywords.js');
let LOADING_SCHEMA_UTILS = false;

Module._load = function (request, parent, isMain) {
  if (
    request === 'ajv-keywords' ||
    request === 'ajv-keywords/dist' ||
    request === 'ajv-keywords/dist/index.js'
  ) {
    return originalLoad(AJV_KEYWORDS_SHIM, parent, isMain);
  }

  if (request === 'ajv') {
    const real = originalLoad(request, parent, isMain);
    const RealAjv = real.default || real;

    class AjvLenient extends RealAjv {
      constructor(opts = {}) {
        super({ strict: false, ...opts });
        try { this.addKeyword('link'); } catch {}
        try { this.addKeyword('formatMinimum'); } catch {}
        try { this.addKeyword('formatMaximum'); } catch {}
      }
    }

    AjvLenient.default = AjvLenient;
    AjvLenient.Ajv = AjvLenient;
    AjvLenient.__esModule = true;
    for (const k of Object.keys(real)) if (!(k in AjvLenient)) AjvLenient[k] = real[k];
    return AjvLenient;
  }

  if (request === 'schema-utils' || request.startsWith('schema-utils/')) {
    if (LOADING_SCHEMA_UTILS) return originalLoad(request, parent, isMain);
    LOADING_SCHEMA_UTILS = true;
    try {
      const real = originalLoad(request, parent, isMain);
      if (real && typeof real === 'object' && typeof real.validate === 'function') {
        if (typeof real.validateOptions !== 'function') {
          real.validateOptions = function (schema, options, name) {
            return real.validate(schema, options, name ? { name } : undefined);
          };
        }
      }
      return real;
    } finally {
      LOADING_SCHEMA_UTILS = false;
    }
  }

  return originalLoad(request, parent, isMain);
};