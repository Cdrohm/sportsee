import getData from "../../app/getData";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

function Weight ({ userId, color}) {
    const [data, setData] = useState();
    //keep day from the date
    const dates = data?.map((d) => d.day.split("-")[2]);

    
}