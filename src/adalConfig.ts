import { AuthenticationContext, adalFetch, withAdalLogin, AdalConfig } from 'react-adal';

export const adalConfig: AdalConfig = {
    tenant: 'common',
    clientId: '928b24aa-6eb6-4710-9839-286a5dfaf80c',
    endpoints: {
        api: '928b24aa-6eb6-4710-9839-286a5dfaf80c',
        graph: 'https://graph.microsoft.com',
    },
    cacheLocation: 'localStorage',
  };
  
export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const adalGraphFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.graph, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);