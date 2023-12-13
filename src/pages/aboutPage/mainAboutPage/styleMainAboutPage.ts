import styled from "styled-components";

export const StyleSobreMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0 auto;
    padding-top: 50px;
    padding-bottom: 30px;
    font-size: 1.2rem;
    line-height: 150%;
    font-weight: 500;
    max-width: 80%;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  img {
    width: 170px;

    border-radius: 100px;

    z-index: 1;
  }

  @media (min-width: 700px) {
    p {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1200px) {
    img {
      width: 200px;
    }
  }
`;

export const StyleContainerMainOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  padding: 50px 0px 50px 0px;
`;
