import styled from "styled-components";

export const ProjectListStyleLiTwo = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-bottom: 50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  a {
    cursor: pointer;
  }

  a h2 {
    color: var(--title-nav);
  }
`;

export const ProjectListStyleDivTwo = styled.div`
  width: 100%;
  height: 100%;
  max-height: 225px;
  object-fit: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 30px;
  a {
    cursor: pointer;
  }

  @media (min-width: 700px) {
    gap: 20px;
  }
`;
