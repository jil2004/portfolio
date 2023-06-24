import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jil Upadhyay </span>
            from <span className="purple"> Ahmedabad, India.</span>
            <br /> I am a undergraduate student pursuing B.Tech
            in Computer Science at Silver Oak University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Sci-Fi Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “Coding is the art of weaving logic and creativity, where lines of code intertwine to create a tapestry of functionality and innovation, stitching together a digital realm limited only by our imagination.”{" "}
          </p>
          <footer className="blockquote-footer">Jil Upadhyay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
