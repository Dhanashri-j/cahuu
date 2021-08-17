import Avatar from 'components/Avatar';
import { UserCard } from 'components/Card';
import Notifications from 'components/Notifications';
import SearchInput from 'components/SearchInput';
// import { notificationsData } from 'demos/header';
import withBadge from 'hocs/withBadge';
import logo200Image from 'assets/img/logo/306-e1582146303864.png';
import React from 'react';
import SourceLink from 'components/SourceLink';
import {
  MdClearAll, MdExitToApp, MdHelp, MdInsertChart, MdMessage, MdNotificationsActive, MdNotificationsNone,
  MdPersonPin, MdSettingsApplications, MdHome, MdStorage, MdAddToPhotos, MdMoveToInbox,
} from 'react-icons/md';
import {
  Button, ListGroup, ListGroupItem, NavbarToggler, Nav, Navbar,
  NavItem, NavLink, NavbarBrand, Popover, PopoverBody, Collapse,
} from 'reactstrap';
import bn from 'utils/bemnames';
import ButtonDropdown from 'reactstrap/lib/ButtonDropdown';

const bem = bn.create('header');
const sidebarBackground = {
  //  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
const MdNotificationsActiveWithBadge = withBadge({
  size: 'md',
  color: 'primary',
  style: {
    top: -10,
    right: -10,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  children: <small>5</small>,
})(MdNotificationsActive);

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenNotificationPopover: false,
      isNotificationConfirmed: false,
      isOpenUserCardPopover: false,
    };
  }
  toggleNotificationPopover() {
    this.setState({
      isOpenNotificationPopover: !this.state.isOpenNotificationPopover,
    });

    if (!this.state.isNotificationConfirmed) {
      this.setState({ isNotificationConfirmed: true });
    }
  }

  toggleUserCardPopover() {
    this.setState({
      isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
    });
  }

  handleSidebarControlButton(e) {
    e.preventDefault();
    e.stopPropagation();

    // document.querySelector('.cr-header').classList.toggle('cr-header--open');
  }


  render() {
    const { isNotificationConfirmed, collapsed, setCollapsed } = this.state;

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
      <div >
        <Navbar expand="md" fixed="top" className="cr-header navbar-expand-lg" >

          <NavbarBrand navbar className="mr-2 d-sm d-xs d-md-none d-lg-none" outline onClick={this.handleSidebarControlButton}>
            <SourceLink>
              <img
                src={logo200Image}
                width="180"
                height="40"
                className="pr-2"
                alt=""
              />
            </SourceLink>

            {/* <Button navbar className="mr-2 d-sm d-xs d-md-none d-lg-none" outline onClick={this.handleSidebarControlButton}>
              <MdClearAll size={12} />
            </Button> */}

          </NavbarBrand>

          <NavbarToggler onClick={toggleNavbar ? false : true} className="mr-2" />


          <Nav navbar className="hidden-xs hidden-sm visible-md-block visible-lg-block">
            <SearchInput />
          </Nav>
          <Collapse isOpen={false} navbar className={bem.e('nav-right collapse navbar-collapse')} >
            <Nav className={bem.e('nav-right')} navbar size="22">
              <NavItem >
                <NavLink href="/" className="headerCol">
                  <MdHome
                    size="18"
                  /> &nbsp;Home</NavLink>
              </NavItem>
              <NavItem >
                <NavLink href="/orders" className="headerCol">
                  <MdStorage
                    size="18"
                  /> &nbsp;Orders</NavLink>
              </NavItem>
              <NavItem >
                <NavLink href="/createOrder" className="headerCol">
                  <MdAddToPhotos
                    size="18"
                  /> &nbsp;Create</NavLink>
              </NavItem>
              <NavItem >
                <NavLink href="/myOrders" className="headerCol">
                  <MdMoveToInbox
                    size="18"
                  /> &nbsp;My Orders</NavLink>
              </NavItem>
              {/* <NavItem >
                <Button href="/support" color="primary">
                  Support</Button>
              </NavItem> */}
            </Nav>
          </Collapse>


          <Nav navbar className={bem.e('nav-right')}>
            <NavItem className="d-inline-flex">
              <NavLink id="Popover1" className="position-relative">
                {isNotificationConfirmed ? (
                  <MdNotificationsNone
                    size={25}
                    className="text-secondary can-click"
                    onClick={this.toggleNotificationPopover}
                  />
                ) : (
                  null
                  // <MdNotificationsActiveWithBadge
                  //   size={25}
                  //   className="text-secondary can-click animated swing infinite"
                  //   onClick={this.toggleNotificationPopover}
                  // />
                )}
              </NavLink>
              <Popover
                placement="bottom"
                isOpen={this.state.isOpenNotificationPopover}
                toggle={this.toggleNotificationPopover}
                target="Popover1"
              >
                <PopoverBody>
                  <Notifications notificationsData={[]} />
                </PopoverBody>
              </Popover>
            </NavItem>

            <NavItem>
              <NavLink id="Popover2">
                <Avatar
                  onClick={this.toggleUserCardPopover}
                  className="can-click"
                />
              </NavLink>
              <Popover
                placement="bottom-end"
                isOpen={this.state.isOpenUserCardPopover}
                toggle={this.toggleUserCardPopover}
                target="Popover2"
                className="p-0 border-0"
                style={{ minWidth: 250 }}
              >
                <PopoverBody className="p-0 border-light">
                  <UserCard
                    title="Cahuu"
                    // subtitle="jane@jane.com"
                    // text="Last updated 3 mins ago"
                    className="border-light"
                  >
                    <ListGroup flush>
                      <ListGroupItem tag="button" action className="border-light">
                        <MdPersonPin /> Edit Profile
                      </ListGroupItem>
                      <ListGroupItem tag="button" action className="border-light">
                        <MdInsertChart /> Statistics
                      </ListGroupItem>
                      <ListGroupItem tag="button" action className="border-light">
                        <MdMessage /> Payments
                      </ListGroupItem>
                      <ListGroupItem tag="button" action className="border-light">
                        <MdSettingsApplications /> Language
                      </ListGroupItem>
                      <ListGroupItem tag="button" action className="border-light">
                        <MdHelp /> Share With Friends
                      </ListGroupItem>
                      <ListGroupItem tag="button" action className="border-light">
                        <MdHelp /> Terms and Conditions
                      </ListGroupItem>
                      <ListGroupItem tag="button" action className="border-light">
                        <MdHelp /> Privacy Policy
                      </ListGroupItem>
                      <ListGroupItem tag="button" action className="border-light">
                        <MdHelp /> Support
                      </ListGroupItem>
                      <ListGroupItem tag="button" action className="border-light">
                        <MdExitToApp /> Signout
                      </ListGroupItem>
                    </ListGroup>
                  </UserCard>
                </PopoverBody>
              </Popover>
            </NavItem>

          </Nav>
          <nav navbar className={bem.e('nav-right hidden-xs hidden-sm visible-md-block visible-lg-block')}>
            <NavItem className="d-inline-flex ">
              &nbsp;&nbsp;<Button href="/support" color="primary">
                Support</Button>
            </NavItem></nav>
        </Navbar>
      </div >
    );
  }
}

export default Header;
// $('.dropdown-toggle').dropdown();