import { useState } from "react";
import style from "./style.module.css";

const SidebarCollapsNav = ({ navList, title }) => {
  const [isCollapse, setisCollapse] = useState(false);

  const HandleCollapse = () => {
    setisCollapse(!isCollapse);
  };

  return (
    <div className={style["accordion"]}>
      <div onClick={HandleCollapse} className={style["top"]}>
        <h2>{title}</h2>
      </div>

      {isCollapse && (
        <ul className={style["navigation"]}>
          <li>All {title} ({navList.length})</li>
          {navList.map((item, i) => {
            return <li key={i}>{item.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default SidebarCollapsNav;
