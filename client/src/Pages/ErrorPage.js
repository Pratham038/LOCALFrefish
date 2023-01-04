
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 2rem;;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .btn {
    background-color: #333333;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
  }
`;

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <h1>An Error Occured</h1>
      <p>Sorry, something went wrong. Please try again later.</p>
      <Link to="/" className="btn">
        Go Back
      </Link>
    </ErrorContainer>
  );
};

export default ErrorPage;
