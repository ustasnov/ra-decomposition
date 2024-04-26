import { CardPropsIntf } from "../../model/CardPropsIntf";
import CardBody from "../cardbody/CardBody"
import "./Card.css";

export default function Card(props: React.PropsWithChildren<CardPropsIntf>) {
  const { children } = props;

  return (
    <div className="card">
      {children}
      <CardBody {...props} />
    </div>
  )
};
