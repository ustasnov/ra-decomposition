/**
 * Компонент для создания разметки баннера.
 */

import { BannerIntf } from "../../model/BannerIntf";
import "./Banner.css";

export default function Banner(props: BannerIntf) {
  const { img, link, alt } = props;

  return (
    <div className={"banner"}>
      <a className="banner-link" href={link ? link : "#"}>
        <figure className="banner-figure">
          <img className="banner-img" src={img} alt={alt}></img>
        </figure>
      </a>
    </div >
  )
}
