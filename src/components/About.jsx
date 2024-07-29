import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
        I am an undergraduate Computer Science student and a passionate web developer, continually enhancing my skills in both backend and frontend development as well as my problem solving skills. I am enthusiastic about improving my expertise and learning new technologies. Currently, I am open to exploring and working with any web technology and taking on freelance projects.
        </p>

        <br />

        <p className="text-xl">
        I love coding from scratch and bringing ideas to life. Connect with me to bring your project to fruition.<br /><br />
  I value minimalistic designs, thoughtful branding, and creating relatable user experiences. Let’s collaborate to make your project more impactful!<br /><br />
  I enjoy crafting unique identities for products or services, boosting traffic through search engines and social platforms, and ensuring a compelling online presence.
        </p>
      </div>
    </div>
  );
};

export default About;
