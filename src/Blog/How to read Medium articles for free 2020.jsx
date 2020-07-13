import React from "react";
import ReactMarkdown from "react-markdown";

const input = "# This is a header";

const HowToReadMediumArticlesForFree = () => {
  return <ReactMarkdown source={input} />;
};

export default HowToReadMediumArticlesForFree;
