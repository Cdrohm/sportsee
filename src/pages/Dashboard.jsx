import
import
import
import
import
import

import PropTypes form "prop-types";
import { useState, useEffect } from "react";

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
        $red: "#E60000";
        $redNeon: #FF0101;
        $grey: #9B9EAC;
        $dark_grey: #282d30;
        $light_grey: #f4f4f4;
        $yellow: #fdcc0c;
        $blue: #4ab8ff;
    }

}