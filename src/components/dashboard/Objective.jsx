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

function Objective ({ userId, color}) {
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

}