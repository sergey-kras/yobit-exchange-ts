import querystring from 'querystring';
import * as crypto from 'crypto';
import axios from 'axios';
const request     = require('request');
var Trade = require('yobit-exchange-api/lib/trade');

interface IAuthemtifacate {
    key: string;
    secret: string;
    method: string;
    path: string;
    opts: {
        qs?: any;
        form?: any;
    };
}

export function getAuthHeaders({ secret, key, data }) {
    // const newPath = opts.qs ? '?' + querystring.stringify(opts.qs) : path;
    const stringData = data ? querystring.stringify(data) : '';
    const sign = crypto.createHmac('sha512', secret)
        .update(stringData)
        .digest('hex');

    return { 'key': key, 'sign': sign };
}

var nonce = require('nonce')(9)();
// const http = axios.create({
//     headers: getAuthHeaders({
//         key: '02D0176CBEFA8B1A1B6A19C0AD7587A0',
//         secret: '52dcc1ce57f2faffbb8e359d54ef63eb',
//         data: { method: 'getInfo', nonce }}),
//     // baseURL: 'http://yobit.net/tapi'
// });
//
//
// http.post('http://yobit.net/tapi/?method=getInfo&nonce=' + nonce, { method: 'getInfo', nonce }, { headers: getAuthHeaders({
//         key: '02D0176CBEFA8B1A1B6A19C0AD7587A0',
//         secret: '52dcc1ce57f2faffbb8e359d54ef63eb',
//         data: { method: 'getInfo', nonce }})}).then(info => console.log(info)).catch(err => console.log(err));
// var keys = {key: '1E7813963A73FD80EE44FDE712E4AA6E', secret: 'd918508b14e8d9a3d495b13d771d2479'}
// var trade = new Trade(keys);
// trade.getInfo(function(err, data) {
//   console.log(data);
// })

const options = { url: 'https://yobit.net/tapi/',
    form: { method: 'getInfo', nonce },
    method: 'POST',
    headers: getAuthHeaders({
        secret: 'd918508b14e8d9a3d495b13d771d2479',
        key: '1E7813963A73FD80EE44FDE712E4AA6E',
        data: { method: 'getInfo', nonce }
    })
}


// const some = getAuthHeaders({
//         key: '41136E5B02980D188BC0E257A6FB4E7B',
//         secret: 'c4cdaaa491ab0a2640523341acaaf239',
//         data: { method: 'getInfo', nonce }
//     })

// console.log(some, nonce);

request(options, function (err, response, body) {
    console.log('========================');
    console.log(response.request.headers);
    console.log(response.request.body);
    console.log(response.request.path);
    console.log(response.body);
    console.log('========================');
});
