/**
 * page - 组件 - 布局
 */
import React from "react";
import $Styles from "./index.module.scss";

export default class BaseLayout extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            navIsFixed: false,
            threshold: 0
        }

        this.refHeader = React.createRef()
        this.refContentContainer = React.createRef()
    }

    setThreshold(){
        let headerHeight = 64;
        let contentContainerHeight = parseInt(getComputedStyle(this.refContentContainer.current).paddingTop);
        this.setState(state => ({...state, threshold: headerHeight + contentContainerHeight}))
    }

    onWindowScroll = () => {
        if(window.scrollY > this.state.threshold - 10 &&  !this.state.navIsFixed){
            this.setState(state => ({...state, navIsFixed: true}))
        }else if(window.scrollY <= this.state.threshold - 10 && this.state.navIsFixed) {
            this.setState(state => ({...state, navIsFixed: false}))
        }
    }

    componentDidMount(){
        this.setThreshold()
        window.addEventListener('scroll', this.onWindowScroll)
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.onWindowScroll)
    }

    render(){
        return (
            <>
                <section ref={this.refContentContainer} className={$Styles.content_containe}>
                    {/* 导航容器 */}
                    <nav className={`${$Styles.nav_container}`} >
                        {/* 导航列表 */}
                        <div className={`${$Styles.nav_menu_container}  ${this.state.navIsFixed ? $Styles.nav_menu_container_fixed : null}`}>
                            {this.props.nav}
                        </div>
                    </nav>
                    <section className={$Styles.main_Footer_container}>
                        <main className={$Styles.main_container}>
                            {/* 主要内容部分 */}
                            {this.props.main}
                        </main>
                        <footer className={$Styles.footer_container}>
                            {/* 页脚部分 */}
                            {this.props.footer}
                        </footer>
                    </section>
                </section>
            </>
        )
    }
}



 