import React from "react";
import SectionTitle from "../../../Globals/SectionTitle";

const About = () => {
  return (
    <section>
      <div className="f-container pt-20 text-center md:text-left">
        <SectionTitle>About me </SectionTitle>
        <div className="mt-10 md:w-3/4 ">
          <p className="p1">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
