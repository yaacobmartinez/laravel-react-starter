import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            This is the Dashboard
            <Link to="/"> Go Home</Link>
        </div>
    );
}

export default Dashboard;
