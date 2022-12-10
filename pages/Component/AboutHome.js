import React from "react";
import Typewriter from "typewriter-effect";

const AboutHome = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
              <img src="/profile.webp" alt="" />
            </div>
            <div className="column right">
              <div className="text">
                I'm Gaurav and I'm a{" "}
                <span className="typing-2">
                  {" "}
                  <Typewriter
                    options={{
                      strings: ["Web Developer", "Software Developer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                ut voluptatum eveniet doloremque autem excepturi eaque, sit
                laboriosam voluptatem nisi delectus. Facere explicabo hic minus
                accusamus alias fuga nihil dolorum quae. Explicabo illo unde,
                odio consequatur ipsam possimus veritatis, placeat, ab molestiae
                velit inventore exercitationem consequuntur blanditiis omnis
                beatae. Dolor iste excepturi ratione soluta quas culpa
                voluptatum repudiandae harum non.
              </p>
              <a href="/gvrvresume.pdf" download={true}>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHome;
