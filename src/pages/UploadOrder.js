import Page from 'components/Page';
import PropTypes from 'prop-types';
import { IconWidget, NumberWidget } from 'components/Widget';
import React from 'react';
import {
    Button, Card, Input, Col, Row, CustomInput,
} from 'reactstrap';
import { getColor } from 'utils/colors';
import history from '../history';
import _disposal_service_logo from 'assets/img/_disposal_service_logo.svg';
import _transport_service_logo from 'assets/img/_transport_service_logo.svg';
import bulkyImage from 'assets/img/bulky-waste-pick-up-black.jpg';
import Label from 'reactstrap/lib/Label';
import RUG, { DragArea, DropArea, List } from 'react-upload-gallery';
// Add style manually
import 'styles/_animations.scss';
import 'react-upload-gallery/dist/style.css'; // or scss
import ImageGallery from 'react-image-gallery';

const CreateOrders = props => {
    const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');
    const today = new Date();
    var fileObj = [];
    var fileArray = [];
    let imgPreview;
    if (fileArray.file) {
        imgPreview = <img src={props.fileArray} alt='' />;
    }
    return (
        <Page
            className="CreateOrders"
            // title="Home"
            breadcrumbs={[{ name: 'CreateOrders', active: true }]}
        >
            <div className="container">
                <div className="text-center">
                    <Card>
                        <Row className="p-5">
                            <form>
                                <div>
                                    <RUG>
                                        {
                                            (images) => (
                                                <div>
                                                    {
                                                        images.map(image => (
                                                            <div>
                                                                <img src={image.source} />
                                                            </div>
                                                        )
                                                        )}

                                                </div>
                                            )
                                        }
                                    </RUG>
                                    <Row>
                                        {/* <ImageGallery items={props.file} /> */}
                                        {/* <Button type="button" onclick={() => { props.zoomin(); }}>
                                            Zoom-In
                                        </Button>

                                        <Button type="button" onclick={() => { props.zoomout(); }}>
                                            Zoom-Out
                                        </Button> */}
                                    </Row>

                                </div>

                                <div className="form-group multi-preview">

                                    {/* {(props.fileArray || []).map(url => (
                                        <img src={url} alt="..." />
                                    ))} */}
                                    {/* {imgPreview} */}
                                </div>

                                {/* <div className="form-group">
                                    <input type="file" className="form-control" onChange={() => props.uploadMultipleFiles} multiple />
                                </div>
                                <Button type="button" className="btn btn-danger btn-block" onClick={() => props.uploadFiles}>Upload</Button> */}
                            </form>
                        </Row>
                        <hr />

                        <Row>
                            <Col className="col-md-6">
                                <h3 className="align-items-start">Types of Waste</h3>
                                <div className="form-check form-check-inline">
                                    <Label className="col">Are there bulky goods?</Label>
                                    <CustomInput className="col" type="switch" id="exampleCustomSwitch" name="customSwitch" label="Only Open Orders" />
                                </div>
                                <div>
                                    <img src={bulkyImage} width="200px" />
                                </div>
                            </Col><Col></Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col className="col-md-6">
                                <Label className="m-2 justify-content-start">Please select types of your waste</Label>
                                <div >
                                    <Col>
                                        <Button outline color="black">Glasses</Button> <Button outline color="black">Aluminium</Button> <Button outline color="black">Metals</Button>
                                    </Col>
                                    <Col>
                                        <Button outline color="secondary">Cooking oil</Button> <Button outline color="black">Cardboard</Button> <Button outline color="secondary">Paper</Button>
                                    </Col>
                                    <Col>
                                        <Button outline color="black">Green waste</Button> <Button outline color="black">Furniture</Button> <Button outline color="black">Plastics</Button>
                                    </Col>
                                    <Col>
                                        <Button outline color="black">Styrophor</Button> <Button outline color="black">Electronicals</Button> <Button outline color="black">Metals</Button>
                                    </Col>
                                    <Col>
                                        <Button outline color="secondary">Cooking oil</Button> <Button outline color="black">Cardboard</Button> <Button outline color="black">Clothes</Button>
                                    </Col>
                                </div>
                                <Col>
                                    <Button outline color="black">Various</Button>   <Button outline color="black">Unkown</Button>
                                </Col>
                            </Col>
                            <Col></Col>
                        </Row>
                        <hr />
                        <Row className="col-md-6 px-5">
                            <h2>Enter pickup address</h2>
                            <Label for="basic-url" className="form-label">First and last name/company name</Label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                            </div>

                            <Label for="street" className="form-label">Street</Label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" id="street" aria-describedby="basic-addon3" />
                            </div>

                            <Label for="num" className="form-label">Number</Label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" id="num" aria-describedby="basic-addon3" />
                            </div>

                            <Label for="zip" className="form-label">Zipcode</Label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" id="zip" aria-describedby="basic-addon3" />
                            </div>

                            <Label for="city" className="form-label">City</Label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" id="city" aria-describedby="basic-addon3" />
                            </div>

                            <Label for="address" className="form-label">Your profile address &nbsp;</Label>
                            <div className="input-group mb-3">
                                <CustomInput className="col" type="switch" id="address" name="customSwitch" label="Only Open Orders" />
                            </div>
                        </Row>
                        <hr />
                        <Row className="col-md-6 px-5">
                            <Label >Your contact address: &nbsp;</Label>
                            <div className="">
                                <p className="justify-content font-weight-bold">Adriano Vizzini Höschgasse, <br />78 8008 Zurich </p>
                            </div>
                        </Row>

                        <hr />
                        <Row className="col-md-8 px-5">
                            <h2>Enter Pickup location</h2>

                            <div className="input-group">
                                <Label for="app" className="form-label font-weight-bold px-2 col-4">In appartment/ house: </Label>
                                <CustomInput type="switch" id="app" name="customSwitch" label="Only Open Orders " />&nbsp;
                                <Input type="text" className="text-center mx-2" value="5" placeholder="floor" name="text" /><Label>Please enter floor</Label>
                            </div>
                            <div className="input-group">
                                <Label for="a" className="form-label font-weight-bold px-2 col-4">In store/ office: </Label>
                                <CustomInput className="col-4" type="switch" id="a" name="customSwitch" label="Only Open Orders" />
                            </div>
                            <div className="input-group">
                                <Label for="b" className="form-label font-weight-bold px-2 col-4">In the stairwell: </Label>
                                <CustomInput className="col-4" type="switch" id="b" name="customSwitch" label="Only Open Orders" />
                            </div>
                            <div className="input-group">
                                <Label for="c" className="form-label font-weight-bold px-2 col-4">In front of the building: </Label>
                                <CustomInput className="col-4" type="switch" id="c" name="customSwitch" label="Only Open Orders" />
                            </div>
                            <div className="input-group">
                                <Label for="d" className="form-label font-weight-bold px-2 col-4">At the roadside: </Label>
                                <CustomInput className="col-4" type="switch" id="d" name="customSwitch" label="Only Open Orders" />
                            </div>
                            <div className="input-group">
                                <Label for="e" className="form-label font-weight-bold px-2 col-4">In the garden: </Label>
                                <CustomInput className="col-4" type="switch" id="exampleCustomSwitch" name="customSwitch" label="Only Open Orders" />
                            </div>
                        </Row>
                        <hr />
                        <Row className="col-md-6 px-5">
                            <div className="input-group">
                                <Label for="app" className="form-label font-weight-bold px-2">Contactless pickup possible?</Label>
                                <CustomInput className="col" type="switch" id="exampleCustomSwitch" name="customSwitch" label="Only Open Orders" />
                            </div>
                        </Row>
                        <hr />
                        <Row className="col-md-6 px-5">
                            <div className="input-group">
                                <Label for="app" className="form-label font-weight-bold px-2">Two persons required?</Label>
                                <CustomInput className="col" type="switch" id="exampleCustomSwitch" name="customSwitch" label="Only Open Orders" />
                            </div>
                        </Row>
                        <hr />
                        <Row className="col-md-8">
                            <Col><h6 className="text-left ">Today - 11/08/2021 <br />
                                Select preferred/ suitable timeslots</h6>
                            </Col>
                            <Col><Label for="aa" className="form-label font-weight-bold px-2">Anytime/ as soon as confirmed</Label>
                                <CustomInput className="col" type="switch" id="aa" name="customSwitch" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
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
                                        13.00-14.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        14.00-15.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        16.00-17.00
                                    </button>
                                </div>
                                <div className="row row-cols-3 ml-5">
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        17.00-18.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        18.00-19.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        19.00-20.00
                                    </button>
                                </div>
                                <div className="row row-cols-3 ml-5">
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        20.00-21.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        21.00-22.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        22.00-23.00
                                    </button>
                                </div>
                                <div className="row row-cols-3 ml-5">
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        23.00-24.00
                                    </button>
                                    {/* <button type="button" className="btn btn-outline-secondary m-2">

                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">

                                    </button> */}
                                </div>
                            </Col>

                        </Row>

                        <Row className="col-md-8">
                            <Col><h6 className="text-left ">Tomorrow - 12/08/2021 <br />
                                Select preferred/ suitable timeslots</h6>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
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
                                        13.00-14.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        14.00-15.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        16.00-17.00
                                    </button>
                                </div>
                                <div className="row row-cols-3 ml-5">
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        17.00-18.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        18.00-19.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        19.00-20.00
                                    </button>
                                </div>
                                <div className="row row-cols-3 ml-5">
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        20.00-21.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        21.00-22.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        22.00-23.00
                                    </button>
                                </div>
                                <div className="row row-cols-3 ml-5">
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        23.00-24.00
                                    </button>
                                    {/* <button type="button" className="btn btn-outline-secondary m-2">

                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">

                                    </button> */}
                                </div>
                            </Col>

                        </Row>
                        <hr />
                        <Row className="col-md-6 px-5">
                            <Col>
                                <h3 className="text-left ">Enter Pickup Schedule</h3>
                                <h6 className="text-left ">Fixed date & time</h6>
                                <p className="text-left text-muted">For fixed scheduling there should higher fees be
                                    considered</p>
                            </Col>
                            <div>
                                <Row><Col className="col-md-3">Enter Date </Col><Col className="col-md-2"></Col><Col><Input type="text" value="" placeholder="" name="text" /></Col></Row>

                                <Row><Col className="col-md-3">Enter Timeslot </Col><Col className="col-md-2"><Label>from</Label></Col><Col><Input type="text" value="" placeholder="" name="text" /></Col></Row>
                                <Row><Col className="col-md-3"></Col><Col className="col-md-2"><Label>to</Label></Col><Col ><Input type="text" value="" placeholder="" name="text" /></Col></Row>
                            </div>
                        </Row>
                        <hr />
                        <Row className="col-md-6 px-5">
                            <h2>Enter delivery address</h2>
                            <Label for="basic-url" className="form-label">First and last name/company name</Label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                            </div>

                            <Label for="street" className="form-label">Street</Label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" id="street" aria-describedby="basic-addon3" />
                            </div>

                            <Label for="num" className="form-label">Number</Label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" id="num" aria-describedby="basic-addon3" />
                            </div>

                            <Label for="zip" className="form-label">Zipcode</Label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" id="zip" aria-describedby="basic-addon3" />
                            </div>

                            <Label for="city" className="form-label">City</Label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" id="city" aria-describedby="basic-addon3" />
                            </div>

                            <Label for="address" className="form-label">Your profile address &nbsp;</Label>
                            <div className="input-group mb-3">
                                <CustomInput className="col" type="switch" id="address" name="customSwitch" label="Only Open Orders" />
                            </div>
                        </Row>
                        <hr />
                        <Row className="col-md-6 px-5">
                            <Label >Your contact address: &nbsp;</Label>
                            <div className="">
                                <p className="justify-content font-weight-bold">Adriano Vizzini Höschgasse, <br />78 8008 Zurich </p>
                            </div>
                        </Row>
                        <hr />
                        <Row>

                        </Row>
                        <hr />
                        <Row className="col-md-8 px-5">
                            <h2>Enter delivery location</h2>
                            <div className="input-group">
                                <Label for="app" className="form-label font-weight-bold px-2 col-4">In appartment/ house: </Label>
                                <CustomInput type="switch" id="app" name="customSwitch" label="Only Open Orders" />
                            </div>
                            <div className="input-group">
                                <Label for="a" className="form-label font-weight-bold px-2 col-4">In store/ office: </Label>
                                <CustomInput className="col-4" type="switch" id="a" name="customSwitch" label="Only Open Orders" />
                            </div>
                            <div className="input-group">
                                <Label for="b" className="form-label font-weight-bold px-2 col-4">In the stairwell: </Label>
                                <CustomInput className="col-4" type="switch" id="b" name="customSwitch" label="Only Open Orders" />
                            </div>
                            <div className="input-group">
                                <Label for="c" className="form-label font-weight-bold px-2 col-4">In front of the building: </Label>
                                <CustomInput className="col-4" type="switch" id="c" name="customSwitch" label="Only Open Orders" />
                            </div>
                            <div className="input-group">
                                <Label for="d" className="form-label font-weight-bold px-2 col-4">At the roadside: </Label>
                                <CustomInput className="col-4" type="switch" id="d" name="customSwitch" label="Only Open Orders" />
                            </div>
                            <div className="input-group">
                                <Label for="e" className="form-label font-weight-bold px-2 col-4">In the garden: </Label>
                                <CustomInput className="col-4" type="switch" id="exampleCustomSwitch" name="customSwitch" label="Only Open Orders" />
                            </div>
                        </Row>
                        <hr />
                        <Row className="col-md-8 px-5">
                            <div className="input-group">
                                <Label for="app" className="form-label font-weight-bold px-2">Contactless pickup possible?</Label>
                                <CustomInput className="col" type="switch" id="exampleCustomSwitch" name="customSwitch" label="Only Open Orders" />
                            </div>
                        </Row>
                        <hr />
                        <Row className="col-md-8 px-5">
                            <h2>Enter delivery location</h2>
                            <div className="input-group">
                                <Label for="app" className="form-label font-weight-bold px-2 col-4">In appartment/ house: </Label>
                                <CustomInput type="switch" true id="app" name="customSwitch" label="Only Open Orders" />
                            </div>
                            <div className="input-group">
                                <Label for="a" className="form-label font-weight-bold px-2 col-4">In store/ office: </Label>
                                <CustomInput className="col-4" type="switch" id="a" name="customSwitch" label="Only Open Orders" />
                            </div>
                            <div className="input-group">
                                <Label for="b" className="form-label font-weight-bold px-2 col-4">In the stairwell: </Label>
                                <CustomInput className="col-4" type="switch" id="b" name="customSwitch" label="Only Open Orders" />
                            </div>
                            <div className="input-group">
                                <Label for="c" className="form-label font-weight-bold px-2 col-4">In front of the building: </Label>
                                <CustomInput className="col-4" type="switch" id="c" name="customSwitch" label="Only Open Orders" />
                            </div>
                            <div className="input-group">
                                <Label for="d" className="form-label font-weight-bold px-2 col-4">At the roadside: </Label>
                                <CustomInput className="col-4" type="switch" id="d" name="customSwitch" label="Only Open Orders" />
                            </div>
                            <div className="input-group">
                                <Label for="e" className="form-label font-weight-bold px-2 col-4">In the garden: </Label>
                                <CustomInput className="col-4" type="switch" id="exampleCustomSwitch" name="customSwitch" label="Only Open Orders" />
                            </div>
                        </Row>
                        <hr />
                        <Row className="col-md-8 px-5">
                            <div className="input-group">
                                <Label for="app" className="form-label font-weight-bold px-2">Contactless pickup possible?</Label>
                                <CustomInput className="col" type="switch" id="exampleCustomSwitch" name="customSwitch" label="Only Open Orders" />
                            </div>
                        </Row>

                        <hr />

                        <h3 className="text-left px-5">Enter delivery schedule</h3>
                        <Row className="col-md-8 px-5">

                            <Col><h6 className="text-left ">Today - 11/08/2021 <br />
                                Select preferred/ suitable timeslots</h6>
                            </Col>
                            <Col><Label for="aa" className="form-label font-weight-bold px-2">Anytime/ as soon as confirmed</Label>
                                <CustomInput className="col" type="switch" id="aa" name="customSwitch" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
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
                                        13.00-14.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        14.00-15.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        16.00-17.00
                                    </button>
                                </div>
                                <div className="row row-cols-3 ml-5">
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        17.00-18.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        18.00-19.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        19.00-20.00
                                    </button>
                                </div>
                                <div className="row row-cols-3 ml-5">
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        20.00-21.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        21.00-22.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        22.00-23.00
                                    </button>
                                </div>
                                <div className="row row-cols-3 ml-5">
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        23.00-24.00
                                    </button>
                                    {/* <button type="button" className="btn btn-outline-secondary m-2">

                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">

                                    </button> */}
                                </div>
                            </Col>

                        </Row>

                        <Row className="col-md-8">
                            <Col><h6 className="text-left ">Tomorrow - 12/08/2021 <br />
                                Select preferred/ suitable timeslots</h6>
                            </Col>

                        </Row>
                        <Row>
                            <Col>
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
                                        13.00-14.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        14.00-15.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        16.00-17.00
                                    </button>
                                </div>
                                <div className="row row-cols-3 ml-5">
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        17.00-18.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        18.00-19.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        19.00-20.00
                                    </button>
                                </div>
                                <div className="row row-cols-3 ml-5">
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        20.00-21.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        21.00-22.00
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        22.00-23.00
                                    </button>
                                </div>
                                <div className="row row-cols-3 ml-5">
                                    <button type="button" className="btn btn-outline-secondary m-2">
                                        23.00-24.00
                                    </button>
                                    {/* <button type="button" className="btn btn-outline-secondary m-2">

                                    </button>
                                    <button type="button" className="btn btn-outline-secondary m-2">

                                    </button> */}
                                </div>
                            </Col>

                        </Row>
                        <hr />
                        <Row className="col-md-6 px-5">
                            <Col>
                                <h3 className="text-left ">Enter Pickup Schedule</h3>
                                <h6 className="text-left ">Fixed date & time</h6>
                                <p className="text-left text-muted">For fixed scheduling there should higher fees be
                                    considered</p>
                            </Col>
                            <div>
                                <Row><Col className="col-md-3">Enter Date </Col><Col className="col-md-2"></Col><Col><Input type="text" value="" placeholder="" name="text" /></Col></Row>

                                <Row><Col className="col-md-3">Enter Timeslot </Col><Col className="col-md-2"><Label>from</Label></Col><Col><Input type="text" value="" placeholder="" name="text" /></Col></Row>
                                <Row><Col className="col-md-3"></Col><Col className="col-md-2"><Label>to</Label></Col><Col ><Input type="text" value="" placeholder="" name="text" /></Col></Row>
                            </div>
                        </Row>
                        <hr />
                        <Row className="col-md-6 px-5">
                            <div>
                                <h3 className="text-left ">Supplementary Services</h3>

                            </div>
                            <div>

                                <Row><Label for="dis" className="form-label font-weight-bold px-2">Disassembly</Label>
                                    <CustomInput className="col" type="switch" id="dis" name="customSwitch" />
                                </Row>
                                <Row><Label for="ass" className="form-label font-weight-bold px-2">Assembly</Label>
                                    <CustomInput className="col" type="switch" id="ass" name="customSwitch" />
                                </Row>
                            </div>
                        </Row>
                        <hr />
                        <Row className="col-md-8 px-5">
                            <div>
                                <h3 className="text-left ">General informations</h3>
                            </div>
                            <div className="col-md-12 px-5">
                                <Row>
                                    <Col><Label for="otitle" className=" form-label font-weight-bold px-2">Title of your order</Label></Col>
                                    <Col><Input bsSize="md" className="col" type="textarea" multiple id="otitle" name="text" placeholder="Enter title of your order here" /></Col>
                                </Row>
                                <Row>
                                    <Col><Label for="desc/det" className="form-label font-weight-bold px-2">Description/ details</Label></Col>
                                    <Col> <Input bsSize="md" className="col" type="textarea" multiple id="desc/det" name="text" placeholder="Enter descrption text here - e.g. ring at Ms. Mullers
                                        door, heavy goods, measures, pickup at ramp of
                                        office etc.
                                        "/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6"><Label className="form-label font-weight-bold px-2">Select required vehicle size</Label></Col>
                                    <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="S" inline />

                                    <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="M" inline />

                                    <CustomInput type="radio" id="exampleCustomRadio3" label="L" inline />

                                    <CustomInput type="radio" id="exampleCustomRadio4" label="XL" htmlFor="exampleCustomRadio4_X" inline />
                                </Row>

                            </div>
                        </Row>
                        <hr />
                        <h3 className="text-left px-5">Amount of payment</h3><br />
                        <Row className="col-md-12 px-5">
                            <div className="col-md-8 px-5">
                                <Row>
                                    <Col><h5 className="font-weight-bold">Recommended payment</h5>
                                        <p className="font-italic">Based on your entered order details.</p>
                                    </Col>
                                    <Col>
                                        <Button type="button" color="primary" size="lg" className="text-center">50 CHF</Button>
                                    </Col>

                                </Row>
                                <hr />
                                <Row>
                                    <Col>
                                        <h5 className="font-weight-bold">Enter your payment</h5>
                                        <p className="font-italic">Note: a service fee is charged from the specified ___ CHF
                                            amount for processing on cahuu platform.
                                        </p>
                                    </Col>
                                    <Col><Button type="button" color="primary" size="lg" className="text-center">___ CHF</Button></Col>
                                </Row>
                            </div>
                        </Row>
                        <hr />
                        <Row className="col-md-12 justify-content-end">
                            <Button type="button" color="primary" size="lg" className="text-center">Confirm to place order</Button>
                        </Row>
                        <hr />
                    </Card>

                </div>

            </div >
        </Page >
    );

};


export default CreateOrders;

