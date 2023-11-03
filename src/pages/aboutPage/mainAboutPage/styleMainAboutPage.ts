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

    z-index: 1;
  }

  p {
    line-height: 150%;
    font-weight: 500;

    font-size: 1.2rem;

    max-width: 90%;
  }

  @media (min-width: 400px) {
    p {
      line-height: 170%;
      font-size: 1.2rem;
    }
  }

  @media (min-width: 500px) {
    p {
      line-height: 170%;
      font-size: 1.3rem;
    }
  }

  @media (min-width: 900px) {
    p {
      line-height: 170%;
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1200px) {
    p {
      line-height: 200%;
    }
    img {
      width: 200px;
    }
  }
`;

export const StyleDivMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  padding: 50px 0px 50px 0px;
`;
