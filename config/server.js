module.exports = ({ env }) => ({
  host: "${process.env.HOST || 0.0.0.0}",
  port: "${process.env.PORT || 1337}",
  url: "chipsbrighton.herokuapp.com",
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
