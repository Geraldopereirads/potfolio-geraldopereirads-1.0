import { HTMLAttributes } from "react";

export interface IMenuMobile {
  menuVisible: boolean;
  setMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
}




export interface CustomComponentProps extends Omit<HTMLAttributes<HTMLElement>, "ref"> {
  menuVisible: boolean;
}