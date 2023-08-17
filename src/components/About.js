import React from "react";
// import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <div className="bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>
        </div>
        <div className="lg:w-1/2 lg:pl-10">
          <div>
            <h2 className="font-primary text-sm tracking-[2px]">About me.</h2>
            <h3 className="h3 mb-4">
              I'm a Freelance Full-stack Developer with over 1 year of
              experience.
            </h3>
            <p className="mb-6">
              As a full stack developer, I am passionate about creating
              innovative and functional technology solutions. Throughout my
              career, I've worked with a wide range of technologies, including
              Vue.js, React, React Native, Node.js, Express.js, and jQuery. In
              addition, I have experience managing relational and non-relational
              databases, which allows me to work on projects of varying
              complexity.
            </p>
            <p>
              I am a dedicated and committed professional, always looking for
              new experiences and challenges that allow me to continue growing
              in my career. My main focus is to provide efficient and quality
              solutions to my clients, collaborating closely with them to
              understand their needs and objectives.
            </p>
          </div>
          <button className="btn btn-lg">Contact me</button>
        </div>
      </div>
    </section>
  );
};
export default About;
