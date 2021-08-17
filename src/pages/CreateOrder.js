import Page from 'components/Page';
import PropTypes from 'prop-types';
import { IconWidget, NumberWidget } from 'components/Widget';
import React from 'react';
import {
    Button, Card, CardGroup, CardDeck, CardBody, CardText, CardImg,
    CardHeader, CardTitle, CardFooter, CardImgOverlay, Col, Row,
} from 'reactstrap';
import history from '../history';
import { getColor } from 'utils/colors';
import bg1Image from 'assets/img/bg/background_1920-9.jpg';
const today = new Date();
// const lastWeek = new Date(
//     today.getFullYear(),
//     today.getMonth(),
//     today.getDate() - 7,
// );

const CreateOrder = props => {
    // const primaryColor = getColor('primary');
    // const secondaryColor = getColor('secondary');

    return (
        <Page
            className="CreateOrder"
            breadcrumbs={[{ name: 'CreateOrder', active: true }]}
        >
            <div className="container">
                <div className="text-center">
                    <Card>
                        <h2 className="justify-content-center">Important Information</h2>
                        <br /><br />
                        <div >
                            <Row>
                                <Col></Col>
                                <Col>
                                    <h6 className="text-center">The following goods are not allowed to be
                                        processed on the cahuu platform:</h6>
                                    <br />
                                    <ol className="list-group">
                                        <li className="list-group-item">Illegal goods</li>
                                        <li className="list-group-item">Hazardous goods</li>
                                        <li className="list-group-item">Animals</li>
                                        <li className="list-group-item">Humans</li>
                                    </ol>
                                </Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col></Col>
                                <Col><div className="justify-content-center">
                                    <Button className="btn" onClick={(e) => { history.push("/createOrders"); }} color="primary">Yes, I confirm that I won't not process
                                        these goods</Button>
                                </div>
                                </Col>
                                <Col></Col>
                            </Row>

                        </div>

                    </Card>
                </div>
            </div >

        </Page >
    );

};
export default CreateOrder;