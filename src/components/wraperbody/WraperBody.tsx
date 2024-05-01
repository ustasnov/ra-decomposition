import { WraperIntf } from "../../model/WraperIntf";
import "./WraperBody.css";

export default function WraperBody(props: WraperIntf) {
  const { wrapertype, icon, title, content } = props;

  return (
    <div className={"wraper-body-" + wrapertype }>
      {icon && 
        <div className={"wraper-icon-" + wrapertype}
          style={{backgroundImage: "url("+ icon + ")"}}>
        </div>
      }
      {title && <div className={"wraper-title-" + wrapertype}>{title}</div>}
      {content && <div className={"wraper-content-" + wrapertype}>{content}</div>}
    </div>
  );
}