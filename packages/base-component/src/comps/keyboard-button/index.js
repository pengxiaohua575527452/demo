/**
 * 独立组件 - 键盘图标
 */
import React from "react"
import PropTypes from 'prop-types';
import $Styles from "./index.module.scss"

export default class KeyBoardButton extends React.Component{
    constructor(props){
        super(props);

        ({
            size: this.size = "20px",
            fontColor:  this.fontColor = "#bbb",
            backgroundColor: this.backgroundColor = "#efefef",
            onClick: this.onClick = function(){console.log('没有设置onClick事件处理器')},
            children: this.children = "E"
        } = props);
      
        this.state = {}
    }


    render(){
        return(
            <div 
                className={$Styles.container}
                style={{
                    width: this.size,
                    height: this.size,
                    color: this.fontColor,
                    backgroundColor: this.backgroundColor,
                    borderColor: this.fontColor,
                }} 
                onClick={this.onClick}   
            >{this.children}</div>
        )
    }
}

KeyBoardButton.propTypes = {
    size: PropTypes.string,
    fontColor:  PropTypes.string,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func.isRequired 
}

 

 