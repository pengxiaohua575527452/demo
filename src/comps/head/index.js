/**
 * 通用 - 头部内容
 */
import React from "react";
import $Styles from "./index.module.scss";
import {menu} from "./data.js";
const HeadSearch = React.lazy(() => import("../head-search/index.js"))
const NavButton = React.lazy(() => import("../../independent-comps/nav-button/index.js"));
const Menu = React.lazy(()=> import("../../independent-comps/svg/menu.js"))
 
export default class Head extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            logoSrc: null
        }
    }

    componentDidMount(){
       this.getLogo()
    }

    getLogo(){
        import("../../assets/image/ant_design_logo.png")
        .then(
            logo => {
                this.setState(state => ({...state, logoSrc: logo.default}))
            },
            err => {
                console.error('error: ', err)
            }
        )
    }

    render(){
        return(
            <ul className={$Styles.container}>
                {/* logo */}
                <li className={$Styles.login_container}>
                    <div className={$Styles.logo_box}>
                        <img className={$Styles.logo_img} src={this.state.logoSrc} alt="logo"/>
                    </div>
                </li>
                <li className={$Styles.search_nav_container}>
                    {/* 搜索 */}
                    <ul className={$Styles.search_container}>
                        <li className={$Styles.header_search_container}>
                            <HeadSearch/>
                        </li>
                    </ul>   
                     {/*导航其他网站  */}
                    <ul className={$Styles.nav_container}>
                        {
                            menu.map(item =>(
                                <li key={item.id} className={$Styles.nav_button_container}>
                                    <NavButton label={item.label} type={item.type} path={item.path}/>
                                </li>
                            ))
                        }
                        {/* menu 按钮 */}
                        <li className={$Styles.nav_menu_container}>
                            <Menu size={38} fillColor="#999"/>
                        </li>
                    </ul>
                </li>
            </ul>
        )
    }
}

 