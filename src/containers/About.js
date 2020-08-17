import React from "react";
import { motion } from "framer-motion";

import aboutImage from "../assets/images/about-me.png";
import IntroSection from "../components/aboutPage/introSection/IntroSection";
import DescriptionSection from "../components/aboutPage/descriptionSection/DescriptionSection";
import CopyrightSection from "../components/aboutPage/copyrightSection/CopyrightSection";

const homepageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 1.5,
    },
  },
  exitAnimate: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const introductionText =
  "“The power of emotion in digital products goes way beyond creating pleasurable experiences.”";
const aboutDescription = [
  "I was born blind in one eye; I was self-taught in most of my endeavors, and, later in life, was diagnosed as dyslexic. It’s easy to feel different because of these setbacks. Easy to feel miserable, lost. For a long time, I hid my struggles behind a smile, moving forward in life. But I don’t want to hide who I am anymore. My obstacles are a part of me just as much as my determination and my independence are. I wouldn’t be as strong as I am if it weren’t for the battles I’ve had to fight.",
  "I decided that I would become a designer and share my vision with the world, sending out over 400 applications all across the country. I put everything I had into my first interview, with an agency called Frog Design. Right away, they could see that I was unpolished but genuine, passionate, and not afraid of a challenge.",
  "And it happened. Out of 246 candidates, I was chosen for a design internship. It didn’t seem dawn until my first day: I had a career. I was a designer.",
  "As had always been the case, I faced obstacles. My lack of formal experience made me feel like an outsider at times, making it hard to connect with my coworkers. On top of that, I was a foreigner, constantly dealing with an underlying language barrier.",
  "But I continued on, finished my internship, and found contract work at another design agency, followed by an offer for a full-time position as a visual designer. I had faced struggles, but I was still moving forward.",
  "Until COVID-19 struck.",
  "I felt even more distant from the people around me. It was hard to find optimism, drive. My struggles had taken center stage, and it was hard to see me behind them. I pushed myself so hard that I was making everyone around me worried and anxious. And then, the company let me go after five months.",
  "Did I want to be a designer? I had fallen ill and exhausted in the fast-paced, career-driven lifestyle. Soon after, I was diagnosed with dyslexia; it became clear why it was so hard for me to keep up the pace.",
  "And I realized that all I really wanted was to help people co-exist, peacefully. To live the life they want to live. I had to use my passion for design in a way that would help quell the fires of a socially and racially divided world. Feelings, thoughts, and emotions were all crucial parts of humanity, but I had been treating them like something you should fight off and hide.",
  "But, like always, I pressed on, despite my setbacks, discovering that there are actually benefits to having this condition. It helped me innovate, thinking outside the box to use visual-spatial design in a way more effective than I could have otherwise. That’s when I realized that I was uniquely equipped to use my skills and passion to help connect people in a turbulent world in need of connection.",
  "I can’t always control what happens in my life or the world, but thanks to my unique strengths and passion for design, I know I’m doing my part and going in the right direction.",
];

function About() {
  return (
    <motion.div
      variants={homepageVariants}
      initial='initial'
      animate='animate'
      exit='exitAnimate'
      className='about'
    >
      <IntroSection introductionText={introductionText} />

      <DescriptionSection
        descriptionText={aboutDescription}
        aboutImage={aboutImage}
      />

      <CopyrightSection />
    </motion.div>
  );
}

export default About;
