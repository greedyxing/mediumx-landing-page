import React from "react";
import tw from "twin.macro";

const WrapperDiv = tw.div`mb-8 bg-indigo-900 text-center py-4 lg:px-4`;
const InnerWrapperDiv = tw.div`p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex`;
const MetaSpan = tw.span`flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3`;
const TextSpan = tw.span`mr-2 text-left flex-auto`;

const TopBanner = ({ styles, ...otherProps }) => {
  const { meta, text, icon, isShow, handler } = otherProps;
  if (!isShow) return false;
  return (
    <WrapperDiv>
      <InnerWrapperDiv>
        <MetaSpan>{meta}</MetaSpan>
        <TextSpan>{text}</TextSpan>
        {/* <img src={icon} onClick={handler} style={{ cursor: "pointer" }} /> */}
      </InnerWrapperDiv>
    </WrapperDiv>
  );
};

export default TopBanner;
