import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import "./style.css";
import UnopDropdown from "unop-react-dropdown";
import Icon from './search.svg';
import style from './style.css';

export default () => {
  const [open, setOpen] = useState(false);
  const handler = () => {
    setOpen(!open);
  };
  // Change props and see effect
  return (
    <UnopDropdown
      onAppear={handler}
      onDisappearStart={handler}
      trigger={<button className="AnimatedDropdownButton"><img src={Icon} alt="halo" /></button>}
      delay={300}
      align="CENTER"
      hover
    >
      <div
        className={`AnimatedDropdownStyles openAnimation${
          !open ? " closeAnimation" : ""
        }`}
      >
        <Form className="search">
                <Form.Control
                    type="search here"
                    placeholder="  Search here"
                    aria-label="Search"
                    className="rounded"
                />
            </Form>
      </div>
    </UnopDropdown>
  );
};