import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
const Contact = () => {
  const Wrapper = styled.section`
    padding: 2rem 0 5rem 0;
    text-align: center;
    .main {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .map {
      width: 50%;
    }
    .form {
      width: 50%;
    }
    .int {
      border-radius: 7px;
      background-color: #333;
      font-weight: 600;
      color: white;
      width: 8rem;
      height: 3rem;
    }
    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: blue;
              border: 1px solid blue;
              color: blue;
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  const { user, isAuthenticated } = useAuth0();
  return (
    <Wrapper>
      <h1 className="common-heading">Contact page</h1>
      <div className="main">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15074.957354213058!2d72.94009119272235!3d19.162883978824983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8f2a2463a0b%3A0xf8c25abb49834fe2!2sV.G.%20Vaze%20College%20of%20Arts%2C%20Science%20and%20Commerce%20(Autonomous)!5e0!3m2!1sen!2sin!4v1677243374278!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="form">
          <div className="container">
            <div className="contact-form">
              <form
                action="https://formspree.io/f/xeqdwove"
                method="POST"
                className="contact-inputs"
              >
                <input
                  value={isAuthenticated ? user.name : ""}
                  type="text"
                  placeholder="username"
                  name="username"
                  required
                  autoComplete="off"
                />

                <input
                  value={isAuthenticated ? user.email : ""}
                  type="email"
                  name="Email"
                  placeholder="Email"
                  autoComplete="off"
                  required
                />

                <textarea
                  name="Message"
                  cols="30"
                  rows="10"
                  required
                  autoComplete="off"
                  placeholder="Enter you message"
                ></textarea>

                <input className="int" type="submit" value="SEND" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
