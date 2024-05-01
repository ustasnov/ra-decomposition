import { MenuItemIntf } from "./MenuItemIntf";

export interface MenuIntf {
  menutype?: string;
  date?: string;
  items: MenuItemIntf[];
}