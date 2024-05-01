import { WraperListIntf } from "../../model/WraperListIntf";
import WraperListTitle from "../wraperlisttitle/WraperListTitle";
import "./Wraper.css";

export default function WraperList(props: WraperListIntf) {
  const { listtype, data } = props;

  return (
    <div className={"wraper-list-" + listtype}>
        <div className="wraper-list-header">
            <WraperListTitle {...props}></WraperListTitle>

        </div>
      
    </div>
  )
};