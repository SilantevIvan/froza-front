import React, { lazy } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import initializeApp from "./app/init";

const Layout = lazy(() => import("./containers/Layout"));

initializeApp();

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Layout />} />
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </Router>
    </>
  );
}
