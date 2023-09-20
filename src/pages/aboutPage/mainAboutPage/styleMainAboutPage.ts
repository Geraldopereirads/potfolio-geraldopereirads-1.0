import styled from "styled-components";

export const StyleSobreMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 30px;
  img {
    width: 170px;

    border-radius: 100px;
  }

  p {
    line-height: 135%;
    font-weight: 500;

    font-size: 1.2rem;

    max-width: 95%;
  }

  @media (min-width: 400px) {
    p {
      line-height: 150%;
      font-size: 1.25rem;
    }
  }
  @media (min-width: 450px) {
    p {
      line-height: 150%;
      font-size: 1.3rem;
    }
  }

  @media (min-width: 500px) {
    p {
      line-height: 150%;
      font-size: 1.5rem;
    }
  }

  @media (min-width: 700px) {
    p {
      line-height: 150%;
      font-size: 1.65rem;
    }
  }

  @media (min-width: 900px) {
    p {
      line-height: 170%;
      font-size: 1.8rem;
    }
  }

  @media (min-width: 1300px) {
    gap: 50px;
  }
`;
