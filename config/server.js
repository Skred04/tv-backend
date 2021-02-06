module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: "https://skred-tv-backend.herokuapp.com",
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '53da8617c0ee7873519956a4f8c642f3'),
    },
  },
});
