/**
 * Компонент для создания разметки меню.
 */

import { MenuIntf } from "../../model/MenuIntf";
import MenuItem from "../menuitem/MenuItem";
import "./Menu.css";

export default function Menu(props: React.PropsWithChildren<MenuIntf>) {
  const { children, menutype, items } = props;

  return (
    <nav className={"menu-container-" + menutype}>
      <ul className={"menu menu-" + menutype}>
        {items.map((item) =>
          <MenuItem key={item.id} {...item} />
        )}
      </ul>
      {children}
    </nav>
  )
}