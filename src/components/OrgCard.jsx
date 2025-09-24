import React from "react";
import "./OrgCard.css";

function OrgCard({ name, type, desc, img }) {
  return (
    <div className="card">
      <img src={img} alt={name} className="card-img" />
      <div className="card-body">
        <h2>{name}</h2>
        <p className="org-type">{type}</p>
        <p className="org-desc">{desc}</p>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default OrgCard;
