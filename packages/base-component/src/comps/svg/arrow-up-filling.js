import PropTypes from 'prop-types';

export default function SvgArrowUpFilling(props){
    return(
        <svg 
            t="1636419800116" 
            className="icon" 
            viewBox="0 0 1024 1024" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            p-id="2387" 
            width={props.size} 
            height={props.size}
        >
            <path
                fill={props.fillColor} 
                d="M541.866667 285.866667l345.6 345.6c17.066667 17.066667 17.066667 42.666667 0 59.733333-8.533333 8.533333-19.2 12.8-29.866667 12.8H168.533333c-23.466667 0-42.666667-19.2-42.666666-42.666667 0-10.666667 4.266667-21.333333 12.8-29.866666l343.466666-345.6c17.066667-17.066667 42.666667-17.066667 59.733334 0z"
                p-id="2388"
            >
            </path>
        </svg>
    )
}

SvgArrowUpFilling.propTypes = {
    size:  PropTypes.number.isRequired,
    fillColor: PropTypes.string.isRequired 
}