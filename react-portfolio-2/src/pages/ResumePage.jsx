import React from "react";

export default function Resume() {
  return (
    <section>
      <div>
        <h1>Resume</h1>
      </div>
      <div>
        <a href={require("../assets/Resume/Joshua_Mayfield_Resume_OLD.pdf")} download>
          <h4>Download my resume here!</h4>
        </a>
      </div>
    </section>
  );
}