import { WrapperIntf } from "../../model/WrapperIntf";
import "./WrapperBody.css";

export default function WrapperBody(props: WrapperIntf) {
  const { wrappertype, icon, title, content } = props;

  return (
    <div className={"wrapper-body-" + wrappertype}>
      {icon &&
        <div className={"wrapper-icon-" + wrappertype}
          style={{ backgroundImage: "url(" + icon + ")" }}>
        </div>
      }
      {title && <div className={"wrapper-title wrapper-title-" + wrappertype}>{title}</div>}
      {content && <div className={"wrapper-content-" + wrappertype}>{content}</div>}
    </div>
  );
}