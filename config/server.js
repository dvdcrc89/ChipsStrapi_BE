module.exports = ({ env }) => ({
  host: env('HOST', process.env.HOST || '0.0.0.0'),
  port: env.int('PORT', process.env.PORT || 3000),
  url: "chipsbrighton.herokuapp.com",
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
