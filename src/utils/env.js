export const getHost = () => {
  let host = 'http://localhost:3000';

  const CONTEXT = process.env.CONTEXT || 'dev';

  switch (CONTEXT) {
    case 'production':
      host = process.env.URL;
      break;
    case 'deploy-preview':
      host = process.env.DEPLOY_PRIME_URL;
      break;
    case 'branch-deploy':
      host = process.env.DEPLOY_PRIME_URL;
      break;
    default:
      host = process.env.URL || 'http://localhost:3000';
  }

  return host;
};

const siteHost = getHost();

export const CMS_HOST = siteHost;
export const SITE_HOST = siteHost;

export default {
  CMS_HOST,
  SITE_HOST,
};
