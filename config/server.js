module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT'),
  url: env('BACKEND_URL'),
  app: { 
    keys: env.array('APP_KEYS'),
  },
});