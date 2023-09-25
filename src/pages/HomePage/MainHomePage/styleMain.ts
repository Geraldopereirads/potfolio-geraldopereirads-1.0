import styled from "styled-components";

export const StyleMainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 50px;
  padding-bottom: 30px;

  h1 {
    color: var(--text-clarified);
    max-width: 90%;
    font-size: 2.3rem;
    padding-left: 10px;
    line-height: 120%;

    small {
      font-size: 1rem;
      color: var(--text-clarified);
    }
  }

  h2 {
    font-size: 1rem;
    color: var(--text-clarified);
    padding-left: 10px;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-left: 10px;
    background-color: var(--primary-color);

    border-radius: 8px;

    width: 215px;
    height: 40px;

    color: var(--text-dark);
    font-weight: bold;
  }

  img {
    width: 100%;
    margin: 0 auto;
  }

  @media (min-width: 430px) {
    h1 {
      font-size: 2.5rem;
      line-height: 125%;
    }

    h1 small {
      font-size: 1.2rem;
    }

    h2 {
      font-size: 1.2rem;
      line-height: 125%;
    }

    img {
      width: 80%;
    }
  }

  @media (min-width: 500px) {
    img {
      width: 70%;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: center;

    h1 {
      font-size: 2.5rem;
    }

    h1 small {
      font-size: 1rem;
    }

    h2 {
      font-size: 1rem;
    }

    img {
      width: 50%;
    }
  }

  @media (min-width: 700px) {
    padding-top: 30px;

    h1 {
      font-size: 2.5rem;
    }

    h1 small {
      font-size: 1rem;
    }

    h2 {
      font-size: 1rem;
    }

    img {
      width: 52%;
    }
  }

  @media (min-width: 800px) {
    h1 {
      font-size: 2.5rem;
    }
    h1 small {
      font-size: 1.5rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1000px) {
    gap: 150px;

    img {
      width: 40%;
    }
  }

  @media (min-width: 1200px) {
    padding-top: 100px;
    gap: 220px;

    img {
      width: 40%;
    }
  }
  @media (min-width: 1400px) {
    padding-top: 100px;
    gap: 300px;

    img {
      width: 34%;
    }
  }
`;

export const StyleDivMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 76%;

  a:hover {
    background-color: var(--title-nav);
  }

  @media (min-width: 400px) {
    max-width: 89%;
  }

  @media (min-width: 500px) {
    max-width: 100%;
  }

  @media (min-width: 600px) {
    max-width: 47%;
  }

  @media (min-width: 700px) {
    padding-left: 10px;
  }

  @media (min-width: 1000px) {
    max-width: 32%;
  }

  @media (min-width: 1200px) {
    max-width: 40%;
  }

  @media (min-width: 1400px) {
    max-width: 32%;
  }
`;
