import styled from "styled-components";

export const StyleHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--header-color);

  height: 70px;
  gap: 70px;

  @media (min-width: 701px) {
    justify-content: space-between;
    padding-left: 10px;
    a {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 900px) {
    gap: 40px;

    a {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1200px) {
    justify-content: space-around;

    gap: 40px;

    a {
      font-size: 1.5rem;
    }
  }
`;

export const StyleDivSociaisHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  padding-right: 50px;
`;

export const StyleNavHeader = styled.nav`
  display: flex;
  gap: 30px;

  a {
    border-bottom: solid 1px transparent;
  }

  a:hover {
    border-bottom: solid 1px var(--primary-color);
  }

  @media (max-width: 700px) {
    display: none;
  }

  @media (min-width: 800px) {
    gap: 50px;
  }

  @media (min-width: 900px) {
    gap: 60px;
  }

  @media (min-width: 1000px) {
    gap: 75px;
  }

  @media (min-width: 1100px) {
    gap: 90px;
  }

  @media (min-width: 1200px) {
    gap: 125px;
  }
  @media (min-width: 1400px) {
    gap: 150px;
  }
`;
export const StyleButtonMenu = styled.span`
  padding-left: 10px;

  @media (min-width: 701px) {
    display: none;
  }
`;
