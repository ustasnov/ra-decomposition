import { CardPropsIntf } from "../../model/CardPropsIntf";
import "./CardBody.css";

export default function Body(props: CardPropsIntf) {
  const { title, content, linktext, link } = props;

  return (
    <div className="card-body">
      {title && <h3 className="title">{title}</h3>}
      {content && <div className="content">{content}</div>}
      {linktext && <a className="card-link" href={link ? link : "#"}>{linktext}</a>}
    </div>
  );
}