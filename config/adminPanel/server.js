module.exports = ({ env }) => ({
  "host": "${process.env.APP_HOST || '0.0.0.0'}",
  "port": "${process.env.NODE_PORT || 1337}",
  url: "https://chipsbrighton.herokuapp.com",
  admin: {
    path: "/",
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    build: {
      backend: "https://chipsbrighton.herokuapp.com"
    }
  },
});
