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
 * Function to display the duration of dayly exercices
 * @param {number} userId / to take the user name
 * @param {string} color / colors used in dashboard page
 * @returns a table comprising curved line summarizing the exercise duration for the week
 */
function Duration ({ userId, color}) {
    //react useState
    const [data, setData] = useState();

    //Fecth of Data (session) for each userId change
    useEffect(() => {
        async function get() {
            const response = await getData("USER_AVERAGE_SESSIONS", userId);
            setData(response.data.sessions);
        }
        get();
    }, [userId]);


	/**
	 * Function returns the day following the given number
	 * @param {number} num 
	 * @returns the day with its 1st letter
	 */

    function weekDays(num) {
        const week = ["L", "M", "M", "J", "V", "S", "D"];
        return week[+num - 1];
    }

	/**
	 * Function is a react component which allows to create a tooltip
	 * @param {array} payload / array of objects present the custom tooltip
	 * @returns a custom tooltip with a style
	 */
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
		return <div>waiting for data</div>;
	}

	function CustomCursor (props) {
		if (props) {
			const {points, width, height} = props;
			const {x, y} = points[0];

			return (
				<Rectangle
					fill={color.$black}
					fillOpacity="0.2"
					x={x}
					y={y-30}
					width={width}
					height={height*2}
				/>	
			);
		}
		return <div>waiting for data</div>
	}
	return(
		<div className="Duration">
			{data && (
				//recharts
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={data}
						margin={{
							top: 30,
							right: 0,
							left: 0,
							bottom: 30,
						}}>

							<CartesianGrid vertical={false} horizontal={false} />
							<Tooltip
								content={<CustomTooltip />}
								animationEasing="easing-out"
								cursor={<CustomCursor />}
							/>

							<XAxis
								dataKey="day"
								tickFormatter={weekDays}
								tick={{ fill: "white", opacity: ".6"}}
								tickLine={false}
								tickMargin={15}
								interval="preserveStartEnd"
								axisLine={false}
							/>

							<YAxis
								padding={{ top:0, bottom: 0}}
								type="number"
								domain={["dataMin -10", "dataMax +10"]}
								allowDataOverflow={true}
								tickLine={false}
								axisLine={false}
								tickMargin={0}
								hide
							/>

							<Legend
								verticalAlign="top"
								align="left"
								iconSize={0}
								content={
									<div className="legend_text"
									style={{
										color:"white",
										marginTop: "-10px",
										marginLeft:"20px",
										opacity: ".5",
										position:"absolute",
										top:"0",
									}}
									>
										Durée moyenne des <br />
										sessions
									</div>
								}	
								margin={{left: 20}}
							/>	

							<Line
								type="natural"
								dataKey="sessionLength"
								scale="band"
								stroke="white"
								strokeWidth={2}
								dot={false}
								activeDot={{
									fill: "white",
									strokeOpacity: ".5",
									strokeWidth: "10",
									r: 4,
								}}	
							/>	
						</LineChart>
				</ResponsiveContainer>
			)}
		</div>
	);
}

//Proptypes
Duration.propTypes = {
	userId: PropTypes.number.isRequired,
	color: PropTypes.object.isRequired
};

export default Duration;

