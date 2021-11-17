/**
 * 通用 - 头部 - 搜索
 */
import React from "react";
import $Styles from "./index.module.scss";

const SvgSearch = React.lazy(() => import("../../independent-comps/svg/search.js"))
const KeyBoardButton = React.lazy(() => import("../../independent-comps/keyboard-button/index.js"));
const SearchInput = React.lazy(() => import("../../independent-comps/search-input/index.js"));

export default class HeadSearch extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchValue: ""
        }
    
    }

    onClickKeyBoardButton = () => {
        console.log('点击了')
    }

    onChange = (e) => {
        this.setState(state => ({...state, searchValue: e.target.value}))
        console.log('onChange: ', e.target.value)
    }

    render(){
        return(
            <ul className={$Styles.container}>
                <li className={$Styles.icon_container}>
                    <SvgSearch size={20} fillColor={"#aaa"}/>
                </li>
                <li className={$Styles.input_container}>
                    <SearchInput value="" onChange={() => { console.error('还没有设置')}}/>
                </li>
                <li className={$Styles.popup_button_group_contaienr}>
                    <ul className={$Styles.popup_button_group}>
                        <li className={$Styles.popup_button_container}>
                            <KeyBoardButton onClick={this.onClickKeyBoardButton}>Ctr</KeyBoardButton>
                        </li>
                        <li className={$Styles.popup_button_container}>
                            <KeyBoardButton onClick={this.onClickKeyBoardButton}>K</KeyBoardButton>
                        </li>
                    </ul>
                </li>
            </ul>
        )
    }
}