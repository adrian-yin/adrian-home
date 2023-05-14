import { useEffect, useState } from "react"
import styles from './menu.module.scss';
import { LIGHT_MODE, DARK_MODE } from "@/configs/themes";

function Menu({ 
  menuItems,
  themeName,
  selectCallBack 
}: { 
  menuItems: Array<{
    name: string,
    label: string,
    default: boolean
  }>,
  themeName: string,
  selectCallBack: Function
}) {

  const [selectedItem, setSelectedItem]: [string, Function] = useState('');

  useEffect(() => {
    for (let item of menuItems) {
      if (item.default) {
        setSelectedItem(item.name);
        break;
      }
    }
  }, [menuItems]);

  function handleClickMenuItem(itemName: string) {
    setSelectedItem(itemName);
    selectCallBack(itemName);
  }

  const menuListItems = menuItems.map((item) => 
    <li
      key={item.name}
      className={item.name === selectedItem ? 'selected' : ''}
      onClick={() => { handleClickMenuItem(item.name) }}
    >
      {item.label}
    </li>
  );

  return (
    <div className={styles.menuContainer}>
      <menu className={`menu ${themeName}`}>
          {menuListItems}
      </menu>
    </div>
  );
}

export default Menu;