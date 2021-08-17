import React, { Component } from "react";
import Page from "components/Page";
import {
  Card,
  CardDeck,
  CardImg,
  CardTitle,
  CardFooter,
  Row,
} from "reactstrap";
import bg1Image from "assets/img/bg/background_1920-9.jpg";
import ReveiwCarrier from "../components/ReveiwCarrier";

export class MyOrders extends Component {
  render() {
    return (
      <Page
        className="My orders"
        // title="Home"
        breadcrumbs={[{ name: "My Orders", active: true }]}
      >
        <div className="container">
          <Row className="mt-3">
            <h2 className="align-self-left">My Orders</h2>
          </Row>
          <Row
            className="row-cols-5"
            className="props.listView === true ? 'd-block' : 'd-none'"
          >
            <CardDeck>
              <Card>
                <CardImg
                  top
                  className="card-img-left"
                  src={bg1Image}
                  style={{ width: "200", height: "200" }}
                  alt="Card image cap"
                />
                <CardFooter style={{ backgroundColor: "#2ea392" }}>
                  <CardTitle style={{ color: "#ffffff" }} tag="h5">
                    50 CHF
                  </CardTitle>
                </CardFooter>
              </Card>
              <Card>
                <CardImg
                  top
                  className="card-img-left"
                  src={bg1Image}
                  style={{ width: "200", height: "200" }}
                  alt="Card image cap"
                />
                <CardFooter style={{ backgroundColor: "#2ea392" }}>
                  <CardTitle style={{ color: "#ffffff" }} tag="h5">
                    100 CHF
                  </CardTitle>
                </CardFooter>
              </Card>
              <Card>
                <CardImg
                  top
                  className="card-img-left"
                  src={bg1Image}
                  style={{ width: "200", height: "200" }}
                  alt="Card image cap"
                />
                <CardFooter style={{ backgroundColor: "#2ea392" }}>
                  <CardTitle style={{ color: "#ffffff" }} tag="h5">
                    50 CHF
                  </CardTitle>
                </CardFooter>
              </Card>
              <Card color="primary">
                <CardImg
                  top
                  className="card-img-left"
                  src={bg1Image}
                  style={{ width: "200", height: "200" }}
                  alt="Card image cap"
                />
                <CardFooter style={{ backgroundColor: "#2ea392" }}>
                  <CardTitle style={{ color: "#ffffff" }} tag="h5">
                    100 CHF
                  </CardTitle>
                </CardFooter>
              </Card>
              <Card>
                <CardImg
                  top
                  className="card-img-left"
                  src={bg1Image}
                  style={{ width: "200", height: "200" }}
                  alt="Card image cap"
                />
                <CardFooter style={{ backgroundColor: "#2ea392" }}>
                  <CardTitle style={{ color: "#ffffff" }} tag="h5">
                    50 CHF
                  </CardTitle>
                </CardFooter>
              </Card>
            </CardDeck>
          </Row>

          <Row className="mt-5">
            <h2 className="align-self-left">Done Orders</h2>
          </Row>

          <Row
            className="row-cols-5"
            className="props.listView === true ? 'd-block' : 'd-none'"
          >
            <CardDeck>
              <Card className="rounded-3">
                <CardImg
                  top
                  className="card-img-left"
                  src={bg1Image}
                  style={{ width: "200", height: "200" }}
                  alt="Card image cap"
                />
                <CardFooter style={{ backgroundColor: "grey" }}>
                  <CardTitle style={{ color: "#ffffff" }} tag="h5">
                    50 CHF
                  </CardTitle>
                </CardFooter>
              </Card>
              <Card className="rounded-3">
                <CardImg
                  top
                  className="card-img-left"
                  src={bg1Image}
                  style={{ width: "200", height: "200" }}
                  alt="Card image cap"
                />
                <CardFooter style={{ backgroundColor: "grey" }}>
                  <CardTitle style={{ color: "#ffffff" }} tag="h5">
                    100 CHF
                  </CardTitle>
                </CardFooter>
              </Card>
              <Card className="rounded-3">
                <CardImg
                  top
                  className="card-img-left"
                  src={bg1Image}
                  style={{ width: "200", height: "200" }}
                  alt="Card image cap"
                />
                <CardFooter style={{ backgroundColor: "grey" }}>
                  <CardTitle style={{ color: "#ffffff" }} tag="h5">
                    50 CHF
                  </CardTitle>
                </CardFooter>
              </Card>
              <Card className="rounded-3">
                <CardImg
                  top
                  className="card-img-left"
                  src={bg1Image}
                  style={{ width: "200", height: "200" }}
                  alt="Card image cap"
                />
                <CardFooter style={{ backgroundColor: "grey" }}>
                  <CardTitle style={{ color: "#ffffff" }} tag="h5">
                    50 CHF
                  </CardTitle>
                </CardFooter>
              </Card>
              <Card className="rounded-3">
                <CardImg
                  top
                  className="card-img-left"
                  src={bg1Image}
                  style={{ width: "200", height: "200" }}
                  alt="Card image cap"
                />
                <CardFooter style={{ backgroundColor: "grey" }}>
                  <CardTitle style={{ color: "#ffffff" }} tag="h5">
                    50 CHF
                  </CardTitle>
                </CardFooter>
              </Card>
            </CardDeck>
          </Row>
        </div>

        {/* <ReveiwCarrier /> */}
      </Page>
    );
  }
}

export default MyOrders;
