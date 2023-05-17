import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
// import About from "./components/About";
import NavBar from "./components/NavBar";
import Order from "./components/Order";
import PageNotFound from "./components/PageNotFound";
import Product from "./components/Product";
import Feature from "./components/Feature";
import New from "./components/New";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import React from "react";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/auth";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <React.Suspense fallback="Loading">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="/order" element={<Order />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/product" element={<Product />}>
          <Route index element={<Feature />} />
          <Route path="feature" element={<Feature />} />
          <Route path="new" element={<New />} />
          <Route />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
