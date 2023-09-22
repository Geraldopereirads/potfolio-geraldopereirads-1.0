import styled from "styled-components";

export const MainTitleListStyleOne = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 50px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  h2 {
    font-weight: bold;
    font-size: 1.6rem;
  }

  small {
    font-weight: bold;
    font-size: 0.85rem;
  }

  @media (min-width: 500px) {
    h2 {
      font-size: 2rem;
    }
    small {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1000px) {
    h2 {
      font-size: 2.7rem;
    }
    small {
      font-size: 1.5rem;
    }
  }
`;

export const StyleListMain = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: space-around;

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 1;
  }
`;
