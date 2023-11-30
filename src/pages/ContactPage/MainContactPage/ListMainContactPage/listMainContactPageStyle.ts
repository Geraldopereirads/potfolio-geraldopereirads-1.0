import styled from "styled-components";

export const ListMainContactStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 50px;

  gap: 40px;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 15px;

    color: var(--title-nav);
    font-size: 1.3rem;
    font-weight: bold;
  }
`;

export const ListMainContactStyleDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  p {
    color: var(--title-nav);
    font-size: 1.5rem;
    font-weight: bold;
    max-width: 90%;
  }

  span {
    color: var(--title-nav);
    font-size: 1.8rem;
    font-weight: bold;
  }

  @media (min-width: 700px) {
    p {
      font-size: 1.8rem;
    }

    span {
      font-size: 2rem;
    }
  }
`;
