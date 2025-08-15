// src/pages/Dashboard.jsx
import React from "react";
import { Card } from "primereact/card";
import { Checkbox } from "primereact/checkbox";
        
export default function Dashboard() {
  return (
    <div className="grid">
      <div className="col-12 md:col-6 lg:col-3">
        <Card title="Orders" subTitle="152" className="mb-3"/>
        <Card title="Orders" subTitle="152" className="mb-3"/>
        <Card title="Orders" subTitle="152" className="mb-3"/>
        <Card title="Orders" subTitle="152" className="mb-3"/>
        <Checkbox id="binary" name="binary" value="Binary" onChange={(e) => console.log(e.checked)}></Checkbox>
      </div>
    </div>
  );
}
