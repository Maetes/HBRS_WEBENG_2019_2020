module.exports = {
  env: {
    APP_SECRET: 'asdkj12jjnkq3gjnijuo23uirjknqwdui132r',
    DB: 'mysql',
    DB_CONNECTION:
      'mysql://USER369473_cl:Mixer!112233@rngs.lima-db.de:3306/db_369473_11',
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
    });

    config.module.rules.push({
      test: /\.graphqls$/,
      exclude: /node_modules/,
      use: ['graphql-tag/loader', 'graphql-let/schema/loader'],
    });

    return config;
  },
};
