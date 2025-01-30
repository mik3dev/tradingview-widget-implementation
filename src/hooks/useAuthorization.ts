import { createZitadelAuth, ZitadelConfig } from "@zitadel/react";
import { useEffect, useState, useCallback, useRef } from "react";
import { User } from "oidc-client-ts";

export const useAuthorization = () => {
  const config: ZitadelConfig = {
    authority: "https://mik3dev-auttnt.us1.zitadel.cloud",
    client_id: "304796056355439386",
    redirect_uri: window.location.origin + "/callback",
    post_logout_redirect_uri: window.location.origin
  };
  const zitadel = createZitadelAuth(config);
  const authCheckComplete = useRef(false);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuthentication = useCallback(async () => {
    if (authCheckComplete.current) return;
    
    try {
      const user = await zitadel.userManager.getUser();
      if (user) {
        setIsAuthenticated(true);
        setUserInfo(user);
      } else {
        setIsAuthenticated(false);
        setUserInfo(null);
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
      setIsAuthenticated(false);
      setUserInfo(null);
    } finally {
      setIsLoading(false);
      authCheckComplete.current = true;
    }
  }, [zitadel.userManager]);

  // Initial authentication check
  useEffect(() => {
    checkAuthentication();
  }, [checkAuthentication]);

  // Handle callback
  useEffect(() => {
    const userManager = zitadel.userManager;
    const isCallbackPath = window.location.pathname === '/callback';
    
    if (isCallbackPath) {
      authCheckComplete.current = false; // Reset for callback
      setIsLoading(true);
      
      userManager
        .signinRedirectCallback()
        .then((user: User) => {
          setIsAuthenticated(true);
          setUserInfo(user);
          // After successful callback, navigate away from the callback page
          window.location.href = '/';
        })
        .catch((error: unknown) => {
          console.error('Error during callback:', error);
          setIsAuthenticated(false);
          setUserInfo(null);
        })
        .finally(() => {
          setIsLoading(false);
          authCheckComplete.current = true;
        });
    }
  }, [zitadel.userManager]);

  const login = useCallback(() => {
    authCheckComplete.current = false;
    setIsLoading(true);
    zitadel.authorize();
  }, [zitadel]);

  const logout = useCallback(() => {
    authCheckComplete.current = false;
    setIsLoading(true);
    zitadel.signout();
  }, [zitadel]);

  return {
    login,
    logout,
    isAuthenticated,
    setIsAuthenticated,
    userInfo,
    isLoading
  };
};