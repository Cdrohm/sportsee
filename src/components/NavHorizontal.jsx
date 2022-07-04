import logo from "../assets/logo.png";
import Proptypes from 'prop-types';


/**
 * Function NavHorizontal returns a div for the current user
 * @param {array} currentUser / properties contains userId state + setUserId 
 * @returns a div with the logo of Sportsee + a horizontal navigation
 */
function NavHorizontal ({ currentUser}) {
    //declare currentUser (array)
    const [userId, setUserId] = currentUser;
    const ids = [12, 18];

    //return a div for navigation horizontal (logo + demo switch + links to navigate)
    return(
        <div className="NavH">
        
        <img className="logo"
                onClick={() => setUserId filter}
                src={logo}
                alt="logo Sportsee"
                title="Click to run demo user" />

                
        <nav className="NavHBtn">
            
            <span className="NavHBtn_menu">Accueil</span>
            <span className="NavHBtn_menu">Profil</span>
            <span className="NavHBtn_menu">Réglage</span>
            <span className="NavHBtn_menu">Communauté</span>

        </nav>

        </div>
    );
 

}

export default NavHorizontal;

//proptypes ?