import styled from "styled-components";

export const StyleProjectsList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  h2 {
    color: var(--text-clarified);
  }
  img {
    width: 300px;
  }
`;

export const StyleProjectsListDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
