import React, { SFC } from "react";
import Helmet from "react-helmet";

import favicon from "../images/favicon.ico";

interface Props {
  title: string;
  url: string;
  description?: string;
  tags?: string[];
}

const PageHelmet: SFC<Props> = ({
  title,
  url,
  description = "junukim.dev",
  tags = [],
}) => (
  <Helmet title={title}>
    <link rel="icon" href={favicon} />
    <meta name="viewport" content="width=device-width,initial-scale=1" />

    <meta name="description" content={description} />
    <meta name="author" content="김준우" />
    <meta
      name="keywords"
      content={`김준우,${title},junukim,${tags.join(",")}`}
    />

    <meta
      property="og:keywords"
      content={`김준우,${title},junukim,junukim.dev,${tags.join(",")}`}
    />
    <meta property="og:author" content="김준우" />
    <meta property="og:locale" content="ko_kR" />
    <meta property="og:site_name" content="junukim.dev" />
    <meta property="og:title" title={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta
      name="naver-site-verification"
      content="a89fa136149ff865b0c5dc3ede5d04c259a6945f"
    />
  </Helmet>
);

export default PageHelmet;
