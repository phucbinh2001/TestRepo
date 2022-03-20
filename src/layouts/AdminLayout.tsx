import React, { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { NavbarComponent } from "./components/Navbar";
import "./styles/AdminLayout.scss";

export const AdminLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [siteLayoutMarginLeft, setSiteLayoutMarginLeft] = useState(200);
  const [selectedKey, setSelectedKey] = useState("1");

  const toggle = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <>
      <NavbarComponent />
      <Outlet />
      <Footer />
    </>
  );
};
