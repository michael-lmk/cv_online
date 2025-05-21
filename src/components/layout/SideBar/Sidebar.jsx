import { useState } from "react";
import "./SideBar.css";
import { Button, Offcanvas, OffcanvasBody } from "reactstrap";
import { FaBars } from "react-icons/fa";

const Sidebar = ({ handleRotate }) => {
  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(() => !open);
  };

  return (
    <>
      <div className="sidebar-mobile-diplay">
        <Button
          style={{ position: "absolute", top: "10px", left: "10px", zIndex: 1000 }}
          color=""
          onClick={toggle}>
          <FaBars
            color="white"
            size={"30px"}></FaBars>
        </Button>
        <Offcanvas
          className="sidebar-mobile"
          style={{ width: "180px", backgroundColor: "rgb(41, 43, 49)" }}
          isOpen={open}
          toggle={toggle}>
          <OffcanvasBody>
            <ul>
              <li className={`${active == 1 && "active"}`}>
                <a
                  onClick={() => {
                    handleRotate(0);
                    setActive(1);
                  }}
                  className="nav-item">
                  Home
                </a>
              </li>
              <li className={`${active == 2 && "active"}`}>
                <a
                  onClick={() => {
                    handleRotate(1);
                    setActive(2);
                  }}
                  className="nav-item">
                  About
                </a>
              </li>
              <li className={`${active == 3 && "active"}`}>
                <a
                  // to={"/service"}
                  onClick={() => {
                    handleRotate(2);
                    setActive(3);
                  }}
                  className="nav-item">
                  Skills
                </a>
              </li>
              <li className={`${active == 4 && "active"}`}>
                <a
                  // to={"/contact"}
                  onClick={() => {
                    handleRotate(3);
                    setActive(4);
                  }}
                  className="nav-item">
                  Contact
                </a>
              </li>
            </ul>
          </OffcanvasBody>
        </Offcanvas>
      </div>

      <div className="sidebar">
        <ul>
          <li className={`${active == 1 && "active"}`}>
            <a
              onClick={() => {
                handleRotate(0);
                setActive(1);
              }}
              className="nav-item">
              Home
            </a>
          </li>
          <li className={`${active == 2 && "active"}`}>
            <a
              onClick={() => {
                handleRotate(1);
                setActive(2);
              }}
              className="nav-item">
              About
            </a>
          </li>
          <li className={`${active == 3 && "active"}`}>
            <a
              // to={"/service"}
              onClick={() => {
                handleRotate(2);
                setActive(3);
              }}
              className="nav-item">
              Skills
            </a>
          </li>
          <li className={`${active == 4 && "active"}`}>
            <a
              // to={"/contact"}
              onClick={() => {
                handleRotate(3);
                setActive(4);
              }}
              className="nav-item">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
