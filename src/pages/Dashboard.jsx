import getData from "../app/getData";
import Header from "../components/dashboard/Header";
import Weight from "../components/dashboard/Weight";
import Objective from "../components/dashboard/Objective";
import Radar from "../components/dashboard/Radar";
import Score from "../components/dashboard/Score";
import Counter from "../components/dashboard/Counter";

import PropTypes from "prop-types";
import { useState, useEffect, Fragment } from "react";

/**
 * This function makes the dashboard page
 * @param {number} userId This is the id number of the current user
 * @returns The dashboard page with components (graphics) in a div
 */
function Dashboard ({ userId }) {
    //state of data
    const [mainData, setMainData] = useState();
    //score of the day
    const score = mainData?.todayScore || mainData?.score;

    //Fecth of mainData for each userId change
    useEffect(() => {
        async function get() {
            const response = await getData("USER_MAIN_DATA", userId);
            setMainData(response.data);
        }
        get();
    }, [userId]);

    //Variables for color used
    const color = {
        $red: "#E60000",
        $redNeon: "#FF0101",
        $grey: "#9B9EAC",
        $dark_grey: "#282d30",
        $light_grey: "#f4f4f4",
        $yellow: "#fdcc0c",
        $blue: "#4ab8ff",
    };

    return (
        <div className="Dashboard">
                <Fragment>
                    <Header firstname={mainData.userInfos.firstname} />
                    <div className="dashboard_graphs">
                        <Weight userId={userId} color={color} />
                        <Objective userId={userId} color={color} />
                        <Radar userId={userId} color={color} />
                        <Score userId={userId} color={color} />

                        {Object.keys(mainData.keyData).map((val, i) => (
                            <Counter
                                data={[val, mainData.keyData[val]]}
                                color={color}
                                i={`counter-${i}`}
                                key={`counter-${i}`}
                            />    
                        ))}
                    </div>
                </Fragment>
        </div>
    );

}

export default Dashboard;

//Proptypes

Dashboard.propTypes = {
    userId: PropTypes.number.isRequired,
};