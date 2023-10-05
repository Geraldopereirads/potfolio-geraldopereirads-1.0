import styled from "styled-components";

export const H1PortfolioPage = styled.h1`
  background-color: var(--primary-color);

  height: 45px;
  width: 180px;
  margin: 100px auto 100px auto;

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
