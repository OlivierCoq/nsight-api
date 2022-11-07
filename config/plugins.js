module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    email: {
      config: {
        provider: 'sendgrid', 
        providerOptions: {
          apiKey: env('nsight_api_email_key'),
        },
        settings: {
          defaultFrom: 'info@nsight.online',
          defaultReplyTo: 'tech.nsight2022@gmail.com',
          testAddress: 'tech.nsight2022@gmail.com',
        },
      }, 
    }
})