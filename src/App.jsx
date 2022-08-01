import * as React from "react";
import "./assets/css/style.css";

export default function App() {
  return (
    <div className="main-container">
      <div className="main-frame" id="main-frame">
        <div className="header-bar">
          <div className="title-bar">
            <div className="title">Welcome To Linux UI Form</div>
            <div className="bar-actions">
              <div className="action minimize"></div>
              <div className="action close"></div>
            </div>
          </div>
          <div className="menu-bar">
            <div className="menu">File</div>
            <div className="menu">Edit</div>
            <div className="menu">View</div>
            <div className="menu">Search</div>
            <div className="menu">Terminal</div>
            <div
              className="menu"
              onClick={() => {
                alert(`Type user --help for more information`);
              }}
            >
              Help
            </div>
          </div>
        </div>
        <div className="controller-body">
          <div
            className="controller"
            id="controller"
            onClick={() => {
              document.getElementById("input-text-controller").focus();
            }}
          >
            <InputController />
          </div>
        </div>
      </div>
    </div>
  );
}
/**
 *
 * @param {String} cmd
 */
function parseCommand(cmd) {
  switch (cmd) {
    case "user --help":
      return HelpController();
    default:
      return `<div class="c-ffffff"><pre>Type user --help for more information</pre></div>`;
  }
}

function InputController() {
  /**
   *
   * @param {event} event
   */
  function handleController(event) {
    if (event.key !== "Enter") {
      return false;
    }
    console.log(event.target.value);
    event.preventDefault();
    let newCmd = event.target.value.toString().trim();
    let element = parseCommand(newCmd);
    console.log(element);
    let currentElement = document.getElementById("controller").innerHTML;
    currentElement = currentElement + element + currentElement;
    document.getElementById("controller").innerHTML = currentElement;
    console.log("handle press");
  }

  return (
    <div className="input-controller">
      <div className="input-title">
        <div className="c-3cd509">user@linuxform.com</div>
        <div className="c-ffffff"> &nbsp;: ~ $</div>
      </div>
      <div className="input-actions">
        <input className="input-text-controller" id="input-text-controller" autoFocus={true} onKeyPress={handleController} />
      </div>
    </div>
  );
}
function HelpController() {
  return `<div class="c-ffffff">
  <pre>
Usage: user [options]
  
  Options:

    --login                     For login in system with credential
    --register                  For register in system with some important details
    --help                      additional help

</pre>
</div>`;
}
