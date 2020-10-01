import React from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { ProjectConsumer } from "../context";
import logo from "../images/logo.png";

export default function Navbar() {
    return (
        <ProjectConsumer>
            {value => {
                 const { handleSidebar } = value;
                return (
                    <NavWrapper>
                        <div className="nav-center">
                            <FaBars className="nav-icon" onClick={handleSidebar} />
                            <img src={logo} style={{height: "60px", width: "800px"}} alt="tech store logo" />
                            <div className="nav-cart">
                            </div>
                        </div>
                    </NavWrapper>
                );
            }}
        </ProjectConsumer>
    );
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    top: -8px;
    right: -8px;
    padding: 0 5px;
    border-radius: 50%;
  }
`;
