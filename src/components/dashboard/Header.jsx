import PropTypes from "prop-types";

function Header ({ firstname }) {
    return (
        <div className="Header">
            <h1>Bonjour<span className="name">{firstname}</span></h1>
            <p>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}

export default Header;

//Proptypes
Header.propTypes = {
    firstname: PropTypes.string.isRequired
}