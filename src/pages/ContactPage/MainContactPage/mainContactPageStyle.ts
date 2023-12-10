import styled from "styled-components";

export const MainContactPageStyle = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    padding-top: 30px;
    color: var(--title-nav);
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 150%;
    width: 91%;
  }

  @media (min-width: 800px) {
    p {
      width: 80%;
    }
  }

  @media (min-width: 1000px) {
    p {
      width: 70%;
    }
  }

  @media (min-width: 1200px) {
    p {
      width: 60%;
      font-size: 1.4rem;
    }
  }
`;
export const DivMainContactPageIconsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  padding-top: 15px;
  margin: 0 auto;
`;

export const DivMainContactPageStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  p {
    color: var(--title-nav);
    font-size: 1.5rem;
    font-weight: bold;
    width: 91%;
    padding: 20px;
    line-height: 150%;
  }

  span {
    color: var(--title-nav);
    font-size: 1.8rem;
    font-weight: bold;
  }

  @media (min-width: 800px) {
    p {
      width: 85%;
    }
  }

  @media (min-width: 1000px) {
    p {
      width: 77%;
    }
  }
`;
