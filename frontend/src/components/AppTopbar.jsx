// src/layout/MainLayout.jsx
import React from "react";
import AppMenu from "../components/AppMenu";
import AppTopbar from "../components/AppTopbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex">
      <AppMenu />
      <div className="flex flex-col flex-1">
        <AppTopbar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
