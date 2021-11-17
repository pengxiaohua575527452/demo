/**
 * 独立组件 - 导航按钮
 */
import $Styles from "./index.module.scss";
import { NavLink } from "react-router-dom";           

export default function NavButton(props){

    let _class  = `${$Styles.button} ${$Styles[props.type]}`
    
    return(
        <NavLink
            className={_class}
            to={props.path}
            activeClassName={$Styles.active}
        >
            {props.label || "按钮"}
        </NavLink>
    )
}