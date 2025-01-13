import React, { useState } from "react";
import "./App.css";
import TextField from "./components/TextField";
import "h8k-components";

const title = "Text Append";

function App() {
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");

  // Handler for first text field
  const handleFirstTextChange = (event) => {
    setFirstText(event.target.value);
  };

  // Handler for second text field
  const handleSecondTextChange = (event) => {
    setSecondText(event.target.value);
  };

  // Concatenate texts with a space
  const appendedText = `${firstText} ${secondText}`.trim();

  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row align-items-center justify-content-center mt-50">
        <section className="layout-column">
          <div data-testid="first-text">
            <TextField labelText={"First Text"} onChange={handleFirstTextChange} />
          </div>
          <div data-testid="second-text">
            <TextField labelText={"Second Text"} onChange={handleSecondTextChange} />
          </div>
          <label className="mt-50 text-align-center">
            Appended Text is:
          </label>
          <label className="mt-10 finalText" data-testid="final-text">
            {appendedText}
          </label>
        </section>
      </div>
    </div>
  );
}

export default App;
