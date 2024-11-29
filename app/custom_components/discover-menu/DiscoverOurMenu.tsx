import React from "react";
import InfiniteScrollText from "../animations/InfiniteScrollText";
import DiscoverProductsList from "./DiscoverProductsList";
const discoverMenuAnimatedText = [
  "Filled with nutrients",
  "The taste of nature",
  "Switch the fruit",
  "It's fresh and fruity",
  "Turn on the happines",
  "Filled with nutrients",
  "The taste of nature",
  "Switch the fruit",
  "It's fresh and fruity",
  "Turn on the happines",
];

const DiscoverOurMenu = () => {
  return (
    <section>
      <InfiniteScrollText stringArray={discoverMenuAnimatedText} />
      <DiscoverProductsList />
    </section>
  );
};

export default DiscoverOurMenu;
