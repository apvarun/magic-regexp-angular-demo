import { MagicRegExpTransformPlugin } from 'magic-regexp/transform'

const config = (config, options) => {
  config.plugins.push(MagicRegExpTransformPlugin.webpack());

  return config;
};

export default config;