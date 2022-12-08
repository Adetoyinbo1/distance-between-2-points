// JavaScript Document


let rad = function (x) {
    return x * Math.PI / 180;
};

exports.DistanceBetweenTwoPoints = async function (options) {
    // parsing whole options once so no need to do again for each params
    options = this.parse(options);


    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(options.userTwoLat - options.userOneLat);
    var dLong = rad(options.userTwoLng - options.userOneLng);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(options.userOneLat)) * Math.cos(rad(options.userTwoLat)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    let convertToKm = d / 1000

    console.log(d)
    const res = {}
    res.Distance = Number(convertToKm)
    return res; // returns the distance in meter
}


