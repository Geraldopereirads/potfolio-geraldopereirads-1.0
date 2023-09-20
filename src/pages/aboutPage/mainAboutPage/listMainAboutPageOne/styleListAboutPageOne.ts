import styled from "styled-components";

export const StyleListAboutPage = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-weight: bold;

  @media (max-width: 350px) {
    font-size: 0.875rem;
  }

  @media (min-width: 400px) {
    gap: 26px;

    li {
      font-size: 1rem;
    }
  }
  @media (min-width: 450px) {
    gap: 15px;
    li {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 500px) {
    li {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 600px) {
    gap: 40px;
  }

  @media (min-width: 700px) {
    gap: 45px;

    li {
      font-size: 1.8rem;
    }
  }

  @media (min-width: 850px) {
    gap: 50px;
  }
`;
