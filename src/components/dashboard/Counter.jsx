import PropTypes from "prop-types";

import apple from "../../assets/apple.svg";
import hamburger from "../../assets/hamburger.svg";
import chicken from "../../assets/chicken.svg";
import fire from "../../assets/fire.svg";

function Counter({
    data,
    i
}) {
    let [type, value] = data;
    value = +value > 999 ? `${Math.floor(value / 1000)}, ${value - 1000}` : value;

    //name
    const types = {
        calorieCount: "Calories",
        proteinCount: "Protéines",
        carbohydrateCount: "Glucides",
        lipidCount: "Lipides",
    };

    //icon
    const icons = {
        calorieCount: fire,
        proteinCount: chicken,
        carbohydrateCount: apple,
        lipidCount: hamburger,
    };

    //color
    const colors = {
        calorieCount: "#ffe6e6",
        proteinCount: "#DBECFF",
        carbohydrateCount: "#fff5cc",
        lipidCount: "#ffe6f9",
    };

    //unit naming
    const units = {
        calorieCount: "kCal",
        proteinCount: "g",
        carbohydrateCount: "g",
        lipidCount: "g",
    };

    const title = types[type];
    const icon = icons[type];
    const color = colors[type];
    const unit = units[type];

    return (
        <div className={`Counter Counter-${i}`}>
                <div className="counter_icon_cell" style={{ backgroundColor: color}}>
                    <img className="counter_icon" src={icon} alt={`icon ${title}`}/>
                </div>
                <div className="counter_text">
                    <h3>
                        {value}
                        {unit}

                    </h3>
                    <p>{title}</p>

                </div>
        </div>
    );
}

export default Counter;

//Proptypes
Counter.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.oneOf([
                "calorieCount",
                "proteinCount",
                "carbohydrateCount",
                "lipidCount",
            ]),
            PropTypes.number
        ])
    ).isRequired,
    i: PropTypes.string.isRequired,
};