import React from "react";
import { Link } from "react-router-dom";
import contributing from "../CONTRIBUTING.md"; // Import the markdown file

const ContributingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-neutral-900">
            <h1>Merhaba</h1>
            <div>
                <p>{contributing}</p> {/* Render the Markdown content */}
            </div>
        </div>
    );
};

export default ContributingPage;
