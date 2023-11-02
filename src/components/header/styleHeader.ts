import styled from "styled-components";

export const StyleHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--header-color);

  box-shadow: 0px 1px 5px 4px;
  height: 70px;
  gap: 70px;

  position: sticky;
  z-index: 5;
  top: 0;

  a {
    font-weight: bold;
  }
  @media (min-width: 700px) {
    justify-content: space-between;
    gap: 50px;

    a {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 900px) {
    gap: 70px;
    a {
      font-size: 1.3rem;
    }
  }

  @media (min-width: 1200px) {
    justify-content: space-between;

    gap: 140px;

    a {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1400px) {
    justify-content: space-around;
  }

  @media (min-width: 2500px) {
    gap: 400px;

    a {
      font-size: 3rem;
    }

    svg {
      width: 50px;
      height: 50px;
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
  padding-left: 15px;

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

  @media (min-width: 1000px) {
    gap: 60px;
  }

  @media (min-width: 1100px) {
    gap: 90px;
  }

  @media (min-width: 1400px) {
    gap: 100px;
  }
`;
export const StyleButtonMenu = styled.span`
  padding-left: 10px;

  @media (min-width: 699px) {
    display: none;
  }
`;
