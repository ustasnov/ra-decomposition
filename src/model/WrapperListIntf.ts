import { WrapperIntf } from "./WrapperIntf";
import { MenuIntf } from "./MenuIntf";

export interface WrapperListIntf {
  id: number,
  listtype: string;
  title?: string;
  titlelink?: string;
  menu?: MenuIntf;
  date?: string;
  data: WrapperIntf[];
  icon?: string;
}