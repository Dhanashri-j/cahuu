import Page from "components/Page";
import PropTypes from "prop-types";
import { IconWidget, NumberWidget } from "components/Widget";
import React from "react";
import {
  Button,
  Card,
  CardGroup,
  CardDeck,
  CardBody,
  CardText,
  CardImg,
  CardHeader,
  CardTitle,
  CardFooter,
  CardImgOverlay,
  Col,
  Row,
} from "reactstrap";
import { getColor } from "utils/colors";
import history from "../history";
import _disposal_service_logo from "assets/img/_disposal_service_logo.svg";
import _transport_service_logo from "assets/img/_transport_service_logo.svg";
const today = new Date();

const CreateOrders = (props) => {
  const primaryColor = getColor("primary");
  const secondaryColor = getColor("secondary");

  return (
    <Page
      className="CreateOrders"
      // title="Home"
      breadcrumbs={[{ name: "CreateOrders", active: true }]}
    >
      <div className="container">
        <div className="text-center">
          <Card>
            <div className="p-5">
              <Row>
                <Col></Col>
                <Col>
                  <div className="justify-content-center">
                    <h3>Picksup</h3>
                    <Button className="rounded btn btn-block" color="secondary">
                      <img height="24px" src={_disposal_service_logo} />{" "}
                      Disposal &<br />
                      Recycling
                    </Button>
                  </div>
                  <div className="justify-content-center p-5">
                    <h3>Bringer</h3>
                    <Button className="rounded btn btn-block" color="primary">
                      <img height="24px" src={_transport_service_logo} />{" "}
                      Transport & Removal
                    </Button>
                  </div>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <div>
                  {/* <h3>Images</h3> */}
                  {/* <input type="file" ref="file" type="file" name="user[image]"
                                    multiple="true" onChange={(e) => props.fileSelectedHandler} />
                                <img src={props.imgSrc} /> */}
                </div>
              </Row>
            </div>
          </Card>
        </div>
      </div>
    </Page>
  );
};
export default CreateOrders;
