require('dotenv').config();

const { EleventyServerlessBundlerPlugin } = require('@11ty/eleventy');
const pluginWebc = require('@11ty/eleventy-plugin-webc');

module.exports = function(config) {
  config.addPlugin(pluginWebc, {
    components: [
      'src/_includes/components/**/*.webc',
      'src/pages/**/*-page-handler.webc',
    ],
  });

  config.addPlugin(EleventyServerlessBundlerPlugin, {
    name: 'previewmodular',
    functionsDir: './netlify/functions/',
    redirects: "netlify-toml-functions",
  });
  
  return {
    dir: {
      input: './src/',
      output: './dist/',
      data: './_data/'
    }
  }
}
