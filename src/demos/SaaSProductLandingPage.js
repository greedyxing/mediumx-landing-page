import React from "react";
import { useSelector, useDispatch } from "react-redux";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import TopBanner from "components/utility/TopBanner";
import closeIconPath from "images/close.svg";
import { hideDevelopement } from "store/actionCreators";

export default () => {
  // 顶部Banner
  const isShowDevBanner = useSelector(state => state.utility.isShowDevBanner);
  const dispatch = useDispatch();

  const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
  const HighlightedText = tw.span`text-primary-500`;

  // 顶部版权
  const CopyrightText = tw.p`text-center`;

  const hideDevBanner = () => {
    const action = hideDevelopement(false);
    dispatch(action);
  };

  return (
    <AnimationRevealPage>
      <TopBanner
        meta={"NOTICE"}
        text={"this website is under development..."}
        icon={closeIconPath}
        isShow={isShowDevBanner}
        handler={hideDevBanner}
      />
      <Hero roundedHeaderButton={true} />
      <Features
        subheading={<Subheading>Features</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Features.</HighlightedText>
          </>
        }
      />
      <Pricing
        subheading={<Subheading>Pricing</Subheading>}
        heading={
          <>
            Reasonable & Flexible <HighlightedText>Plans.</HighlightedText>
          </>
        }
        plans={[
          {
            name: "Free",
            price: "$0",
            duration: "Monthly",
            mainFeature: "For Individuals",
            features: [
              "unblock Medium paywall",
              "3 basic theme",
              "classic comment system",
              "export single page to pdf/word"
            ]
          },
          {
            name: "Pro",
            price: "$3.99",
            duration: "Monthly",
            mainFeature: "For Small Businesses",
            features: [
              "ALL FREE FEATURE",
              "more powerful classic comment system, including emoji support",
              "technical support",
              "batch export to pdf/word"
            ],
            featured: true
          },
          {
            name: "Ultimate",
            price: "$37.99",
            duration: "Yearly",
            mainFeature: "For Large Companies",
            features: [
              "ALL PRO FEATURE",
              "export to ebook from Medium Publications"
            ]
          }
        ]}
      />
      <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Our Clients <HighlightedText>Love Us.</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Amazing User Experience",
            quote:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            customerName: "Charlotte Hale",
            customerTitle: "Director, Delos Inc."
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Love the Developer Experience and Design Principles !",
            quote:
              "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            customerName: "Adam Cuppy",
            customerTitle: "Founder, EventsNYC"
          }
        ]}
      />
      <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            You have <HighlightedText>Questions ?</HighlightedText>
          </>
        }
        faqs={[
          {
            question: "Can I read Medium.com Articles for free with this app ?",
            answer:
              "Yes, you can read medium membership articles for free easily with this extension"
          },
          {
            question: "Are this app already official released ? ",
            answer:
              "Not yet. This app and website are still under construction. But some features are already shipped."
          },
          {
            question: "Is it free ?",
            answer:
              "It is free for everyone forever. But you can go pro for more powerful features."
          },
          {
            question: "How you guys protect my privacy?",
            answer:
              "Privacy of every user matters. Please refers to our privacy page"
          }
        ]}
      />
      <GetStarted />
      {/* <Footer /> */}
      <CopyrightText>
        &copy; Medium Enhanced Reader 2020{" "}
        <span tw="ml-4">justin.project@yahoo.com</span>{" "}
      </CopyrightText>
    </AnimationRevealPage>
  );
};
