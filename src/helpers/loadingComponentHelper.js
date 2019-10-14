const icons = {
    "start-day":[
        "sun-morning",
        "sun-and-wind",
        "sun-and-fog",
        "sun-and-clouds",
        "sun-and-rain",
    ],
    "day" : [
        "sun",
        "sun-and-wind",
        "sun-and-fog",
        "sun-and-clouds",
        "sun-and-rain",
    ],
    "mid-day": [
        "sun-evening",
        "clouds",
        "rain",
        "snow",
        "wind",
        "storm",
        "heavy-rain"
    ],
    "start-end-day":[
        "moonrise",
    ],
    "end-day": [
        "moonset",
        "moon-and-rain",
        "moon-and-snow",
        "moon-and-storm",
        "moon-and-fog",
        "moon-and-clouds"
      ]
}

const backgrounds = [
    'sky-dawn',
    'sky-dawn',
    'sky-day',
    'sky-day',
    'sky-evening',
    'sky-evening',
    'sky-night',
    'sky-night',
];

const getDayPhase = (number) => {
    switch(number){
        case 1:
            return "start-day"
        case 2:
            return "day";
        case 3:
            return "mid-day";
        case 4:
            return "start-end-day";
        case 5:
        case 6:
            return "end-day";
        default:
            return "day";
    }
}

const getNewIcon = (phase, prevIcon) => {
    const index = Math.floor((Math.random() * (icons[phase].length -1)) + 0);
    const newIcon = icons[phase][index];

    if(newIcon === prevIcon){
        return getNewIcon(phase, prevIcon);
    }

    return newIcon;
}

const getRandomIcon = (number, prevIcon) => {
    const phase = getDayPhase(number);
    return getNewIcon(phase, prevIcon);
}

const getBackground = (counter) => {
    const background = backgrounds[counter];
    return background;
}

export {
    icons,
    getRandomIcon,
    getBackground
}