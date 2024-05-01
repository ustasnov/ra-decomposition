import { WrapperIntf } from "../../model/WrapperIntf";
import WrapperBody from "../wrapperbody/WrapperBody"
import "./Wrapper.css";

export default function Wraper(props: WrapperIntf) {
  const { wrappertype, link } = props;

  return (
    <div className={"wrapper-" + wrappertype}>
      <a className="wrapper-link" href={link ? link : "#"}>
        <WrapperBody {...props} />
      </a>
    </div>
  )
}
