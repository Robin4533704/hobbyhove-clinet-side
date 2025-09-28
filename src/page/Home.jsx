import React from "react";
import Banner from "../Components/banner/Banner";
import HomeContent from "./HomeContent";
import SocialCard from "./SocialCard";

const Home = () => {
  return (
   <div className="light:bg-white dark:text-gray-100 dark:bg-gray-900 min-h-screen transition-colors">
  <Banner />
  <SocialCard/>
  <HomeContent/>
</div>

  );
};

export default Home;
