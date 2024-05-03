/**
 * Компонент для создания разметки заголовка списка универсальных компонентов.
 */

import { WrapperListIntf } from "../../model/WrapperListIntf";
import "./WrapperListTitle.css";

export default function WrapperListTitle(props: React.PropsWithChildren<WrapperListIntf>) {
  const { children, listtype, title, titlelink, data } = props;

  return (
    <div className={"wrapper-list-title wrapper-list-title-" + listtype}>
      <a className="wrapper-list-title-link" href={titlelink ? titlelink : "#"}>
        <div className={"list-title-" + listtype}>{title}</div>
      </a>
      {children}
    </div>
  );
}