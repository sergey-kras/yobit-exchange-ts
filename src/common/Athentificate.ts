import querystring from "querystring";
import * as crypto from "crypto";
import {YoBitOptions} from "./YoBitOptions";

interface IAuthData extends YoBitOptions{
    data: {
        nonce: number,
        method: string,
        [key: string]: any,
    }
}

interface AuthHeaders {
    sign: string;
    key: string;
}

export function getAuthHeaders({ secret, key, data }: IAuthData): AuthHeaders {
    const stringData = data ? querystring.stringify(data) : "";
    const sign = crypto.createHmac("sha512", secret)
        .update(stringData)
        .digest("hex");

    return { key, sign };
}
