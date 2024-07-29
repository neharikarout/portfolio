import React from "react";
import chatapp from "../assets/portfolio/chat-app.png"
import expensegql from "../assets/portfolio/expenseease.png"
import todo from "../assets/portfolio/todo.png"
import passwordgenerator from "../assets/portfolio/passwordgenerator.png"
import gallery from "../assets/portfolio/gallery.png"
import currencyconvertor from "../assets/portfolio/currency.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: chatapp,
      link: 'https://chat-spot.onrender.com/',
      repo: 'https://github.com/neharikarout/chat-app-mern'
    },
    {
      id: 2,
      src: expensegql,
      link: 'https://expense-ease-uvzp.onrender.com',
      repo: 'https://github.com/neharikarout/expense-ease-mern'
    },
    {
      id: 3,
      src: todo,
      link: 'https://neharikarout.github.io/to-do-app/',
      repo: 'https://github.com/neharikarout/to-do-app'
    },
    {
      id: 4,
      src: passwordgenerator,
      link: 'https://neharikarout.github.io/password-generator/',
      repo: 'https://github.com/neharikarout/Projects/tree/main/05passwordgenerator'
    },
    {
      id: 5,
      src: currencyconvertor,
      link: 'https://neharikarout.github.io/currency-convertor/',
      repo: 'https://github.com/neharikarout/Projects/tree/main/06currencyConvertor'
    },
    {
      id: 6,
      src: gallery,
      link: 'https://github.com/neharikarout/Projects/tree/main/Gallery%20Website',
      repo: 'https://github.com/neharikarout/Projects/tree/main/Gallery%20Website'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
