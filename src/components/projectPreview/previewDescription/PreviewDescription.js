import React from "react";
import { motion } from "framer-motion";

const sentenceVariants = {
  initial: {
    opacity: 0.8,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const blobDescription = "";
const ikeaDescription =
  "I’ve been moving a lot from New York to D.C., to Philadelphia, then to Austin, and I became a frequent customer of IKEA. Every time I purchased furniture and housewares, the high functionality and relatively accessible prices of IKEA satisfied my needs. I visited many of their stores and bought and used so many products that I got to know the pros and cons of IKEA. Particularly using their app, I found out various aspects to be improved. So I redesigned it analyzing how IKEA can offer upgraded services based on my own experiences.  ";
const bestrongDescription =
  "It’s impossible not to think about racial discrimination being an immigrant myself. Since it’s a deep-rooted issue in this society, I thought time would fade it out, but the tension between ethnic groups escalated day by day. Once more people came out to the streets and raised their voices. The protests remained peaceful but sometimes they were repressed by the police force excessively. Some outraged protesters responded with violence and taking advantage of this chaos, the looters broke into the stores, steal, and destroyed other innocent citizens’ properties. This whole situation raised questions for me. Why do we criticize each other so harshly? Why do we want to get stronger? Does being strong mean to speak up your opinions? Many thoughts crossed my mind. After pondering for a while, I concluded that being strong is not to show off one’s strength or to use it to repress someone, but to be able to maintain one’s stance under any circumstances and to have the inner strength to overcome the obstacles. We all need to look back on ourselves and grow stronger inside first. Be strong.";
const icantbreatheDescription =
  "When the racial conflict was at the boiling point, SpaceX flew out into space. Witnessing that event, I was amazed by the human technological progress, and the word ‘breathtaking’ popped up in my head. Meanwhile, on Earth, a person who committed a crime but not resisted the arrest lost his life due to police brutality. His last words were ‘I can’t breathe’ and he deceased at the scene, out of breath.  Within a few days, the opposite things happened in the sky and earth, and I was torn between the wonder of the human technological achievements and the sympathy for a man’s perished life trampled against the ground. Lost somewhere in between, trying to comfort my perplexed mind and smothered heart, I created this poster.";
const storycellerDescription =
  "When traveling, my mind retains funny episodes in the places I visited, delicious foods, and happy moments with beloved ones. Some register those memories by writing down in the diary, taking photos, and uploading them to social media. The stories that combine happiness and sadness are saved in my mind, then become a theme of conversation among friends and shared through social media. Humans remember and also forget. They write the diary, make a note in an app, take a photo and save it in cell phones because they want to hang on those memories. But before taking these actions, the experience itself is perceived through my eyes, nose, and mouth, and then saved in my brain. For the storytelling, there has to be a story, a teller to deliver it, and the story is pulled out from a cell of my brain. Putting together all these concepts I created an app called ‘Storyceller’. Although similar apps already exist, I built a simpler and easier app, and more importantly the one that I would like to use. I planned, designed, and managed from the wireframing, visual design, to mockup, even though it’s conceptual.";
const fivieDescription =
  "“We believe in the simple, not the complex.” It’s a quote from Apple’s design philosophy. Apple’s company vision to create products that customers need with innovative designs was a great inspiration to me. Before their steaming service ‘Apple TV+’ was launched, I imagined what kind of site they would offer if they entered the streaming market. And I attempted to create a simple movie streaming site following Apple’s design philosophy and using Apple’s design resources to make it familiar and blend into their design system. I studied currently available media sites to learn their problems and missing elements, and then I started the project from the wireframing with a developer friend to make it feasible. Most of the movie search engines have a complicated structure due to the extensive database. And the users can become indecisive about what to watch. So I arranged the users to type in keywords about their preferences such as genre and actor or director’s name, already cataloged as tags, and it would show them just the top five search results facilitating the choice. I named it ‘Fivie’, combining the words ‘five’ and ‘movie’. If a user wishes to have more options, could select more additional tags. I completed this conceptual site with an algorithm that can collect data about users’ interests and preferences.";
const dkDescription =
  "My friend and I were pursuing our dreams in Austin and met each other. He wanted to be a front-end developer and I aspired to be a designer. Without any background or experience, we moved around the mouse and pounded the keyboard. We had no skills and no clue what the other wanted. We just had this vague idea of making a responsive and sleek portfolio site and we got started with my friend DK’s site. In this process, we learned the importance of communication and realized that unrealistic designs can be a huge obstacle in development. It took us a month to reach a satisfying result and we were able to submit job applications with this portfolio.";
const ballDescription =
  "A kid, looking at a tennis ball, asked me what kind of ball it was. I simply answered ‘it’s a tennis ball’ and the kid asked me what tennis is. I stopped the conversation there thinking she’ll find out soon enough. But on second thought, a kid who never experienced this sport, unless she has the chance to play it or watch the games, she might never know tennis. There’s a great variety of sports in the world and many of them use a ball. It occurred to me it would be nice for this kid if there was a site that can show all the different types of ball and which sport it is for. So I created the conceptual design called ‘ball.’. As it is shown in the designs, I conceptualized and integrated the color, the movements, and other aspects of the tennis ball. Given the opportunity, I would like to make an editorial design book presenting diverse sports.";
const greyedDescription =
  "One day I came to wonder what would be like to live as a color-blind person. There are people born with color blindness and others who acquire it later in life. I imagined it would be challenging for those unable to see or distinguish colors to figure out what’s their favorite color, what color suits them best, and how to express themselves through colors. Colors are formed by reflections of the light but if there is no light, we can only see black and white, in monochromatic grayscale. And I thought the grayscale palette would be helpful to those who are stressed about what colors to wear or combine. That’s why I thought of the idea of a multi-brand store that offers white, black, and grey, all monochromatic products. It could be arguable why such a site is even necessary when the color-blind people are free to choose whatever color they want. But I considered some of them could be insecure about their choices since they can’t distinguish and worry about what other people might think, and decided to go forward with it. It wasn’t a real project to develop, just a conceptual one, so I wanted to try something new. The design was started from this initial idea. At that time, I was merely taking an interest in design. I hadn’t any skills and everything was new and unknown. The only tool I could use was Photoshop and even that at the beginner’s level. Focused on the one clear concept, I pursued designs that looked pretty to me so there was a lot to improve and the process was quite long. But as the first project, it turned out to be satisfactory. If I had the chance in the future, I would like to design a product website that’s more beneficial to color-blind customers and also visually more attractive.";

const projectDescription = [
  blobDescription,
  ikeaDescription,
  bestrongDescription,
  icantbreatheDescription,
  storycellerDescription,
  fivieDescription,
  dkDescription,
  ballDescription,
  greyedDescription,
];

function PreviewDescription({ selectedProject }) {
  function addDot(sentence, count) {
    if (sentence.length > 0) {
      const sentenceArray = sentence.split(" ");
      return sentenceArray.slice(0, count).join(" ").concat("...");
    }
  }

  return (
    <>
      {projectDescription.map((each, index) =>
        selectedProject === index ? (
          <motion.p
            variants={sentenceVariants}
            initial='initial'
            animate='animate'
            key={each}
            className='project-preview__content-box__description'
          >
            {addDot(each, 24)}
          </motion.p>
        ) : null
      )}
    </>
  );
}

export default PreviewDescription;
