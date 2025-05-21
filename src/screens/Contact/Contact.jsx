import React from "react";
import "./Contact.css";
import { Col, Row } from "reactstrap";
const Contact = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 m -2">
      <h3>Vous souhaitez me contacter ? </h3>
      <Col
        lg={"6"}
        md={"8"}
        sm={"10"}>
        <form
          id="contact-form"
          onSubmit={() => {}}
          noValidate>
          <Row>
            <Col
              className="my-1"
              lg={12}
              md={12}
              sm={12}>
              <input
                type="text"
                name="name"
                className="form-control formInput"
                placeholder="Nom"></input>
            </Col>
            <Col
              className="my-1"
              lg={12}
              md={12}
              sm={12}>
              <input
                type="email"
                name="email"
                className="form-control formInput"
                placeholder="Email"></input>
            </Col>

            <Col
              className="my-1"
              lg={12}
              md={12}
              sm={12}>
              <input
                type="text"
                name="subject"
                className="form-control formInput"
                placeholder="Sujet"></input>
            </Col>

            <Col
              className="my-1"
              lg={12}
              md={12}
              sm={12}>
              <textarea
                rows={3}
                name="message"
                className="form-control formInput"
                placeholder="Message"></textarea>
            </Col>
            <Col
              className="my-3 d-flex justify-content-center align-items-center"
              lg={12}
              md={12}
              sm={12}>
              <button
                className="submit-btn"
                disabled={false}
                type="Envoyer">
                Submit
              </button>
            </Col>
          </Row>
        </form>
      </Col>
    </div>
  );
};

export default Contact;
