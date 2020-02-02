import querystring from 'querystring';
import * as crypto from 'crypto';
import axios from 'axios';
const request     = require('request');

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

const nonce = require('nonce')(9)();
export function getAuthHeaders({ secret, key, data }) {
    const stringData = data ? querystring.stringify(data) : '';
    const sign = crypto.createHmac('sha512', secret)
        .update(stringData)
        .digest('hex');

    return { 'key': key, 'sign': sign };
}

const options = { url: 'https://yobit.net/tapi/',
    form: { method: 'getInfo', nonce },
    method: 'POST',
    headers: getAuthHeaders({
        secret: 'd918508b14e8d9a3d495b13d771d2479',
        key: '1E7813963A73FD80EE44FDE712E4AA6E',
        data: { method: 'getInfo', nonce }
    })
}

request(options, function (err, response, body) {
    console.log('========================');
    console.log(response.request.headers);
    console.log(response.request.body);
    console.log(response.request.path);
    console.log(response.body);
    console.log('========================');
});
