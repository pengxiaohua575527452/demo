import PropTypes from 'prop-types';

export default function SvgMenu(props){
    return(
        <svg 
            t="1636433658149"
            className="icon" 
            viewBox="0 0 1024 1024" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            p-id="3844" 
            width={props.size} 
            height={props.size}
        >
            <path fill={props.fillColor}  d="M473.744 541.92a16 16 0 0 1 16 16v249.728a16 16 0 0 1-16 16H224a16 16 0 0 1-16-16V557.92a16 16 0 0 1 16-16h249.744z m322.784 0a16 16 0 0 1 16 16v249.728a16 16 0 0 1-16 16h-249.76a16 16 0 0 1-16-16V557.92a16 16 0 0 1 16-16h249.76z m-354.784 48H256v185.728h185.744V589.92z m322.784 0h-185.76v185.728h185.76V589.92zM676.528 208a152 152 0 1 1 0 304 152 152 0 0 1 0-304z m-202.784 11.136a16 16 0 0 1 16 16v249.728a16 16 0 0 1-16 16H224a16 16 0 0 1-16-16V235.136a16 16 0 0 1 16-16h249.744zM676.528 256a104 104 0 1 0 0 208 104 104 0 0 0 0-208z m-234.784 11.136H256v185.728h185.744V267.136z" p-id="3244"></path>

        </svg>
    )
}

SvgMenu.propTypes = {
    size:  PropTypes.number.isRequired,
    fillColor: PropTypes.string.isRequired 
}


 
