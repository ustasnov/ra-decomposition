/**
 * Универсальный компонент для создания разметки блока, который может содержать
 * иконку, заголовок и текстовый контент.
 */

import { WrapperIntf } from "../../model/WrapperIntf";
import WrapperBody from "../wrapperbody/WrapperBody"
import "./Wrapper.css";

export default function Wrapper(props: WrapperIntf) {
  const { wrappertype, link } = props;

  return (
    <div className={"wrapper wrapper-" + wrappertype}>
      <a className="wrapper-link" href={link ? link : "#"}>
        <WrapperBody {...props} />
      </a>
    </div>
  )
}
