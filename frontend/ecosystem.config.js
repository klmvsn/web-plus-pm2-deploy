const dotenv = require('dotenv');

dotenv.config( {path: '.env.deploy'} );

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF = 'origin/master',
} = process.env;

module.exports = {
  apps: [{
    name: 'frontend',
    script: './build/index.html',
  }],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'https://github.com/klmvsn/web-plus-pm2-deploy',
      path: DEPLOY_PATH,
      'post-deploy': 'cd ~/mesto-frontend && npm i && npm run build',
    },
  },
};