import { WrapperIntf } from "./WrapperIntf";
import { MenuIntf } from "./MenuIntf";

export interface WrapperListIntf {
  listtype: string;
  title?: string;
  titlelink?: string;
  menu?: MenuIntf;
  date?: string;
  data: WrapperIntf[];
}