import React from "react";
import ProjectScrollProvider from "./ProjectScrollProvider";
import GlobalProvider from "./GlobalProvider";

export default function ProviderWrapper({ children }) {
  return <GlobalProvider>{children}</GlobalProvider>;
}
