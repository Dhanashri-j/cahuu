import { AnnouncementCard, TodosCard } from 'components/Card';
import Page from 'components/Page';
import PropTypes from 'prop-types';
import { IconWidget, NumberWidget } from 'components/Widget';
import React from 'react';
import {
  Button, Card, CardGroup, CardDeck, CardBody, CardText, CardImg,
  CardHeader, CardTitle, CardFooter, CardImgOverlay, Col, Row,
} from 'reactstrap';
import { getColor } from 'utils/colors';
import bg1Image from 'assets/img/bg/background_1920-9.jpg';
const today = new Date();
// const lastWeek = new Date(
//   today.getFullYear(),
//   today.getMonth(),
//   today.getDate() - 7,
// );

const DashboardPage = props => {
  const primaryColor = getColor('primary');
  const secondaryColor = getColor('secondary');

  return (
    <Page
      className="DashboardPage"
      // title="Home"
      breadcrumbs={[{ name: 'Dashboard', active: true }]}
    >
      <div className="container" >
        <h3>Orders near you</h3>
        <Row className="row-cols-md-5 row-cols-lg-5 row-cols-sm-2 row-cols-xs-2">
          <CardDeck >
            <Card >
              <CardImg top className="card-img-left"
                src={bg1Image}
                alt="Card image cap" />
              <CardFooter style={{ backgroundColor: "#2ea392" }}>
                <CardTitle style={{ color: "#ffffff" }} tag="h5" >50 CHF {props.name}</CardTitle>
              </CardFooter>
            </Card>
            <Card  >
              <CardImg top className="card-img-left"
                src={bg1Image}
                alt="Card image cap" />
              <CardFooter style={{ backgroundColor: "#2ea392" }}>
                <CardTitle style={{ color: "#ffffff" }} tag="h5">100 CHF</CardTitle>
              </CardFooter>
            </Card>
            <Card  >
              <CardImg top className="card-img-left"
                src={bg1Image}
                alt="Card image cap" />
              <CardFooter style={{ backgroundColor: "#2ea392" }}>
                <CardTitle style={{ color: "#ffffff" }} tag="h5">50 CHF</CardTitle>
              </CardFooter>
            </Card>
            <Card color="primary">
              <CardImg top className="card-img-left"
                src={bg1Image}
                alt="Card image cap" />
              <CardFooter style={{ backgroundColor: "#2ea392" }}>
                <CardTitle style={{ color: "#ffffff" }} tag="h5">100 CHF</CardTitle>
              </CardFooter>
            </Card>
            <Card  >
              <CardImg top className="card-img-left"
                src={bg1Image}
                alt="Card image cap" />
              <CardFooter style={{ backgroundColor: "#2ea392" }}>
                <CardTitle style={{ color: "#ffffff" }} tag="h5">50 CHF</CardTitle>
              </CardFooter>
            </Card>
          </CardDeck>

        </Row>
        <hr />
        <h2>New orders</h2>

        <Row>
          <CardDeck>
            <Card  >
              <CardImg top className="card-img-left"
                src={bg1Image}
                alt="Card image cap" />
              <CardFooter style={{ backgroundColor: "#2ea392" }}>
                <CardTitle style={{ color: "#ffffff" }} tag="h5" >50 CHF</CardTitle>
              </CardFooter>
            </Card>
            <Card  >
              <CardImg top className="card-img-left"
                src={bg1Image}
                alt="Card image cap" />
              <CardFooter style={{ backgroundColor: "#2ea392" }}>
                <CardTitle style={{ color: "#ffffff" }} tag="h5">100 CHF</CardTitle>
              </CardFooter>
            </Card>
            <Card  >
              <CardImg top className="card-img-left"
                src={bg1Image}
                alt="Card image cap" />
              <CardFooter style={{ backgroundColor: "#2ea392" }}>
                <CardTitle style={{ color: "#ffffff" }} tag="h5">50 CHF</CardTitle>
              </CardFooter>
            </Card>
            <Card color="primary" >
              <CardImg top className="card-img-left"
                src={bg1Image}
                alt="Card image cap" />
              <CardFooter style={{ backgroundColor: "#2ea392" }}>
                <CardTitle style={{ color: "#ffffff" }} tag="h5">100 CHF</CardTitle>
              </CardFooter>
            </Card>
            <Card  >
              <CardImg top className="card-img-left"
                src={bg1Image}
                alt="Card image cap" />
              <CardFooter style={{ backgroundColor: "#2ea392" }}>
                <CardTitle style={{ color: "#ffffff" }} tag="h5">50 CHF</CardTitle>
              </CardFooter>
            </Card>
          </CardDeck>
        </Row>
        <hr />
        <Row>
          <CardDeck>
            <Card  >
              <CardImg top className="card-img-left"
                src={bg1Image}
                alt="Card image cap" />
              <CardFooter style={{ backgroundColor: "#d846db" }}>
                <CardTitle style={{ color: "#ffffff" }} tag="h5" >50 CHF</CardTitle>
              </CardFooter>
            </Card>
            <Card  >
              <CardImg top className="card-img-left"
                src={bg1Image}
                alt="Card image cap" />
              <CardFooter style={{ backgroundColor: "#d846db" }}>
                <CardTitle style={{ color: "#ffffff" }} tag="h5">100 CHF</CardTitle>
              </CardFooter>
            </Card>
            <Card  >
              <CardImg top className="card-img-left"
                src={bg1Image}
                alt="Card image cap" />
              <CardFooter style={{ backgroundColor: "#d846db" }}>
                <CardTitle style={{ color: "#ffffff" }} tag="h5">50 CHF</CardTitle>
              </CardFooter>
            </Card>
            <Card color="primary" >
              <CardImg top className="card-img-left"
                src={bg1Image}
                alt="Card image cap" />
              <CardFooter style={{ backgroundColor: "#d846db" }}>
                <CardTitle style={{ color: "#ffffff" }} tag="h5">100 CHF</CardTitle>
              </CardFooter>
            </Card>
            <Card  >
              <CardImg top className="card-img-left"
                src={bg1Image}
                alt="Card image cap" />
              <CardFooter style={{ backgroundColor: "#d846db" }}>
                <CardTitle style={{ color: "#ffffff" }} tag="h5">50 CHF</CardTitle>
              </CardFooter>
            </Card>
          </CardDeck>
        </Row>
        {/* <!-- Floating Action Button like Google Material --> */}
        <div className="menu pmd-floating-action" role="navigation">
          <a style={{ color: "#ffffff" }} href className="pmd-floating-action-btn btn pmd-btn-fab pmd-btn-raised pmd-ripple-effect btn-floating" data-title="Create Order" >
            <span className="pmd-floating-hidden">Primary</span>
            <i className="material-icons pmd-sm">Create Order <strong>+</strong></i>
          </a>
        </div>
      </div >
    </Page >
  );

};
export default DashboardPage;
