import WrapperList from "../wrapperlist/WrapperList";
import Wrapper from "../wrapper/Wrapper";
import Menu from "../menu/Menu";
import { WrapperIntf } from "../../model/WrapperIntf";
import { WrapperListIntf } from "../../model/WrapperListIntf";
import { MenuIntf } from "../../model/MenuIntf";
import data from "../../model/data.json";
import "./App.css";


function App() {

  const newsProps = data.news as WrapperListIntf;
  const newsCard = data.newscard as WrapperIntf;
  const exchangerates = data.exchangerates as MenuIntf;
  const mainmenu = data.mainmenu as MenuIntf;

  return (
    <header>
      <div className="tidings-container">
        <div className="news-container">
          <WrapperList {...newsProps}></WrapperList>
          <Wrapper key={newsCard.id} {...newsCard}></Wrapper>
        </div>
        <div className="exchange-rates-container">
          <Menu {...exchangerates}>
            <a className="allrates" href="#">...</a>
          </Menu>
        </div>
      </div>
      <div className="mainmenu">
        <Menu {...mainmenu}></Menu>
      </div>

    </header>
  )
}

export default App
