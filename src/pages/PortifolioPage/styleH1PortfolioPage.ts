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

    border-radius: 5px;
  }
`;

export const DivportfolioPageLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding-bottom: 50px;

  a {
    background-color: var(--primary-color);
    color: var(--text-dark);
    padding: 20px;
    border-radius: 5px;

    font-weight: bold;
  }
  :hover {
    background-color: var(--title-nav);
  }

  @media (min-width: 400px) {
    flex-direction: row;
    padding-bottom: 100px;
  }

  @media (min-width: 500px) {
    gap: 50px;
  }

  @media (min-width: 600px) {
    gap: 100px;
  }

  @media (min-width: 800px) {
    gap: 150px;
  }

  @media (min-width: 900px) {
    gap: 220px;
  }

  @media (min-width: 1200px) {
    gap: 350px;
  }
`;
