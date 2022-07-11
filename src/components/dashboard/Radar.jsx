import getData from "../../app/getData";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
	RadarChart,
	Radar,
	PolarAngleAxis,
	PolarRadiusAxis,
	PolarGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

/**
 * Function for display a radar graphic
 * @param {number} userId / This is the id number of the current user 
 * @param {string} color / colors use for the radar graphic 
 * @returns a radar graphic with informations
 */
function RadarGraph ({userId, color}) {
    const [data, setData] = useState();
    const kind = data?.kind;
    const values = data?.data;
    let modelData = values?.map((val, index) => {
        return {key: kind[index +1], value: val.value};
    });
    modelData = modelData?.reverse();

    //Fecth of mainData for each userId change
    useEffect(() => {
		async function get() {
			const response = await getData("USER_PERFORMANCE", userId);
			setData(response.data);
		}
		get();
	}, [userId]);

    //declare the different categories 
    const names = {
		cardio: "Cardio",
		energy: "Energie",
		endurance: "Endurance",
		strength: "Force",
		speed: "Vitesse",
		intensity: "Intensité",
	};

    /**
     * put the legends at the good place around the radar graphic
     * @param {object} props 
     * @returns a text element with the 6 names of categories in the right place
     */
    function setTick(props) {
        const {payload, x, y} = props;
        const value = payload.value;
        const side = payload.coordinate;

            return (
                <text
                    x={x}
                    y={payload.index ===3 ? y + 10 : y}
                    textAnchor={
                        side >= -30 && Math.abs(side) !== 90
                            ?"start"
                            : Math.abs(side) === 90
                            ?"middle"
                            :"end"
                    }
                    margin={5}
                    fill="white"
                >
                    {names[value]}
                </text>    
            );
    }

    /**
	 * Content formatter for the Tooltip, works if the active prop is true and the payload prop is not empty
	 * @param {boolean} active
	 * @param {array} payload - Properties used by the Tooltip
	 * @returns A custom-tooltip with a style of background, padding and color
	 */
    function CustomeTooltip ({active, payload}) {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip" style={{ background: "white", padding: "10px 5px", color: color.red}}
                >
                    <span className="desc">{names[payload[0].payload.key]} : {payload[0].payload.value}</span>
                    <span className="desc"></span>
                </div>
            );
        }
    }
}