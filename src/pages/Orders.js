import React from 'react';
import Page from 'components/Page';
import PropTypes from 'prop-types';
import { getColor } from 'utils/colors';
import SearchInput from 'components/SearchInput';
import MapWithBubbles from 'components/MapWithBubbles';
import moment from 'moment';
import { MdTune, MdList, MdViewList, MdSwapVert, MdBurstMode, MdLocationOn, MdDirectionsCar } from 'react-icons/md';
import { GoTasklist } from 'react-icons/go';
import { GrDropbox, GrFilter } from 'react-icons/gr';
import {
    Button, Card, CardGroup, CardDeck, CardBody, CardText, CardImg, Label,
    CardHeader, CardTitle, CardFooter, CardImgOverlay, Col, Row, NavbarToggler,
    Nav, Navbar, NavItem, NavLink, Collapse, UncontrolledDropdown, DropdownToggle,
    DropdownMenu, Dropdown, DropdownItem, CustomInput
} from 'reactstrap';
import bg1Image from 'assets/img/bg/background_1920-9.jpg';

const Orders = props => {
    return (
        <Page
            className=""
            breadcrumbs={[{ name: 'Orders', active: true }]}
        >
            <div className="container">
                <Card>
                    <Navbar expand="md" className="navbar-expand-lg" >
                        <Collapse isOpen={true} navbar className="collapse navbar-collapse" >
                            <Nav navbar size="22">
                                <UncontrolledDropdown nav inNavbar >
                                    <DropdownToggle nav className="d-block">
                                        <Button outline >
                                            <MdSwapVert /> Sort by</Button>
                                    </DropdownToggle>
                                    <DropdownMenu >
                                        <DropdownItem inline>
                                            <Button outline > Nearest</Button>

                                            <Button outline > Newest</Button>
                                        </DropdownItem>
                                        <DropdownItem inline>
                                            <Button outline >Most Expensive</Button>
                                            <Button outline > Cheapest</Button>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>


                                <UncontrolledDropdown nav inNavbar >
                                    <DropdownToggle nav className="d-block">
                                        <Button outline >
                                            <MdLocationOn /> KM-Radius</Button>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <div className="justify-content-center">
                                                <CustomInput type="range" color="black" className="form-range" id="customRange1" /><br />
                                                {/* <Label for="customRange1" className="form-label"></Label> */}
                                                <Button outline>5 KM</Button>
                                            </div>


                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar >
                                    <DropdownToggle nav className="d-block">
                                        <Button outline ><GoTasklist /> Orders Radius</Button>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <div className="form-check form-check-inline">
                                                <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Only Open Orders" />
                                            </div>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>

                                <UncontrolledDropdown nav inNavbar >
                                    <DropdownToggle nav className="d-block">
                                        <Button outline ><GrFilter /> Service Type</Button>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <div className="form-check form-check-inline">
                                                <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Icon1" inline />

                                                <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Icon2" inline />
                                            </div>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar >
                                    <DropdownToggle nav className="d-block">
                                        <Button outline ><MdDirectionsCar /> Vehicle Size</Button>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <CustomInput type="radio" id="exampleCustomRadio" name="customRadio" label="S" inline />

                                            <CustomInput type="radio" id="exampleCustomRadio2" name="customRadio" label="M" inline />

                                            <CustomInput type="radio" id="exampleCustomRadio3" label="L" inline />

                                            <CustomInput type="radio" id="exampleCustomRadio4" label="XL" htmlFor="exampleCustomRadio4_X" inline />
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <UncontrolledDropdown nav inNavbar >
                                    <DropdownToggle nav className="d-block">
                                        <Button outline ><GrDropbox /> Types of Waste</Button>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            <CustomInput type="checkbox" id="exampleCustomInline" label="Glasses" inline />
                                            <CustomInput type="checkbox" id="exampleCustomInline2" label="Aluminium" inline />
                                            <CustomInput type="checkbox" id="exampleCustomInline2" label="Metals" inline />
                                        </DropdownItem>
                                        <DropdownItem>
                                            <CustomInput type="checkbox" id="exampleCustomInline" label="Cooking Oil" inline />
                                            <CustomInput type="checkbox" id="exampleCustomInline2" label="Cardboard" inline />
                                            <CustomInput type="checkbox" id="exampleCustomInline2" label="Paper" inline />
                                        </DropdownItem>
                                        <DropdownItem >
                                            <CustomInput type="checkbox" id="exampleCustomInline" label="Green Waste" inline />
                                            <CustomInput type="checkbox" id="exampleCustomInline2" label="Furniture" inline />
                                            <CustomInput type="checkbox" id="exampleCustomInline2" label="Plastics" inline />
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Card>
                <Card className="input-group">
                    <Col>
                        <SearchInput />
                    </Col>
                    <Col>
                        <Row className="justify-content-end">
                            <Button color="white" type="button" className="btn btn-default"><MdTune
                                size="35" /></Button>
                            <Button color="white" type="button" onClick={props.togglelistChecked} className="btn btn-default"><MdBurstMode
                                size="35" /></Button>
                            <Button color="white" type="button" onClick={props.toggleMapChecked} className="btn btn-default"><MdViewList
                                size="35" /></Button>
                        </Row>
                    </Col>
                </Card>
                <Row className="row-cols-5" className="props.listView === true ? 'd-block' : 'd-none'">
                    <CardDeck >
                        <Card>
                            <CardImg top className="card-img-left"
                                src={bg1Image}
                                style={{ width: '200', height: '200' }} alt="Card image cap" />
                            <CardFooter style={{ backgroundColor: "#2ea392" }}>
                                <CardTitle style={{ color: "#ffffff" }} tag="h5" >50 CHF</CardTitle>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardImg top className="card-img-left"
                                src={bg1Image}
                                style={{ width: '200', height: '200' }} alt="Card image cap" />
                            <CardFooter style={{ backgroundColor: "#2ea392" }}>
                                <CardTitle style={{ color: "#ffffff" }} tag="h5">100 CHF</CardTitle>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardImg top className="card-img-left"
                                src={bg1Image}
                                style={{ width: '200', height: '200' }} alt="Card image cap" />
                            <CardFooter style={{ backgroundColor: "#2ea392" }}>
                                <CardTitle style={{ color: "#ffffff" }} tag="h5">50 CHF</CardTitle>
                            </CardFooter>
                        </Card>
                        <Card color="primary">
                            <CardImg top className="card-img-left"
                                src={bg1Image}
                                style={{ width: '200', height: '200' }} alt="Card image cap" />
                            <CardFooter style={{ backgroundColor: "#2ea392" }}>
                                <CardTitle style={{ color: "#ffffff" }} tag="h5">100 CHF</CardTitle>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardImg top className="card-img-left"
                                src={bg1Image}
                                style={{ width: '200', height: '200' }} alt="Card image cap" />
                            <CardFooter style={{ backgroundColor: "#2ea392" }}>
                                <CardTitle style={{ color: "#ffffff" }} tag="h5">50 CHF</CardTitle>
                            </CardFooter>
                        </Card>
                    </CardDeck><br />
                    <CardDeck>
                        <Card>
                            <CardImg top className="card-img-left"
                                src={bg1Image}
                                style={{ width: '200', height: '200' }} alt="Card image cap" />
                            <CardFooter style={{ backgroundColor: "#2ea392" }}>
                                <CardTitle style={{ color: "#ffffff" }} tag="h5" >50 CHF</CardTitle>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardImg top className="card-img-left"
                                src={bg1Image}
                                style={{ width: '200', height: '200' }} alt="Card image cap" />
                            <CardFooter style={{ backgroundColor: "#2ea392" }}>
                                <CardTitle style={{ color: "#ffffff" }} tag="h5">100 CHF</CardTitle>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardImg top className="card-img-left"
                                src={bg1Image}
                                style={{ width: '200', height: '200' }} alt="Card image cap" />
                            <CardFooter style={{ backgroundColor: "#2ea392" }}>
                                <CardTitle style={{ color: "#ffffff" }} tag="h5">50 CHF</CardTitle>
                            </CardFooter>
                        </Card>
                        <Card color="primary">
                            <CardImg top className="card-img-left"
                                src={bg1Image}
                                style={{ width: '200', height: '200' }} alt="Card image cap" />
                            <CardFooter style={{ backgroundColor: "#2ea392" }}>
                                <CardTitle style={{ color: "#ffffff" }} tag="h5">100 CHF</CardTitle>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardImg top className="card-img-left"
                                src={bg1Image}
                                style={{ width: '200', height: '200' }} alt="Card image cap" />
                            <CardFooter style={{ backgroundColor: "#2ea392" }}>
                                <CardTitle style={{ color: "#ffffff" }} tag="h5">50 CHF</CardTitle>
                            </CardFooter>
                        </Card>
                    </CardDeck><br />
                    <CardDeck>
                        <Card>
                            <CardImg top className="card-img-left"
                                src={bg1Image}
                                style={{ width: '200', height: '200' }} alt="Card image cap" />
                            <CardFooter style={{ backgroundColor: "#2ea392" }}>
                                <CardTitle style={{ color: "#ffffff" }} tag="h5" >50 CHF</CardTitle>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardImg top className="card-img-left"
                                src={bg1Image}
                                style={{ width: '200', height: '200' }} alt="Card image cap" />
                            <CardFooter style={{ backgroundColor: "#2ea392" }}>
                                <CardTitle style={{ color: "#ffffff" }} tag="h5">100 CHF</CardTitle>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardImg top className="card-img-left"
                                src={bg1Image}
                                style={{ width: '200', height: '200' }} alt="Card image cap" />
                            <CardFooter style={{ backgroundColor: "#2ea392" }}>
                                <CardTitle style={{ color: "#ffffff" }} tag="h5">50 CHF</CardTitle>
                            </CardFooter>
                        </Card>
                        <Card color="primary">
                            <CardImg top className="card-img-left"
                                src={bg1Image}
                                style={{ width: '200', height: '200' }} alt="Card image cap" />
                            <CardFooter style={{ backgroundColor: "#2ea392" }}>
                                <CardTitle style={{ color: "#ffffff" }} tag="h5">100 CHF</CardTitle>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardImg top className="card-img-left"
                                src={bg1Image}
                                style={{ width: '200', height: '200' }} alt="Card image cap" />
                            <CardFooter style={{ backgroundColor: "#2ea392" }}>
                                <CardTitle style={{ color: "#ffffff" }} tag="h5">50 CHF</CardTitle>
                            </CardFooter>
                        </Card>
                    </CardDeck>
                </Row>
                <hr />
                <Row style={{ display: props.mapVIew == true ? "none" : "" }}>
                    <Col lg="12" md="12" sm="12" xs="12">
                        <Card inverse className="bg-gradient-primary">
                            <CardHeader className="bg-gradient-primary">
                                Map
                            </CardHeader>
                            <CardBody>
                                <MapWithBubbles />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Page >
    );
};
export default Orders;