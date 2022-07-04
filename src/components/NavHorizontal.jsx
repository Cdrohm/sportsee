import
import


/**
 * Function NavHorizontal returns a div for the current user
 * @param {array} currentUser / properties contains userId state + setUserId 
 * @returns a div with the logo of Sportsee + a horizontal navigation
 */
function NavHorizontal ({ currentUser}) {
    //declare currentUser (array)
    const [userId, setUserId] = currentUser;
    const ids = [12, 18];

    //return a div for navigation horizontal
    return(
        <div className="NavH">
        //logo + onclick to switch demo
        </div>

        <div className="NavHBtn">
            //buttons nav
            <span className="NavHBtn_menu">Accueil</span>
            <span className="NavHBtn_menu">Accueil</span>
            <span className="NavHBtn_menu">Accueil</span>
            <span className="NavHBtn_menu">Accueil</span>

        </div>
    )

}