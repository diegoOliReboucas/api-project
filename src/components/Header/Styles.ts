import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const headerMain = styled.div`
    position: absolute;
    align-self: flex-start;
`;

export const navBarContainer = styled.ul`
      height: 100vh;
      width: 200px;
      display: flex;
      flex-direction: column;
      background-color: rgba(0, 0, 0, .6);
      gap: 5px;
      padding: 0px;
      margin: 0px;
      list-style: none;
      justify-content: center;
      align-items: center;
`;

export const navBarLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-size: 1.2rem;
  color: aliceblue;
  background-color: transparent;
  padding: .5rem 1rem;
  border-radius: 4px;

  &:active{
    color: #aaa;
  }
`;