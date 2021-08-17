import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import order_confirmed from "./images/order_confirmed.jpeg";

export class OrderConfirmed extends Component {
  render() {
    return (
      <div className="container p-5">
        <Col className="center-block text-center">
          <Row className="justify-content-center mt-5">
            <img src={order_confirmed} height="200px" />
          </Row>
          <Row className="justify-content-center mt-4">
            <h4 color="">Order Confirmed</h4>
          </Row>
        </Col>
      </div>

    );
  }
}

export default OrderConfirmed;
