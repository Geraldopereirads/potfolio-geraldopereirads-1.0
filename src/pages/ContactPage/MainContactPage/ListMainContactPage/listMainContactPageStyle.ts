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
