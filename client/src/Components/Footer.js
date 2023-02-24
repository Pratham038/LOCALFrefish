import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem 0;
height: 100%;
  .footer-column {
    margin-bottom: 2rem;
  }

  h3 {
    margin-bottom: 1rem;
  }

  a {
    color: white;
  }

  .copyright {
    margin-top: 2rem;
    font-size: 0.8rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-column">
            <h3>Abra Ka </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          </div>
          <div className="col-md-4 footer-column">
            <h3>Contact</h3>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.youtube.com/@netflixanime">Email: Pratham@gmail.com</a>
              </li>
              <li>
                <a href="https://www.youtube.com/@netflixanime">Phone: 555-555-5555</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 footer-column">
            <h3>Follow Us</h3>
            <ul className="list-unstyled social-links">
              <li>
                <a href="https://www.youtube.com/@netflixanime">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <br/>
              <li>
                <a href="https://www.youtube.com/@netflixanime">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <br/>
              <li>
                <a href="https://www.youtube.com/@netflixanime">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Example Licious. All rights
          reserved.
          <br/>
          <Link to="/adminLoginPage">
          admin
        </Link>
        </div>
      </div>
      </footer>
    </FooterContainer>
  );
};

export default Footer;
