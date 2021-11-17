/**
 * 独立组件 - input
 */
import $Styles from "./index.module.scss";
import PropTypes from "prop-types"
export default function SearchInput(props){
    return(
        <>
            <input 
                className={$Styles.input} 
                type={props.type || "text"}
                value={props.searchValue} 
                onChange={props.onChange}
                placeholder={props.placeholder || "搜索"}   
            />
        </>
    )
}

SearchInput.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
}

