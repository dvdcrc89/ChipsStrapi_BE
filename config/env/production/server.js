module.exports = ({ env }) => ({
  host: process.env.HOST,
  port: process.env.PORT || 1337,
  url: "chipsbrighton.herokuapp.com",
  admin: {
    path: "/dashboard",
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
});
