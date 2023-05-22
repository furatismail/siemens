module.exports = {
  name: 'auth',
  exposes: {
    './Routes': 'apps/auth/src/app/remote-entry/entry.routes.ts',
  },
};
