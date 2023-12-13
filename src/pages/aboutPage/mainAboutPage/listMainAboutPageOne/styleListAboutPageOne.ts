import styled from "styled-components";

export const StyleListAboutPage = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;

  font-weight: bold;

  @media (max-width: 350px) {
    li {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 400px) {
    gap: 26px;

    li {
      font-size: 1rem;
    }
  }
  @media (min-width: 450px) {
    gap: 28px;
    li {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 500px) {
    li {
      font-size: 1.3rem;
    }
  }

  @media (min-width: 600px) {
    gap: 40px;

    li {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 800px) {
    gap: 50px;

    li {
      font-size: 1.7rem;
    }
  }

  @media (min-width: 900px) {
    gap: 60px;

    li {
      font-size: 1.9rem;
    }
  }

  @media (min-width: 1000px) {
    gap: 90px;
  }

  @media (min-width: 1200px) {
    gap: 100px;

    li {
      font-size: 2rem;
    }
  }
`;
