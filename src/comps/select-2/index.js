import React from "react";
import styles from "./index.module.scss";
import PropTypes from "prop-types"
import {optionItem} from "./prop-types";

let SelectHead = React.lazy(() => import('./select-head'));
let SelectOptions = React.lazy(() => import('./select-options'));

export default function Select({options, defaultSelectList}){

    const [state, setState] = React.useState({
        isOpen: false,
        selectedList: defaultSelectList,
        options,
    })

    // 切换选项 open close 状态
    function onToggle(e){
        setState(state =>({...state, isOpen : !state.isOpen}))
    }

    // 删除选中的值
    const delSelectedListItem = React.useCallback(index => {
        let t = state.selectedList;
        t.splice(index, 1)
        setState(state => ({...state, selectedList: [...t]}))
    }, [state.selectedList])

    // 点击选项
    const onClickOption = React.useCallback((id) => {
        let index = state.selectedList.findIndex(item => item.id === id)
        if(!~index){
            let o = state.options.find(option => option.id === id)
            setState(state => ({...state, selectedList : [...state.selectedList, o]}))
        }else{
            delSelectedListItem(index)
        }
    },[state.selectedList, state.options, delSelectedListItem])

    // 点击选中对象
    const onCancel = React.useCallback(id => {
        let index = state.selectedList.findIndex(item => item.id === id)
        delSelectedListItem(index)
    }, [state.selectedList, delSelectedListItem])

    return(
        <>
            {/* select 容器 */}
            <div className={styles.container_layout}>
                {/* 选中内容 容器 */}
                <SelectHead 
                    isOpen={state.isOpen} 
                    onToggle={onToggle}
                    selectedList={state.selectedList}
                    onCancel={onCancel}
                />

                {/* select 选项 容器 */}
                <SelectOptions 
                    options={options}
                    onClick={onClickOption} 
                    selectedList={state.selectedList}
                    isOpen={state.isOpen}   
                />
            </div>
        </>
    )
}

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape(optionItem)),
    defaultSelectList: PropTypes.arrayOf(PropTypes.exact(optionItem))
}