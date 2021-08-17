import React, { Component } from "react";
import { Row } from "reactstrap";

export class MyOrdersImportantInformation extends Component {
  render() {
    return (
      <div>
        <Row className="justify-content-center mt-5">
          <h5 className="font-weight-bold">Important Information</h5>
        </Row>

        <Row className="justify-content-center mt-4 mb-3">
          <h5 className="font-weight-bold col-3 text-center">
            Are tou sure, that you want to change your order?
          </h5>
        </Row>

        <Row className="justify-content-center mt-5">
          <h5 className="col-3 text-center">
            Please consider terms and fees for change/cancel or pause accepted
            orders:
          </h5>
        </Row>

        <Row className="justify-content-center mt-5">
          <strong className="col-4">
            <ul>
              <li>
                Until 24 hours before scheduled pickup 10% fee of order payment
                will be charged
              </li>
              <li>
                Ater 24 hours before scheduled pickup 50% fee of order payment
                will be charged
              </li>
              <li>
                2 hours before scheduled pickup 100% fee of order payment will
                be charged
              </li>
            </ul>
          </strong>
        </Row>

        <div
          className="menu pmd-floating-action justify-self-right"
          role="navigation"
        >
          <Row className="px-3">
            <a
              style={{ color: "#ffffff" }}
              href
              className="btn-block btn-floating btn-lg"
              data-title="Delete"
            >
              <i className="material-icons pmd-sm  px-5 ">
                No I don't want to cancel
              </i>
            </a>
          </Row>
          <Row className="px-3">
            <a
              style={{ color: "#ffffff" }}
              href
              className="btn-block btn-floating btn-lg"
              data-title="Change"
            >
              <i className="material-icons pmd-sm  px-5 mt-3">
                Yes cancel I accept the terms
              </i>
            </a>
          </Row>
        </div>
      </div>
    );
  }
}

export default MyOrdersImportantInformation;
