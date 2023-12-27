module.exports = [
  { name: 'strapi::errors' },
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    }
  },
  {
    name: 'strapi::cors',
    config: {
      origin: [process.env.LOCAL_URL, process.env.LOCAL_FRONTEND_URL, 'https://nsight.vip', 'https://nsightapi.vip', 'https://nsight-frontend-nkwvo.ondigitalocean.app', 'https://nsight.life'],
      headers: ['Content-Type', 'Authorization', 'X-Authorization', 'Origin', 'Accept', 'Access-Control-Allow-Origin'],
    }
  },
  { name: 'strapi::poweredBy' },
  { name: 'strapi::logger' },
  { name: 'strapi::query' },
  { name: 'strapi::body' },
  { name: 'strapi::session' },
  { name: 'strapi::favicon' },
  { name: 'strapi::public' },
];
