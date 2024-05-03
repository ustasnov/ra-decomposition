/**
 * Компонент для создания разметки пункта меню.
 */

import { MenuItemIntf } from "../../model/MenuItemIntf";
import "./MenuItem.css";

export default function MenuItem(props: MenuItemIntf) {
  const { menutype, link, title, content } = props;

  return (
    <li className={"menu-item-" + menutype}>
      <a className={"menu-item-link menu-item-link-" + menutype} href={link ? link : "#"}>
        {title && <div className={"menu-item-title-" + menutype}>{title}</div>}
        {content && <div className={"menu-item-content-" + menutype}>{content}</div>}
      </a>
    </li>
  )
}