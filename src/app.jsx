import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SendoProductDetails from "./components/FlashSale/FetchApiProduct/SendoProductDetails";
import SendoProductFather from "./components/FlashSale/FetchApiProduct/SendoProductFather";
import { AuthProvider } from "./contexts/auth-context";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Success from "./pages/Success";
import { ScrollToTop } from "react-router-scroll-to-top";

const App = () => {
  return (
    <Fragment>
      <Router>
        <ScrollToTop>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/product" element={<SendoProductFather />}></Route>
              <Route
                path="/product/:id"
                element={<SendoProductDetails />}
              ></Route>
              <Route exact path="/sign-in" element={<SignInPage />}></Route>
              <Route exact path="/sign-up" element={<SignUpPage />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/checkout" element={<Checkout />}></Route>
              <Route path="/success" element={<Success />}></Route>
            </Routes>
          </AuthProvider>
        </ScrollToTop>
      </Router>
    </Fragment>
  );
};

export default App;
