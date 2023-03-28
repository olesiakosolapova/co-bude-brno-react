import { useSelector } from "react-redux";
import { NavbarApiResponse } from "../../store/interfaces";
import { StoreStateAll } from "../../store/reducers/interfaces";
import { Link } from "react-router-dom";
import logo from "../../brno-logo.jpg";
import styled from "styled-components";

const Navbar = () => {
  const links: NavbarApiResponse | null = useSelector(
    (state: StoreStateAll) => state.navbar.data
  );
  if (!links || !links.data.items) return null;
  return (
    <NavbarWrapper>
      <section className="navigation">
        <div className="nav-container">
          <LogoLink to="/">
            <img src={logo} alt="Logo" />
          </LogoLink>
          <nav>
            <ul>
              {links?.data.items?.map((link) => (
                <li key={link.name}>
                  <Link to={`${link.uri}`}>{link.name}</Link>
                </li>
              ))}
              <li>
                <Link to="/vyrazte-za-kraskou-a-zviretem-nebo-za-loutkami-vikend-bude-kulturni">
                  Article
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </NavbarWrapper>
  );
};

export default Navbar;

export const NavbarWrapper = styled.div`
  max-height: 80px;
  overflow: hidden;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 10px;

  img {
    height: 50px;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    position: static;
    padding: 0;
    margin-right: auto;
  }
`;
