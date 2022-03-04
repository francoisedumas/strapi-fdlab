module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1a404cf9ebd79b803550787facffa553'),
  },
});
