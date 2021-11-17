/**
 * 通用 - 头部容器
 */
import $Styles from "./index.module.scss";
export default function HeadContainer(props){
    return(
        <div className={$Styles.container}>{props.children}</div>
    )
}