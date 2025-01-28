import React from "react";
import CountUp from "react-countup";
import { GrBook, GrProjects, GrServices } from "react-icons/gr";

import "../css/overview.css";

const Overview = () => {
  const overviewTitles = [
    {
      title: "Services",
      services: [
        "Front-End Development",
        "Back-End Development",
        "Trainings",
        "Hosting",
        "Online - Forms",
        "Web Application",
        "Mobile App Development",
      ],
      icon:<GrServices />
    },
    {
      title: "Projects",
      projects: ["Portfolio"], 
      icon:<GrProjects/>
    },
    {
      title: "Courses",
      courses: ["HTML",
        "CSS", "JavaScript"
      ],
      icon:<GrBook/>
    },
  ];

  const displayCards = () => {
    const cards = [];
    for (let i = 0; i < overviewTitles.length; i++) {
      const count =
        overviewTitles[i].services?.length ||
        overviewTitles[i].projects?.length ||
        overviewTitles[i].courses?.length ||
        0;

      cards.push(
        <div className="cardDesign" key={i}>
          <div className="title">{overviewTitles[i].title}</div>
          <div className="servicesCount count">
            <CountUp start={0} end={count} duration={2.5} /> {`${count !== 0 ? "+" : ' '}`}
          </div>
          <i className="icon">
            {overviewTitles[i].icon}
          </i>
        </div>
      );
    }
    return cards;
  };

  return <div className="overview">{displayCards()}</div>;
};

export default Overview;
