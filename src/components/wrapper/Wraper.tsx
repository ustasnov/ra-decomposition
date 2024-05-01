import { WraperIntf } from "../../model/WraperIntf";
import WraperBody from "../wraperbody/WraperBody"
import "./Wraper.css";

export default function Wraper(props: WraperIntf) {
  const { wrapertype, link } = props;

  return (
    <div className={"wraper-" + wrapertype}>
      <a className="wraper-link" href={link ? link : "#"}>
        <WraperBody {...props} />
      </a>
    </div>
  )
};
