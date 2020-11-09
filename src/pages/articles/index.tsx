import React, { useEffect } from "react";
import { navigateTo } from "gatsby";

const ArticlesMain: React.SFC = () => {
  useEffect(() => {
    navigateTo("/");
  }, []);
  
  return null;
};

export default ArticlesMain;