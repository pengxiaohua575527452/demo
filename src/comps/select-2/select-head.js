import React from 'react'
import styles from "./select-head.module.scss"
import PropTypes from "prop-types";
import { optionItem } from "./prop-types"

const SvgArrowUpFilling  = React.lazy(() => import('../../comps/svg/arrow-up-filling'));
const Tag = React.lazy(() => import("../../comps/select-2/tag.js"))

export default function SelectHead({isOpen, selectedList, onToggle, onCancel}){
    
    // icon 容器样式
    const iconContainerClass = React.useMemo(() =>{
        return isOpen ? `${styles.icon_container} ${styles.icon_container_bottom}` : `${styles.icon_container}`
    }, [isOpen])
 
    // 选中列表标签
    const Tags = React.useMemo(() => {
        return selectedList.map(item => ( 
            <Tag key={item.id} id={item.id} label={item.label} onCancel={onCancel}/>
        ))

    }, [selectedList, onCancel])

    // 容器样式名称
    const _class = React.useMemo(() => {
        return isOpen ? `${styles.select_container_layout} ${styles.active}` : `${styles.select_container_layout}`
    }, [isOpen])

    // 点击事件
    const onClick = React.useCallback((e) => {
        e.stopPropagation()
        onToggle()
    }, [onToggle])
  
    return(
        <div 
            className={_class} 
            onClick={onClick}
        >
            {/* 左侧显示当前选中的值 */}
            <div className={styles.select_values_container_layout}>
                {Tags}
            </div>

            {/* 右侧显示 列表展开状态 */}
            <div className={styles.icon_contaienr_layout}>
                <div className={iconContainerClass}>
                    <SvgArrowUpFilling size={16} fillColor="#ddd"/>
                </div>
            </div>
        </div>
    )
}

SelectHead.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    selectedList: PropTypes.arrayOf(PropTypes.exact(optionItem)).isRequired,
    onToggle: PropTypes.func,
    onCancel: PropTypes.func
}


