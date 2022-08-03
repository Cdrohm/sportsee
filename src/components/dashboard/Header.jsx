import PropTypes from "prop-types";

/**
 * function to create the header component
 * @param {string} firstName / get the name of the user
 * @returns a message with the name of the user
 */

 function Header({ firstName }) {
	return (
		<div className="Header">
			<h1>Bonjour <span className="name" data-testid="firstName">{firstName}</span></h1>
			<p>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
		</div>
	);
}

Header.propTypes = {
	firstName: PropTypes.string.isRequired
}


export default Header;

