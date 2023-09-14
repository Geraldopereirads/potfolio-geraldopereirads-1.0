import styled, { css } from "styled-components";
import { CustomComponentProps } from "./@types";

export const ContainerMenuMobile  = styled.section`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(27, 27, 27, 27);
  background: linear-gradient(34deg, rgba(214,205,42, 0.95)0%, rgba(27, 27, 27, 0.95) 55%);

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);

  transition: .5s;

  > svg {
    position: absolute;
    top: 1rem;
    left: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: .7s;

  }

  a{
    border-bottom: solid 1px transparent;
    font-size: 1.5rem;
  }


  a:hover{
    border-bottom: solid 1px var(--primary-color);
  }


  ${({ menuVisible }: CustomComponentProps) =>
    menuVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      > svg {
        transform: rotate(0deg);
      }

      nav {
        transform: scale(1);
      }
    `}

`;
