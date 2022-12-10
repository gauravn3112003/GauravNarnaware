import React from "react";

const SkillsCard = (props) => {
  return (
    <>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border cardPrimary  p-6 rounded-lg">
          <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
            <img src={props.image} alt="skill" />
          </div>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
            {props.name}
          </h2>
          <p className="leading-relaxed text-base">{props.desc}</p>
        </div>
      </div>
    </>
  );
};

const Skills = () => {
  return (
    <>
      <section>
        <div className="max-width">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h3 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              The most creative intuitive workmate.
            </h3>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <SkillsCard
              image="/Dev.webp"
              name="Developer Skills"
              desc="A great knowledge of HTML / CSS, Javascript and React.js. I make responsive applications with Bootstrap with interactive UI's designs."
            />
            <SkillsCard
              image="/UiDe.webp"
              name="UI Design"
              desc="A love for design and a good eye for creativity. I have proficiency in wireframing, color theory and visual communication."
            />{" "}
            <SkillsCard
              image="/Node.webp"
              name="Node & Express JS"
              desc="A lot of exprence in to develop complicated backend in web based Applications using React and Next js Applications"
            />{" "}
          </div>
            {/* <button className="flex mx-auto mt-16 primaryBtn   py-2 px-8   rounded text-lg">
              Lets Work
            </button> */}
        </div>
      </section>
    </>
  );
};

export default Skills;
