import styled from "styled-components";

export const StyleMainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 50px;
  padding: 50px 0px 50px 0px;

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
      width: 90%;
    }
  }

  @media (min-width: 500px) {
    h1 {
      max-width: 75%;
    }
    img {
      width: 80%;
    }
  }

  @media (min-width: 600px) {
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
      width: 70%;
    }
  }

  @media (min-width: 650px) {
    img {
      width: 65%;
    }
  }

  @media (min-width: 699px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
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
      width: 50%;
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

    h1 {
      max-width: 90%;
    }

    img {
      width: 44%;
    }
  }

  @media (min-width: 1100px) {
    img {
      width: 40%;
    }
  }

  @media (min-width: 1200px) {
    gap: 220px;

    h1 {
      font-size: 3rem;
    }

    img {
      width: 40%;
    }
  }
  @media (min-width: 1400px) {
    gap: 300px;

    h1 {
      font-size: 3.5rem;
    }

    img {
      width: 34%;
    }
  }

  @media (min-width: 1600px) {
    gap: 40px;

    h1 {
      font-size: 3.5rem;
    }

    img {
      width: 30%;
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

  @media (min-width: 1000px) {
    max-width: 32%;
  }

  @media (min-width: 1200px) {
    max-width: 40%;
  }

  @media (min-width: 1400px) {
    max-width: 40%;
  }
  @media (min-width: 1600px) {
    max-width: 45%;
  }
`;
