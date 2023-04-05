const _ = require("lodash");

const CARS = {
    au: "Holden Ute",
    in: "Hindustan Ambassador", // india
    en: "Range Rover",
    ru: "Lada Niva",
    ge: "Mercedes-Benz 600",
    it: "Alfa Romeo Giulia", // italy
    am: "Ford GT/GT40",
    jp: "Nissan GT R", // japan
    se: "Koenigsegg Jesko Absolut", // sweden
    ca: "Felino CB7R", // canada 
    kr: "Hyundai Kona Electric", // south korea
};

exports.car = function (code) {
    if (code) {
        
        if (!CARS[code]) {
            return "sorry! We dont have any answer for this.";
        }
        else {
            return CARS[code];
        }
    }
    else {
        return CARS['in'];
    }
}


exports.carRandom = function () {
    return _.sample(_.values(CARS));
}
