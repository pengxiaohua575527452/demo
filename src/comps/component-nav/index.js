/**
 * page - 组件 - 侧边导航
 */
import React from "react";
import $Styles from "./index.module.scss";
import { useHistory, useLocation } from 'react-router-dom';
import { menu } from "./data.js";
import { FROM_COMPONENT_NAV } from "../../assets/js/base-data";

export default function ComponentNav(){
    const history = useHistory()
    const location = useLocation()
    const onClick = React.useCallback((e) => {
        let pathname = location.state?.from === FROM_COMPONENT_NAV 
                        ?  `${e.target.dataset.path}`
                        : `${location.pathname}/${e.target.dataset.path}`
        history.push({
            pathname: pathname,
            state: {
                from: FROM_COMPONENT_NAV,
            } 
        })
    }, [history, location])
    
    return(
        <div className={$Styles.container}>
            <div className={$Styles.title}>组件总览</div>
            {
                menu.map(item => {
                    let _class = item.type === 'title' ? $Styles.menu_title : $Styles.menu_item;
                    return(
                        <div
                            key={item.id} 
                            className={_class}
                            data-path={item.path}
                            onClick={onClick}    
                        >
                            {item.label}
                        </div>
                    )
                })
            }
        </div>
    )
}
