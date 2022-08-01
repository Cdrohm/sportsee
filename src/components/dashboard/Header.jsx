import getData from "../../app/getData";
import PropTypes from "prop-types";

/**
 * function to create the header component
 * @param {*} firstname / get the name of the user
 * @returns a message with the name of the user
 */
function Header() {
    return(
        <div className="Header">
            <h1>Bonjour<span className="name">{"Thomas"}</span></h1>
            <p>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}

//Proptypes
Header.propTypes = {
    firstname: PropTypes.string.isRequired
}

export default Header;

