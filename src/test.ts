import {getAuthHeaders} from "./common/Athentificate";
import request from "request";
import {YoBit} from "./api/YoBit";

// const nonce = require("nonce")(9)();
// const options = { url: "https://yobit.net/tapi/",
//     form: { method: "getInfo", nonce },
//     method: "POST",
//     headers: getAuthHeaders({
//         secret: "d918508b14e8d9a3d495b13d771d2479",
//         key: "1E7813963A73FD80EE44FDE712E4AA6E",
//         data: { method: "getInfo", nonce }
//     })
// }
//
// request(options, function (err, response, body) {
//     console.log("========================");
//     console.log(response.request.headers);
//     console.log(response.request.body);
//     console.log(response.request.path);
//     console.log(response.body);
//     console.log("========================");
// });

// const req = new YoBit({
//     secret: "141ad887e59c137618fd1917703e2cfd",
//     key: "B80977399B445F91E61F95C03353768F"
// });

// const res = req.getInfo()
//     .then(data => console.log(data));
// console.log(res);
