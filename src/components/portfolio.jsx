import React, { Component } from "react";

import { getPortfolio } from "./../services/portfolio";

class Portfolio extends Component {
  state = {
    portfolio: [],
  };

  componentDidMount() {
    this.setState({ portfolio: getPortfolio() });
  }

  render() {
    return (
      <div id="portfolio-div">
        <h1 className="page-header">Published Articles</h1>
        <p id="portfolio-subtext">
          Showing a selection of John Doe's published articles
        </p>

        {this.state.portfolio.map((item) => (
          <div key={item.title} className="article-div">
            <h2 className="portfolio-title">
              <a
                href={item.articleURL}
                id="portfolio-title-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </a>
            </h2>
            <p className="portfolio-content">
              Published in {item.date} by{" "}
              <a
                href={item.publisherURL}
                id="portfolio-publisher-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.publisher}
              </a>{" "}
              {item.type}
            </p>

            <p className="portfolio-content2">
              <span style={{ fontStyle: "italic" }}>{item.content.p1}</span>
            </p>
            <p className="portfolio-content2">
              <span style={{ fontStyle: "italic" }}>{item.content.p2}</span>{" "}
              (...)
            </p>
          </div>
        ))}
      </div>
    );
  }
}
export default Portfolio;
