import React, { Component } from "react";
import { Col, Input, Row } from "reactstrap";
import ReveiwCarrier from "./ReveiwCarrier";

export class UnsatisfyReview extends Component {
  render() {
    return (
      <div className="container">
        <Row sm="12 align-items-center">
          <Col>
            <ReveiwCarrier />
          </Col>
          <Col className="text-center align-self-center mt-5">
            <Row className="align-self-center mt-5">
              <h5>Ups, let us know, why the carrier gets such a bad review:</h5>
            </Row>

            <Row>
              <Input
                type="textarea"
                name="text"
                value="Carrier was:"
                className="mt-3"
              />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UnsatisfyReview;
