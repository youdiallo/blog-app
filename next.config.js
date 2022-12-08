const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {

  if ( phase === PHASE_DEVELOPMENT_SERVER ) {
    return {
      env: {
        mongodb_username: 'youdiallo',
        mongodb_password: 'zaUTehkFu5lnb5HO',
        mongodb_cluster: 'cluster0',
        mongodb_database: 'blog-app-dev',
      }
    }
  }

  return {
    env: {
      mongodb_username: 'youdiallo',
      mongodb_password: 'zaUTehkFu5lnb5HO',
      mongodb_cluster: 'cluster0',
      mongodb_database: 'blog-app',
    }
  }
}