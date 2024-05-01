import { WraperListIntf } from "../../model/WraperListIntf";
import "./WraperListTitle.css";

export default function WraperListTitle(props: WraperListIntf) {
  const { listtype, title, titlelink } = props;

  return (
    <div className={"wraper-list-title-" + listtype}>
        <a className="wraper-list-title-link" href={titlelink ? titlelink : "#"}>
            <div className={"list-title-" + listtype}>{title}</div>
        </a>  
    </div>
  );
}