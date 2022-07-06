import icon1 from "../assets/icon-1.png"
import icon2 from "../assets/icon-2.png"
import icon3 from "../assets/icon-3.png"
import icon4 from "../assets/icon-4.png"

/**
 * function NavVertical returns a div who contains vertical navigation (icons)
 * 4 buttons are present, each represent a picture of a sport
 * a div regroups the 4 buttons
 * the copyright is inside a div
 */
function NavVertical () {
    return (
        <div className="Nav-V">
            <div className="Nav-V-Menu_btns">
                <div className="Nav-V-Menu_btns_icon"><img src={icon1} alt="btn mode" /></div>
                <div className="Nav-V-Menu_btns_icon"><img src={icon2} alt="btn mode" /></div>
                <div className="Nav-V-Menu_btns_icon"><img src={icon3} alt="btn mode" /></div>
                <div className="Nav-V-Menu_btns_icon"><img src={icon4} alt="btn mode" /></div>
            </div>
            <div className="copyright">Copyright, Sportsee 2020</div>
        </div>
    );
    
}

export default NavVertical;