import React, { Component } from "react";
import { FaFileAlt, FaRegStar, FaStar } from "react-icons/fa";
import { Row, Col } from "reactstrap";
import user from "./images/user.png";

export class ReveiwCarrier extends Component {
  render() {
    return (
      <div className="container pt-3">
        <Row>
          <h3 className="align-self-left">Review To Manuel77</h3>
        </Row>

        <Row className="justify-content-center align-self-center  mt-3">
          <img src={user} alt="review" height="200px" />
        </Row>
        <Row className="justify-content-center align-self-center mt-3">
          <h5>Please make your carrier a review for his service:</h5>
        </Row>

        <Row className="justify-content-center align-self-center mt-3">
          <Col sm={{ size: 3, order: 1, offset: 1 }}>
            <FaRegStar size="20" />
            <FaRegStar size="20" />
            <FaRegStar size="20" />
            <FaRegStar size="20" />
            <FaRegStar size="20" />
          </Col>
        </Row>

        <div className="menu pmd-floating-action" role="navigation">
          <a
            style={{ color: "#ffffff" }}
            href
            className="pmd-floating-action-btn btn pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-floating"
            data-title="Confirm Order"
          >
            <span className="pmd-floating-hidden">Primary</span>
            <i className="material-icons pmd-sm">
              <FaFileAlt /> Confirm Review
            </i>
          </a>
        </div>
      </div>
    );
  }
}

export default ReveiwCarrier;
