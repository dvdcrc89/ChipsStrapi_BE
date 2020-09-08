module.exports = ({ env }) => ({
  host: process.env.HOST,
  port: process.env.PORT || 1337,
  url: 'https://chipsbrighton.herokuapp.com',
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
