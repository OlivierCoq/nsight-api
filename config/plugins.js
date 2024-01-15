module.exports = ({ env }) => ({
  'transformer': {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true
      },
      requestTransforms: {
        wrapBodyWithDataKey: true
      }
    }
  },
  'upload': {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET')
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {}
      }
    }
  },
  'email': {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('nsight_api_email_key'),
      },
      settings: {
        defaultFrom: 'info@nsightapi.vip',
        defaultReplyTo: 'info@nsightapi.vip',
      },
    },
  },
  'strapi-plugin-medusajs': false
})