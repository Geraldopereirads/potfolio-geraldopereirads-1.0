import styled from "styled-components";

export const MainTitleListStyleOne = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 50px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;

  h2 {
    font-weight: bold;
    font-size: 1.5rem;
  }

  small {
    font-weight: bold;
    font-size: 0.85rem;
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
