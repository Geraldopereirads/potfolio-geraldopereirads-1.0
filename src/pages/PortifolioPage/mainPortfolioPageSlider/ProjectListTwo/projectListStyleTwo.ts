import styled from "styled-components";

export const ProjectListStyleLiTwo = styled.li`
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  a {
    cursor: pointer;
  }
`;

export const ProjectListStyleDivTwo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  a {
    cursor: pointer;
  }

  @media (min-width: 700px) {
    gap: 20px;
  }
`;
