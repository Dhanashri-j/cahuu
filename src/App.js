import React from "react";
import { STATE_LOGIN, STATE_SIGNUP } from "components/AuthForm";
import GAListener from "components/GAListener";
import { EmptyLayout, LayoutRoute, MainLayout } from "components/Layout";
import PageSpinner from "components/PageSpinner";
import AuthPage from "pages/AuthPage";
import ReveiwCarrier from "./components/ReveiwCarrier";
// import MyOrderDetails from "./components/MyOrderDetails";
import MyOrdersImportantInformation from "./components/MyOrdersImportantInformation";
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';
import { Media } from 'reactstrap';
import history from './history';

import MyOrderDetails from "./components/MyOrderDetails";
import UnsatisfyReview from "./components/UnsatisfyReview";

const AuthModalPage = React.lazy(() => import("pages/AuthModalPage"));
const DashboardPage = React.lazy(() => import("pages/DashboardPage"));
const Orders = React.lazy(() => import("pages/Orders"));
const CreateOrder = React.lazy(() => import("pages/CreateOrder"));
const CreateOrders = React.lazy(() => import("pages/CreateOrders"));
const UploadOrder = React.lazy(() => import("pages/UploadOrder"));
const OrderConfirmed = React.lazy(() => import("components/OrderConfirmed"));
const OrderDetails = React.lazy(() => import("components/OrderDetails"));
const MyOrders = React.lazy(() => import("pages/MyOrders"));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split("/").pop()}`;
};

class App extends React.Component {
  render() {
    return (

      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch history={history}>
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={(props) => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={(props) => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/" component={DashboardPage} />
                {/* <Route exact path="/login-modal" component={AuthModalPage} /> */}
                <Route exact path="/orders" component={Orders} />
                <Route exact path="/createOrder" component={CreateOrder} />
                <Route exact path="/createOrders" component={CreateOrders} />
                <Route exact path="/uploadOrder" component={UploadOrder} />
                <Route exact path="/test" component={OrderConfirmed} />
                <Route exact path="/orderDetails" component={OrderDetails} />
                <Route exact path="/myOrders" component={MyOrders} />
                <Route exact path="/review" component={ReveiwCarrier} />
                <Route
                  exact
                  path="/important-information"
                  component={MyOrdersImportantInformation}
                />
                <Route
                  exact
                  path="/myOrderDetails"
                  component={MyOrderDetails}
                />

                <Route
                  exact
                  path="/unsatisfyReview"
                  component={UnsatisfyReview}
                />
              </React.Suspense>

            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: "xs" };
  }

  if (576 < width && width < 767) {
    return { breakpoint: "sm" };
  }

  if (768 < width && width < 991) {
    return { breakpoint: "md" };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: "lg" };
  }

  if (width > 1200) {
    return { breakpoint: "xl" };
  }

  return { breakpoint: "xs" };
};

export default componentQueries(query)(App);
