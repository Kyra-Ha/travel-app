import {getDest} from './js/post_destination.js'
import {getWeather} from './js/get_weather.js'
import {performAction} from './js/app.js'

document.getElementById('generate').addEventListener("click", performAction);

export {getDest, 
        getWeather,
        performAction
    }

