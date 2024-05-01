import { WrapperListIntf } from "../../model/WrapperListIntf";
import { WrapperIntf } from "../../model/WrapperIntf";
import { MenuIntf } from "../../model/MenuIntf";
import WrapperListTitle from "../wrapperlisttitle/WrapperListTitle";
import Wrapper from "../wrapper/Wrapper";
import Menu from "../menu/Menu";
import "./WrapperList.css";


export default function WrapperList(props: WrapperListIntf) {
  const { listtype, data, menu, date } = props;

  return (
    <div className={"wrapper-list-" + listtype}>
      <div className="wrapper-list-header">
        <WrapperListTitle {...props}>
          {menu && <Menu {...menu as MenuIntf}>
            {date && <div className="newsdate">
              <a className="newsdate-link" href="#">{date}</a>
            </div>}
          </Menu>}
        </WrapperListTitle>
      </div>
      {data.map((el: WrapperIntf) => <Wrapper key={el.id} {...el}></Wrapper>)}
    </div>
  )
}