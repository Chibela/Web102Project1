import React, { useEffect, useState } from "react";
import OrgCard from "./components/OrgCard";
import "./App.css";

function App() {
  const [orgs, setOrgs] = useState([]);

  // Load orgs.json from public folder
  useEffect(() => {
    fetch("/orgs.json")
      .then((res) => res.json())
      .then((data) => setOrgs(data));
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>GSU Student Organizations & Resources</h1>
        <p>Discover campus groups, ministries, and academic clubs</p>
      </header>

      <div className="card-grid">
        {orgs.map((org, idx) => (
          <OrgCard
            key={idx}
            name={org.name}
            type={org.type}
            desc={org.desc}
            img={org.img}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
