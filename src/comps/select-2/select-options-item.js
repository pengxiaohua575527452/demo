import React from 'react';
import PropTypes from "prop-types";
import { optionItem } from "./prop-types";
import styles from "./select-options-item.module.scss";

export default function SelectOptionsItem ({id, label, onClick: propsOnClick,selected}){
    
    const onClick= React.useCallback((e) =>{
        e.stopPropagation()
        propsOnClick(id)
    },[propsOnClick, id])

    const _class = React.useMemo(() => {
        return selected ? `${styles.comp_container} ${styles.active}` : `${styles.comp_container}`
    },[selected])

    return(
        <div 
            className={_class}
            onClick={onClick}    
        >
            {label}
        </div>
    )
}

SelectOptionsItem.propTypes = {
    ...optionItem,
    onClick: PropTypes.func,
    selected: PropTypes.bool
}