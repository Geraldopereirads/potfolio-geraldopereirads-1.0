import styled from "styled-components";

export const StyleDivListMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 100%;

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding-top: 50px;
  }
`;

export const StyleDivListMainTittle1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 30px 0px 0px 0px;

  h2 {
    font-size: 2rem;
  }

  small {
    font-size: 1rem;
  }

  @media (min-width: 600px) {
    padding: 50px 0px 0px 0px;

    h2 {
      font-size: 2.2rem;
    }

    small {
      font-size: 1.2rem;
    }
  }
`;

export const StyleDivListMainTittle2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 30px 0px 0px 0px;

  h2 {
    font-size: 2rem;
  }

  small {
    font-size: 1rem;
  }

  @media (min-width: 600px) {
    h2 {
      font-size: 2.2rem;
    }

    small {
      font-size: 1.2rem;
    }
  }
`;
