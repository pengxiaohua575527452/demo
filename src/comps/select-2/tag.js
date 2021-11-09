
 
import React from "react";
import PropTypes from "prop-types";
import styles from "./tag.module.scss";

let SvgCancel = React.lazy(() => import('../svg/cancel'))

export default function Tag(props){

    function onClick(e){
        e.stopPropagation()
        props.onCancel(props.id)
    }

    return(
        <span 
            className={styles.container}
            onClick={onClick}    
        >
            <div className={styles.content_container}>
                <span className={styles.label_container}>
                    <p>{props.label}</p>    
                </span> 
                <span className={styles.icon_container}>
                    <div className={styles.icon_content_container}>
                        <SvgCancel size={6} fillColor={"#fff"}/>
                    </div>
                </span>
            </div>
        </span>
    )
}

Tag.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired
}

 