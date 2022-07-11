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

    //Fecth of mainData for each userId change
    useEffect(() => {
		async function get() {
			const response = await getData("USER_ACTIVITY", userId);
			setData(response.data.sessions);
		}
		get();
	}, [userId]);

    /**
     * function to give a date in the format "YEARS-MONTH-DAY"
     * @param {string} date 
     * @returns the day of the month selected
     */
    function formatDate(date) {
        let resultat = date.split("-")[2];
        resultat = resultat[0] === "0"? resultat[1] : resultat;
        return resultat;
    }

    /**
     * function takes a string and returns a text including the string
     * @param {string} text / react payload text from Legend
     * @returns the texte "Poids kg" or "Calories Kcal"
     */
    function setLegend(text) {
		const types = {
			kilogram: "Poids (kg)",
			calories: "Calories brûlées (kCal)",
		};

		return (
			<span>
				<span
					className="legend_text"
					style={{
						position: "absolute",
						left: "0",
						color: color.dark_grey,
					}}
				>
					Activité quotidienne
				</span>
				<span className="recharts-legend-item-text dark_grey">
					{types[text]}
				</span>
			</span>
		);
	}

    /**
     * React component who takes an active prop, payload prop and label prop
     * @param {boolean} active /  from <Tooltip />, which tells if the tooltip is active or net 
     * @param {array} payload / array of objects from <Tooltip />, contains the data for tooltip display
     * @returns 2 bar columns (Kg + Kcal)
     */
    function CustomTooltip({ active, payload }) {
		if (active && payload && payload.length) {
			return (
				<div
					className="custom-tooltip"
					style={{ background: color.red, padding: "5px 5px", color: "white" }}
				>
					<p className="desc">{payload[0].payload.kilogram} Kg</p>
					<p className="desc">{payload[1].payload.calories} kCal</p>
				</div>
			);
		}
		return <div>waiting for data</div>;
	}

	return (
		<div className="Weight">
			{dates && (
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						data={data}
						barCategoryGap={10}
						barGap={5}
						barSize={7}
						margin={{
							top: 15,
							right: 15,
							left: 23,
							bottom: 15,
						}}
					>
						<CartesianGrid strokeDasharray="2 2" vertical={false} />
						<XAxis
							dataKey="day"
							tickFormatter={formatDate}
							tickLine={false}
							tickMargin={15}
						/>

						<YAxis
							yAxisId="kilogram"
							type="number"
							domain={["dataMin - 3", "dataMax + 3"]}
							tickLine={false}
							axisLine={false}
							tickMargin={20}
							orientation="right"
						/>

						<YAxis
							yAxisId="calories"
							type="number"
							domain={["dataMin - 50", "dataMax + 50"]}
							hide
						/>

						<Legend
							verticalAlign="top"
							align="right"
							iconType="circle"
							iconSize={8}
							formatter={setLegend}
						/>

						<Tooltip
							content={<CustomTooltip />}
							animationEasing="ease-out"
							active
						/>

						<Bar
							yAxisId="kilogram"
							dataKey="kilogram"
							radius={[20, 20, 0, 0]}
							fill={color.dark_grey}
						/>

						<Bar
							yAxisId="calories"
							dataKey="calories"
							radius={[20, 20, 0, 0]}
							fill={color.red}
						/>

					</BarChart>
				</ResponsiveContainer>
			)}
		</div>
	);
}

export default Weight;

//Proptypes
Weight.propTypes = {
	userId: PropTypes.number.isRequired,
	color: PropTypes.object.isRequired
};