import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";
import slide1 from "../../assets/couple-travelling-together-nature.jpg";
import slide2 from "../../assets/istockphoto-1130655067-612x612.jpg";
import slide3 from "../../assets/istockphoto-1132784599-612x612.jpg";

const slides = [
  { img: slide1, title: "Discover Hobby Groups", subtitle: "Connect with people who share your passion" },
  { img: slide2, title: "Join Local Activities", subtitle: "Book clubs, painting circles, hiking trips & more" },
  { img: slide3, title: "Create Your Own Group", subtitle: "Start a hobby group and invite others" }
];

const Banner = () => (
  <div className="pt-2">
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={5000}
      transitionTime={600}
    >
      {slides.map((slide, idx) => (
        <div key={idx} className="relative">
          {/* পুরো ছবি আকারে দেখানোর জন্য */}
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-[100vh] md:h-[90vh] object-cover"
          />
          {/* Overlay, Fade effect সহ */}
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16">
            <Fade cascade>
              {/* বড় বড় শিরোনাম */}
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-lime-400 mb-4">
                <Typewriter
                  words={[slide.title]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                />
              </h3>
              {/* সাবটাইটেল */}
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-300 mb-6 px-2">
                {slide.subtitle}
              </h2>
              {/* অ্যাকশন বোতাম */}
              <Link to="/">
                <button className="mt-4 px-8 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition text-sm md:text-base">
                  Get Started
                </button>
              </Link>
            </Fade>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default Banner;
