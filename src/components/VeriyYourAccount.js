import React, { Component } from 'react';
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
} from 'reactstrap';

export class VeriyYourAccount extends Component {
  render() {
    return (
      <div className="container">
        <p>
          We are almost there!
          <span>Now please verify your account</span>
          <span>by clicking on the link in the</span>
          <span>received email from us.</span>
          <span>Please also check your spam folder.</span>
        </p>

        <div>
          <Button color="primary">I didn't receive email</Button>
          <Button color="primary">Close</Button>
        </div>
      </div>
    );
  }
}

export default VeriyYourAccount;
