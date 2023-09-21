import styled from "styled-components";

export const ListMainContactStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 20px;

  li {
    color: var(--title-nav);
    font-size: 1.3rem;
    font-weight: bold;
  }

  @media (min-width: 800px) {
    li {
      font-size: 1.7rem;
    }
  }
`;
