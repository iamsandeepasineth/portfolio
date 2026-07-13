import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col lg="8">
            <p className="po-privacy-note">
              <em>
                Note: Some client and company names have been intentionally
                omitted from the descriptions above to respect client privacy
                and confidentiality agreements.
              </em>
            </p>
          </Col>
        </Row>
        <Row className="mb-5">
          {dataportfolio.map((data, i) => (
            <Col md="6" lg="4" className="mb-4" key={i}>
              <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="po-card-link"
                style={{ "--card-accent": data.color }}
              >
                <div className="po-card h-100">
                  <div
                    className="po-card-image"
                    style={{ backgroundImage: `url(${data.img})` }}
                  ></div>
                  <div className="po-card-body">
                    <h3 className="po-title">{data.title}</h3>
                    <p className="po-excerpt">{data.description}</p>
                    <div className="po-read-more">
                      Read more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="ms-2"
                      >
                        <path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                        <path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
