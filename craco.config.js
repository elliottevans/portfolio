// craco.config.js
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

function toSwcUse(env, syntax) {
  // syntax: 'ecmascript' or 'typescript'
  const parser =
    syntax === 'typescript'
      ? { syntax: 'typescript', tsx: true }
      : { syntax: 'ecmascript', jsx: true };

  return [
    {
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser,
          transform: {
            react: {
              runtime: 'automatic',
              refresh: env === 'development'
            }
          },
          externalHelpers: false // inline helpers so no @swc/helpers/_/* imports
        },
        sourceMaps: env === 'development'
      }
    }
  ];
}

module.exports = {
  webpack: {
    alias: {
      // harmless carryover from earlier fixes
      'ajv-keywords': path.resolve(__dirname, 'shim/ajv-keywords.js'),
      'ajv-keywords/dist/index.js': path.resolve(__dirname, 'shim/ajv-keywords.js')
    },
    configure: (webpackConfig, { env }) => {
      // Remove CRA's TS checker (avoids legacy AJV paths)
      webpackConfig.plugins = webpackConfig.plugins.filter(
        (p) => !(p instanceof ForkTsCheckerWebpackPlugin)
      );

      // Walk all rules and replace ANY babel-loader with swc-loader
      const rules = webpackConfig.module.rules;
      const oneOf = rules.find((r) => Array.isArray(r.oneOf))?.oneOf || [];

      const replaceBabelInRule = (rule, syntax) => {
        // rule.use can be array or single loader
        if (Array.isArray(rule.use)) {
          rule.use = rule.use.map((u) => {
            const loaderPath = (u && u.loader) || '';
            if (loaderPath.includes('babel-loader')) {
              return toSwcUse(env, syntax)[0];
            }
            return u;
          });
        } else if (rule.loader && rule.loader.includes('babel-loader')) {
          // convert to swc use array
          rule.use = toSwcUse(env, syntax);
          delete rule.loader;
          delete rule.options;
        }
      };

      oneOf.forEach((rule) => {
        // JS/JSX
        if (rule.test && rule.test.toString().includes('jsx')) {
          replaceBabelInRule(rule, 'ecmascript');
        }
        // TS/TSX
        if (rule.test && rule.test.toString().includes('tsx')) {
          replaceBabelInRule(rule, 'typescript');
        }
        // Some CRA rules don't expose test clearly; fall back to detecting babel-loader anywhere
        if (
          (Array.isArray(rule.use) &&
            rule.use.some((u) => (u.loader || '').includes('babel-loader'))) ||
          (rule.loader || '').includes('babel-loader')
        ) {
          // Default to JS/JSX parsing for safety
          replaceBabelInRule(rule, 'ecmascript');
        }
      });

      // Keep dev builds unminified for clearer errors
      if (env === 'development' && webpackConfig.optimization) {
        webpackConfig.optimization.minimize = false;
      }

      return webpackConfig;
    }
  }
};