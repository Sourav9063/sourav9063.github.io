import React from "react";
import GlobalProvider from "./GlobalProvider";

export default function ProviderWrapper({ children }) {
  return <GlobalProvider>{children}</GlobalProvider>;
}
