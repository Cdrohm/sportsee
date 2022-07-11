import getData from "../../app/getData";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
	Rectangle,
} from "recharts";

/**
 * 
 * @param {number} userId / 
 * @param {string} color / colors used in dashboard page
 */
function Duration ({ userId, color}) {
    //react use*
    const [data, setData] = useState();

    //Fecth of Data (session) for each userId change
    useEffect(() => {
        async function get() {
            const response = await getData("USER_AVERAGE_SESSIONS", userId);
            setData(response.data.sessions);
        }
        get();
    }, [userId]);


    function weekDays(num) {
        const week = ["L", "M", "M", "J", "V", "S", "D"];
        return week[+num - 1];
    }

    function CustomTooltip({ payload }) {
		if (payload && payload.length) {
			return (
				<div
				className="custom-tooltip"
				style={{ background: "white", padding: "1px 5px" }}
				>
					<p className="desc">{payload[0].payload.sessionLength} min</p>
				</div>
			);
		}
		return <div>... waiting for data</div>;
	}
}