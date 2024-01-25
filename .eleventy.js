require('dotenv').config();

const { eleventyImagePlugin } = require('@11ty/eleventy-img');
const EleventyPluginOGImage = require('eleventy-plugin-og-image');
const { EleventyServerlessBundlerPlugin } = require('@11ty/eleventy');
const fs = require('fs');
const pluginWebc = require('@11ty/eleventy-plugin-webc');
const { toHTML } = require('@portabletext/to-html');
const { toPlainText } = require('./utils/toPlainText');
const { renderScss } = require('./utils/renderScss');

module.exports = function(config) {
  config.addPlugin(pluginWebc, {
    components: [
      'src/_includes/components/**/*.webc',
      'src/pages/**/*-page-handler.webc',
      'npm:@11ty/eleventy-img/*.webc'
    ],
  });

  config.addPlugin(EleventyServerlessBundlerPlugin, {
    name: 'previewmodular',
    functionsDir: './netlify/functions/',
    redirects: "netlify-toml-functions",
  });

  config.addPlugin(eleventyImagePlugin, {
    formats: ["webp", "jpeg"],
		urlPath: "/img/",
    defaultAttributes: {
			loading: "lazy",
			decoding: "async"
		}
  });

  config.addPlugin(EleventyPluginOGImage, {
    satoriOptions: {
      fonts: [
        {
          name: 'Arial',
          data: fs.readFileSync('./fonts/Arial.ttf'),
          weight: 400,
          style: 'normal'
        }
      ]
    }
  });

  config.addFilter('toHTML', toHTML);
  config.addFilter('toPlainText', toPlainText);

  config.addTemplateFormats('scss');
  config.addExtension('scss', renderScss(config));

  return {
    dir: {
      input: './src/',
      output: './dist/',
      data: './_data/'
    }
  }
}
