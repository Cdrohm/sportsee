import logo from "../assets/logo.png";
import PropTypes from 'prop-types';


/**
 * Function NavHorizontal returns a div for the current user
 * @param {array} currentUser / properties contains userId state + setUserId 
 * @returns a div with the logo of Sportsee + a horizontal navigation
 */
function NavHorizontal ({ currentUser}) {
    //declare currentUser (array)
    const [userId, setUserId] = currentUser;
    const ids = [12, 18];

    //return a div for navigation horizontal (logo + switch user + links to navigate)
    return(
        <div className="Nav-H">
        
            <img className="logo"
                    onClick={() => setUserId(ids.filter((id) => id !== userId)[0])}
                    src={logo}
                    alt="logo Sportsee"
                    title="Click to switch user" />

                    
            <nav className="Nav-H-Btn">
                
                <span className="Nav-H-Btn_menu">Accueil</span>
                <span className="Nav-H-Btn_menu">Profil</span>
                <span className="Nav-H-Btn_menu">Réglage</span>
                <span className="Nav-H-Btn_menu">Communauté</span>

            </nav>

        </div>
    );
 

}

export default NavHorizontal;

//Proptypes part
NavHorizontal.propTypes = {
    currentUser: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
    ),
};