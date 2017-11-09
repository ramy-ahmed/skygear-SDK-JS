import skygear from 'skygear-core';
import {
  loginOAuthProviderWithPopup,
  loginOAuthProviderWithRedirect,
  linkOAuthProviderWithPopup,
  oauthHandler,
  getLoginRedirectResult,
  iframeHandler
} from './oauth';

/**
 * @private
 */
export const injectToContainer = (container = skygear) => {
  const authContainerPrototype = container.auth.constructor.prototype;
  authContainerPrototype.loginOAuthProviderWithPopup =
    loginOAuthProviderWithPopup;
  authContainerPrototype.loginOAuthProviderWithRedirect =
    loginOAuthProviderWithRedirect;
  authContainerPrototype.linkOAuthProviderWithPopup =
    linkOAuthProviderWithPopup;
  authContainerPrototype.oauthHandler = oauthHandler;
  authContainerPrototype.getLoginRedirectResult = getLoginRedirectResult;
  authContainerPrototype.iframeHandler = iframeHandler;
};
