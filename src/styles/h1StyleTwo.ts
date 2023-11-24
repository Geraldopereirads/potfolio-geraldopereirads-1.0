import styled from "styled-components";

export const StyleH1Two = styled.h1`
  background-color: var(--primary-color);
  border-radius: 5px;

  height: 45px;
  width: 180px;
  margin: 50px auto 0px auto;

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
