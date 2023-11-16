import styled, { css } from "styled-components";
import { IMenuMobile } from "./@types";

export const ContainerMenuMobile = styled.section<
  Omit<IMenuMobile, "setMenuVisible">
>`
  position: fixed;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(27, 27, 27, 27);
  background: linear-gradient(
    34deg,
    rgba(214, 205, 42, 0.95) 0%,
    rgba(27, 27, 27, 0.95) 55%
  );

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);

  transition: 0.5s;

  > svg {
    position: absolute;
    top: 1rem;
    left: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
  }

  nav {
    z-index: 90;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: 0.7s;
    z-index: 10000;
  }

  a {
    z-index: 10000;
    border-bottom: solid 1px transparent;
    font-size: 1.5rem;
  }

  a:hover {
    z-index: 10000;
    border-bottom: solid 1px var(--primary-color);
  }

  ${({ menuVisible }) =>
    menuVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);
      z-index: 10000;

      > svg {
        transform: rotate(0deg);
        z-index: 10000;
      }

      nav {
        transform: scale(1);
        z-index: 10000;
      }
    `}
`;
