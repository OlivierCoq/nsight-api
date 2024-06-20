module.exports = [
  { name: 'strapi::logger' },
  { name: 'strapi::errors' },
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'http:'],
          'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        }
      },
    }
  },
  { name: 'strapi::poweredBy' },
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['http://localhost:1337', 'http://localhost:3000', 'https://nsightapi.vip', 'https://www.nsightapi.vip', 'https://nsight.vip', 'https://nsight.life', 'https://www.nsight.life'],
    }
  },
  { name: 'strapi::query'},
  { 
    name: 'strapi::body',
    config: {
      jsonLimit: "100mb",
      formLimit: "100mb",
      textLimit: "100mb",
      formidable: {
        maxFileSize: 200 * 1024 * 1024,
      },
    }
  },
  { name: 'strapi::session' },
  { name: 'strapi::favicon' },
  { name: 'strapi::public' },
];
