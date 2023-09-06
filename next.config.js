const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        API_URL: 'http://localhost:3000',
        NEXT_PUBLIC_EMAIL_ID: 'service_pd1c7jd',
        NEXT_PUBLIC_EMAIL_TEMPLATE: 'template_puvrlgj',
        NEXT_PUBLIC_EMAIL_KEY: 'AXn8zy4BgPAGy--1w',
      },
    };
  }

  return {
    env: {
      API_URL: 'https://www.yunseung.co.kr',
      NEXT_PUBLIC_EMAIL_ID: 'service_pd1c7jd',
      NEXT_PUBLIC_EMAIL_TEMPLATE: 'template_puvrlgj',
      NEXT_PUBLIC_EMAIL_KEY: 'AXn8zy4BgPAGy--1w',
    },
  };
};
