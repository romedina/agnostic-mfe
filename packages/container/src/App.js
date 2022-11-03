import React from "react";
import MarketingApp from "./components/MarketingApp";

const MarketingWrapper = ({ children }) => {
  return (
    <>
      <h4>Markteing is below me as children</h4>
      {children}
    </>
  );
};

export default () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <hr />
      <MarketingWrapper>
        <MarketingApp />
        <MarketingWrapper />
      </MarketingWrapper>
    </div>
  );
};
