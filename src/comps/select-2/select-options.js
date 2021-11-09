import React from 'react';
import PropTypes from "prop-types";
import styles from "./select-options.module.scss";
import { optionItem } from './prop-types';

const SelectOptionsItem = React.lazy(() => import('./select-options-item'))
 
export default function SelectOptions({
    options: propsOptions,
    onClick: propsOnClick, 
    maxSize, 
    selectedList, 
    isOpen
}){
    const onClick = React.useCallback((id) => {
        propsOnClick(id)
    }, [propsOnClick])

    const options = React.useMemo(() => {
        return propsOptions.map(item => {
            let selected = ~(selectedList.findIndex(selected => selected.id  === item.id)) ? true : false
            return <SelectOptionsItem 
                        key={item.id} 
                        id={item.id} 
                        label={item.label}
                        selected={selected} 
                        onClick={onClick}    
                    />
        })
    }, [propsOptions, onClick, selectedList])

    const height = React.useMemo(() => {
        return (isOpen ? (maxSize ? +maxSize : 5) * 28 : 0 ) + "px"
    },[maxSize, isOpen])

    const _class = React.useMemo(() => {
        return isOpen ? `${styles.options_content_container_layout} ${styles.active}` : `${styles.options_content_container_layout}`
    }, [isOpen])

    return(
        <div className={styles.options_container_layout}>
            <div 
                className={_class}
                style= {{
                    height: height,
                }}    
            >
                {options}
            </div>
        </div>
    )
}
 
SelectOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.exact(optionItem)).isRequired,
    onClick: PropTypes.func.isRequired,
    maxSize: PropTypes.number,
    selectedList: PropTypes.arrayOf(PropTypes.exact(optionItem)).isRequired,
    isOpen: PropTypes.bool.isRequired
}

