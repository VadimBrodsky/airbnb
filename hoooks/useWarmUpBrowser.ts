import * as WebBrowser from "expo-web-browser";
import { useEffect } from "react";

// Help Android to warm up the browser, helpful for signin
export function useWarmUpBrowser() {
  useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
}
