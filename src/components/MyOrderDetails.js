import React, { Component } from "react";
import { Card, Col, Row, CustomInput } from "reactstrap";
import bg1Image from "assets/img/bg/background_1920-9.jpg";
import { MdWatchLater } from "react-icons/md";
import { FaStar, FaRegStar, FaFileAlt } from "react-icons/fa";

export class MyOrderDetails extends Component {
  render() {
    return (
      <Row>
        <Card className="container p-5">
          <Row>
            <Col>
              <img width="350px" src={bg1Image} />
            </Col>
            <Col>
              <img width="200px" src={bg1Image} />
            </Col>
            <Col>
              <img width="200px" src={bg1Image} />
            </Col>
            <Col>
              <img width="200px" src={bg1Image} />
            </Col>
          </Row>
          <div className="pt-3">
            <h3>Various transports with cartons, wood and others</h3>
            <h6>
              <MdWatchLater /> published 2 days ago
            </h6>

            <Row>
              <Col>
                <strong>User: Adriano 77</strong>
                <br />
                <strong className="mt-1">Status: Open 77</strong>
              </Col>
              <Col>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <FaRegStar />
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <p className="col-6">
                It would be good if the transport can be done as soon as
                possible. The goods are already in front of the house
              </p>
            </Row>
            <div>
              <CustomInput
                type="radio"
                id="exampleCustomRadio"
                name="customRadio"
                label="S"
                inline
              />

              <CustomInput
                type="radio"
                id="exampleCustomRadio2"
                name="customRadio"
                label="M"
                inline
              />

              <CustomInput
                type="radio"
                id="exampleCustomRadio3"
                label="L"
                inline
              />

              <CustomInput
                type="radio"
                id="exampleCustomRadio4"
                label="XL"
                htmlFor="exampleCustomRadio4_X"
                inline
              />
            </div>
          </div>

          <Row className="mt-3">
            <strong>
              <ul>
                <li>Transport from A to B</li>
                <li>Bulky goods: Yes </li>
                <li>Assembly of Sideboard</li>
              </ul>
            </strong>
          </Row>

          <Row className="mt-3">
            <div className="col-4">
              <h3 className="font-weight-bold">Pickup details</h3>

              <ul>
                <li>Address </li>
                <li>Pickup</li>
                <li>Contactless</li>
                <li>Groundfloor</li>
                <li>1 Person required</li>
              </ul>
            </div>
          </Row>

          <div className="mt-3 row-sm-2">
            <div className="col-4">
              <h3 className="h4 font-weight-bold ">Delivery details</h3>
            </div>

            <ul>
              <li>Address </li>
              <li>Pickup</li>
              <li>Contactless</li>
              <li>Groundfloor</li>
              <li>1 Person required</li>
            </ul>
          </div>
          <hr />
          <div className="row-4 mt-5">
            <div className="col-4">
              <p className="h3 font-weight-bold">Pickup scheduling</p>
            </div>

            <ul>
              <li>Anytime</li>
              <li>Contactless pickup possible</li>
            </ul>
          </div>

          <div className="row-4 mt-5">
            <div className="col-4">
              <p className="h3 font-weight-bold">Delivery scheduling</p>
            </div>
            <p className="ml-5 font-weight-bold">Today - Date: 20.06.2021</p>
            <p className="ml-5">Select desired time for delivery </p>
            <div className="row row-cols-3 ml-5">
              <button type="button" className="btn btn-outline-secondary m-2">
                10.00-11.00
              </button>
              <button type="button" className="btn btn-outline-secondary m-2">
                11.00-12.00
              </button>
              <button type="button" className="btn btn-outline-secondary m-2">
                12.00-13.00
              </button>
            </div>

            <div className="row row-cols-3 ml-5">
              <button type="button" className="btn btn-outline-secondary m-2">
                14.00-15.00
              </button>
              <button type="button" className="btn btn-outline-secondary m-2">
                16.00-17.00
              </button>
              <button type="button" className="btn btn-outline-secondary m-2">
                17.00-18.00
              </button>
            </div>

            <p className="ml-5 font-weight-bold">Tomorrow - Date: 21.06.2021</p>
            <p className="ml-5">Select desired time for delivery </p>
            <div className="row row-cols-3 ml-5">
              <button type="button" className="btn btn-outline-secondary m-2">
                10.00-11.00
              </button>
              <button type="button" className="btn btn-outline-secondary m-2">
                11.00-12.00
              </button>
              <button type="button" className="btn btn-outline-secondary m-2">
                12.00-13.00
              </button>
            </div>

            <div className="row row-cols-3 ml-5">
              <button type="button" className="btn btn-outline-secondary m-2">
                14.00-15.00
              </button>
              <button type="button" className="btn btn-outline-secondary m-2">
                16.00-17.00
              </button>
              <button type="button" className="btn btn-outline-secondary m-2">
                17.00-18.00
              </button>
            </div>
          </div>

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
                <i className="material-icons pmd-sm  px-5 ">Delete</i>
              </a>
            </Row>
            <Row className="px-3">
              <a
                style={{ color: "#ffffff" }}
                href
                className="btn-block btn-floating btn-lg"
                data-title="Change"
              >
                <i className="material-icons pmd-sm  px-5 mt-3">Change</i>
              </a>
            </Row>

            <Row className="px-3">
              <a
                style={{ color: "#ffffff" }}
                href
                className="btn-block btn-floating btn-lg"
                data-title="Pause"
              >
                <i className="material-icons pmd-sm  px-5 mt-3">Pause</i>
              </a>
            </Row>
          </div>
        </Card>
      </Row>
    );
  }
}

export default MyOrderDetails;
