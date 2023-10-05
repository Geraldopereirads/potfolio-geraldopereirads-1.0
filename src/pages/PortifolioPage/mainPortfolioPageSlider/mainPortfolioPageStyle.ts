import styled from "styled-components";

export const MainPortfolioPageStyleUl = styled.ul`
  .swiper-wrapper {
    display: flex;
    gap: 20px;
  }

  .swiper-button-prev {
    color: var(--title-nav);
    z-index: 10;
  }

  .swiper-button-next {
    color: var(--title-nav);
    z-index: 10;
  }

  .swiper-pagination-bullet {
    color: var(--title-nav);
    background-color: var(--title-nav);
  }
`;
