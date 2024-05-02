import { SearchIntf } from "../../model/SearchIntf";
import "./Search.css";

export default function Search(props: SearchIntf) {
  const { logo, onSubmitHandler } = props;

  return (
    <div className="search">
      <div className="logo" 
        style={{ backgroundImage: "url(" + logo + ")" }}>
      </div>
      <form className="search-form" onSubmit={onSubmitHandler}>
        <input className="search-input" name="input-field" type="search"></input>
        <button className="submit-btn" type="submit" name="submit-btn">Найти</button>
      </form>
    </div>
  )
}