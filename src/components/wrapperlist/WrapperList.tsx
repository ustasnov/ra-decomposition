/**
 * Компонент для создания разметки списка универсальных компонентов,
 * имеющий заголовок.
 */

import { WrapperListIntf } from "../../model/WrapperListIntf";
import { WrapperIntf } from "../../model/WrapperIntf";
import { MenuIntf } from "../../model/MenuIntf";
import WrapperListTitle from "../wrapperlisttitle/WrapperListTitle";
import Wrapper from "../wrapper/Wrapper";
import Menu from "../menu/Menu";
import "./WrapperList.css";

export default function WrapperList(props: WrapperListIntf) {
  const { listtype, data, menu, date, icon } = props;

  return (
    <div className={"wrapper-list wrapper-list-" + listtype}>
      <div className={"wrapper-list-header wrapper-list-header-" + listtype}>
        <WrapperListTitle {...props}>
          {menu && <Menu {...menu as MenuIntf}>
            {date && <div className="newsdate">
              <a className="newsdate-link" href="#">{date}</a>
            </div>}
          </Menu>}
          {icon && <div className="list-icon-container">
            <a className="list-icon-link" href="#">
              <div className={"list-icon list-icon-" + listtype}
                style={{ backgroundImage: "url(" + icon + ")" }}>
              </div>
            </a>
          </div>}
        </WrapperListTitle>
      </div>
      {data.map((el: WrapperIntf) => <Wrapper key={el.id} {...el}></Wrapper>)}
    </div>
  )
}