import React from "react";
import Banner from "../Components/banner/Banner";
import HomeContent from "./HomeContent";

const Home = () => {
  return (
   <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors">
  <Banner />
  <HomeContent/>
</div>

  );
};

export default Home;
