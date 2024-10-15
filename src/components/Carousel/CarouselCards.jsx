import React from "react";
import { Carousel } from "react-bootstrap"; // Si estás utilizando React Bootstrap
import "./carousel.css";
const CarouselCards = ({ cards }) => {
  const cardColors = ["#00a8ff", "#7f8fa6", "#2f3640"]; // Puedes agregar más colores según sea necesario
  return (
    <Carousel className="fn">
      {cards.map((card, index) => (
        <Carousel.Item key={index}>
          <div className="card cardCarousel ">
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.description}</p>

              <div
                className="certificadoDivision aluraC "
                style={{ backgroundColor: cardColors[index] }}
              >
                <h2>
                  <span className="iconC">🎓 </span>
                  {card.institution}
                </h2>
                <div className="certificadosOracleSeccion">
                  <p>{card.info}</p>
                  <div className="formaciones">
                    <ul>
                      {card.courses.map((course, idx) => (
                        <li key={idx}>{course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselCards;
