import styled from "styled-components";

export const StyleH1Two = styled.h1`
  background-color: var(--primary-color);

  height: 45px;
  width: 180px;
  margin: 0px auto 50px auto;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;

  font-size: 2.2rem;

  @media (min-width: 800px) {
    font-size: 2.5rem;
    padding: 5px;
  }
`;
