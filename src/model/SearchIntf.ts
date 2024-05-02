import { WrapperIntf } from "./WrapperIntf";

export interface SearchIntf {
  logo: string;
  example?: WrapperIntf;
  onSubmitHandler(event: React.FormEvent): void;
}