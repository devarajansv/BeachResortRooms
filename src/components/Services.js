import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktile",
        info:
          "This a dummmy text to test the dev environment and later required info can be added by the client as thieir own convinient",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "This a dummmy text to test the dev environment and later required info can be added by the client as thieir own convinient",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "This a dummmy text to test the dev environment and later required info can be added by the client as thieir own convinient",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "This a dummmy text to test the dev environment and later required info can be added by the client as thieir own convinient",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
