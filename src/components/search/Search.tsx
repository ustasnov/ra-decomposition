/**
 * Компонент для создания разметки строки поиска.
 */

import Wrapper from "../wrapper/Wrapper";
import { WrapperIntf } from "../../model/WrapperIntf";
import { SearchIntf } from "../../model/SearchIntf";
import "./Search.css";

export default function Search(props: SearchIntf) {
  const { logo, example, onSubmitHandler } = props;
  const exampleProp = example as WrapperIntf;

  return (
    <div className="search">
      <div className="search-logo-form">
        <div className="logo"
          style={{ backgroundImage: "url(" + logo + ")" }}>
        </div>
        <form className="search-form" onSubmit={onSubmitHandler}>
          <input className="search-input" name="input-field" type="search"></input>
          <button className="submit-btn" type="submit" name="submit-btn">Найти</button>
        </form>
      </div>
      <Wrapper {...exampleProp}></Wrapper>
    </div>
  )
}