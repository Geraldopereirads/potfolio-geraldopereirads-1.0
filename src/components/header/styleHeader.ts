import styled from "styled-components";

export const StyleHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--header-color);

  height: 70px;
  gap: 70px;

  position: sticky;
  z-index: 5;
  top: 0;

  @media (min-width: 700px) {
    justify-content: space-between;
    gap: 50px;

    a {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 900px) {
    a {
      font-size: 1.3rem;
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
  padding-left: 10px;

  a {
    border-bottom: solid 1px transparent;
  }

  a:hover {
    border-bottom: solid 1px var(--primary-color);
  }

  @media (max-width: 699px) {
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
    gap: 100px;
  }
  @media (min-width: 1400px) {
    gap: 150px;
  }
`;
export const StyleButtonMenu = styled.span`
  padding-left: 10px;

  @media (min-width: 699px) {
    display: none;
  }
`;
