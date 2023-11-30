module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      // deployHook: 'https://strapi-test-taupe.vercel.app/',
      // apiToken: 'DGljKpy0VLCR5gz3Qsx5UFAS',
      // appFilter: 'strapi-test',
      // teamFilter: '94tomas',
      deployHook: process.env.VERCEL_DEPLOY_PLUGIN_HOOK,
      apiToken: process.env.VERCEL_DEPLOY_PLUGIN_API_TOKEN,
      appFilter: process.env.VERCEL_DEPLOY_PLUGIN_APP_FILTER,
      teamFilter: process.env.VERCEL_DEPLOY_PLUGIN_TEAM_FILTER,
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
