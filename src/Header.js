import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { FormControl, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const [value, setValue] = useState("");

  const setParams = () => {
    let params = new URLSearchParams(window.location.search);
    params.set("query", value);
    params = params.toString();

    console.log(params);
  };
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">MovieDB</Navbar.Brand>
        <Form inline>
          <FormControl
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search"
            className="mr-sm-2"
          />
          <Link to={`/search?query=${value}`}>
            {" "}
            <Button variant="outline-info" onClick={setParams}>
              Search
            </Button>
          </Link>
        </Form>
      </Navbar>
    </div>
  );
}

export default Header;
