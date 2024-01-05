module.exports = [
  { name: 'strapi::logger' },
  { name: 'strapi::errors' },
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self", 'https:', 'http:'],
          'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        }
      },
    }
  },
  { name: 'strapi::cors' },
  { name: 'strapi::poweredBy' },
  { name: 'strapi::query' },
  { name: 'strapi::body' },
  { name: 'strapi::session' },
  { name: 'strapi::favicon' },
  { name: 'strapi::public' },
];
