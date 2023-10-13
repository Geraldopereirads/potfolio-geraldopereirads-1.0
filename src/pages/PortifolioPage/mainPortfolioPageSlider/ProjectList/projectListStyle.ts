import styled from "styled-components";

export const ProjectListStyleLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;

  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
  a {
    cursor: pointer;
  }
`;

export const ProjectListStyleDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 150px;

  a {
    cursor: pointer;
  }

  @media (min-width: 700px) {
    gap: 20px;
  }
`;
