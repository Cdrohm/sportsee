import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from "../assets/mockData/data";

import PropTypes from "prop-types";
import axios from "axios";

async function getData (requestTarget, userId) {
    //acces environment variables
    const mockedEnv = process.env.REACT_APP_MOCKED_DATA
    //acces mocked data
    const mockedData = {
        USER_MAIN_DATA: USER_MAIN_DATA,
        USER_ACTIVITY: USER_ACTIVITY,
        USER_AVERAGE_SESSIONS: USER_AVERAGE_SESSIONS,
        USER_PERFORMANCE: USER_PERFORMANCE,
    }
    
    const apiURL = process.env[`REACT_APP_API_URL`]
    const apiTarget = process.env[`REACT_APP_${requestTarget}`].replace(/userId/, userId)
    let usersData, data

    try {
        if (localStorage.getItem(`sportSee-${userId}-${requestTarget}`)) {
            console.log('data is taken form the local storage')
            data= JSON.parse(localStorage.getItem(`sportSee-${userId}-${requestTarget}`))

        } else {
            console.log('data is taken from ${mockedEnv === "true" . "MOCKED_DATA : "Backend database with Axios"}.')
            if (mockedEnv === 'true') {
                usersData = await new Promise((resolve) => resolve(mockedData[requestTarget]))
                data = {data: await usersData.filter(user => user.id ? user.id === user.Id : user.userId === userId)[0]}
                localStorage.setItem(`sportSee-${userId}-${requestTarget}`, JSON.stringify(data))

            } else {
                try {
                    usersData = await axios ({
                        method: 'get',
                        baseURL: apiURL,
                        url: apiTarget,
                        responseType: "stream"

                    })
                    data = await usersData.data
                    localStorage.setItem(`sportSee-${userId}-${requestTarget}`, JSON.stringify(data))

                } catch (error) {
                    console.log('Axios error:', error)
                }
            }
        }

        return data

    } catch (error) {
        console.log('User data retrieval error:', error)
        alert ('An error was occured: unknow user.')
    }
}

export default getData;

//Proptypes
getData.proptype = {
    requestTarget: PropTypes.oneOf(['USER_MAIN_DATA', 'USER_ACTIVITY', 'USER_AVERAGE_SESSIONS', 'USER_PERFORMANCE']).isRequired,
    userId: PropTypes.number.isRequired
}