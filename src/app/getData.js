import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE
} from "../assets/mockData/data"
import PropTypes from "prop-types"
import axios from "axios"

/**
 * this async function fetches data from API or mockedData and returns it
 * @modifiy .env - set mocked data to "true" || "false" in order to use mockedData or axios requests
 * @param {string} requestTarget it's the data type you want to request from the API
 * @param {number} userId it's the id of the user you want to get data
 * @acces localStorage - data fetched are stored in local for a better and quickly acces to the next time
 * @returns all the data for the selected user
 */

async function getData(requestTarget, userId) {

    console.log(requestTarget);
    //create mock
    const mockedEnv = process.env.REACT_APP_MOCKED_DATA
    console.log(mockedEnv);

    const mockedData = {
        USER_MAIN_DATA: USER_MAIN_DATA,
        USER_ACTIVITY: USER_ACTIVITY,
        USER_AVERAGE_SESSIONS: USER_AVERAGE_SESSIONS,
        USER_PERFORMANCE: USER_PERFORMANCE
    }
    console.log(mockedData);
    console.log(process.env);
    const apiURL = process.env[`REACT_APP_API_URL`]
    //console.log(process.env[`"REACT_APP_$i=test$i"`]);
    const apiTarget = process.env[`REACT_APP_${requestTarget}`].replace(/userId/, userId)
    let usersData, data

    try {
        if (localStorage.getItem(`sportSee-${userId}-${requestTarget}`)) {
            console.log('Data is taken from your localStorage.')
            data = JSON.parse(localStorage.getItem(`sportSee-${userId}-${requestTarget}`))
        } else {
            console.log(`Data is taken from ${mockedEnv === "true" ? "MOCKED_DATA" : "BackEnd database with Axios"}.`)
            if (mockedEnv === 'true') {
                usersData = await new Promise((resolve) => resolve(mockedData[requestTarget]))
                data = { data: await usersData.filter(user => user.id ? user.id === userId : user.userId === userId)[0] }
                localStorage.setItem(`sportSee-${userId}-${requestTarget}`, JSON.stringify(data))
            } else {
                try {
                    usersData = await axios({
                        method: 'get',
                        baseURL: apiURL,
                        url: apiTarget,
                        responseType: "stream"
                    })
                    data = await usersData.data
                    localStorage.setItem(`sportSee-${userId}-${requestTarget}`, JSON.stringify(data))
                } catch (error) {
                    console.log('Erreur axios:', error)
                }
            }
        }
        return data
    } catch (error) {
        console.log('Erreur de récupération des données utilisateur:', error)
        alert('Une erreur est survenue: Utilisateur non reconnu.')
    }

}

export default getData;


getData.proptype = {
    requestTarget: PropTypes.oneOf(['USER_MAIN_DATA', 'USER_ACTIVITY', 'USER_AVERAGE_SESSIONS', 'USER_PERFORMANCE']).isRequired,
    userId: PropTypes.number.isRequired,
}