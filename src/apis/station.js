import axios from "axios";

export default axios.create({
  baseURL:
    "https://api.synopticdata.com/v2/stations/latest?stid=SOLBS,SOLMB&token=5f4bddebeaba4e6892eade4aa033e41b"
});

// var tkn = "5f4bddebeaba4e6892eade4aa033e41b";
// var stn = "PKCU1, BRC, SOLSM, BRW, SOL, SOLAP, SOLBS, SOLMB, SOLHP, REY, UTSTR, UTTPD, UTCDF, SPC, MLDU1"
// $.getJSON('https://api.synopticdata.com/v2/stations/latest',
//     {
//         // specify the request parameters here
//         stid: stn,
//         within: 1440,
//         token: tkn
//     },
