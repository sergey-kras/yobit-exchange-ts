import { YoBitOptions } from "../common/YoBitOptions";
import request from "request-promise";
import { getAuthHeaders } from "../common/Athentificate";
import { getNonce } from "../utils/getNonce.utils";
import random_useragent from 'random-useragent';
import { RequestTradeHistory, ValidHistoryRequest } from "../common/Intefaces";

export type ValidHistoryMatch = {
    [key in keyof RequestTradeHistory]: string;
};

export abstract class AbstractYoBit {
    readonly key: string;
    readonly secret: string;

    constructor({ key, secret }: YoBitOptions){
        this.key = key;
        this.secret = secret;
    }

    protected async request<T>({ method, data, path }) {
        const nonce = getNonce(9)();
        const extraData = { method, nonce, ...data };
        const requestOptions = {
            url: "https://yobit.net/" + path,
            method: "POST",
            json: true,
            form: extraData,
            headers: getAuthHeaders({
                secret: this.secret,
                key: this.key,
                data: extraData
            }) as any
        };

        requestOptions.headers = {
            ...requestOptions.headers,
            "User-Agent": random_useragent.getRandom()
        };

        return request(requestOptions);
    }

    protected getValidHistoryRequest (filters: RequestTradeHistory): ValidHistoryRequest {
        const match: ValidHistoryMatch = {
            fromOrderNumber: 'from',
            count: 'count',
            fromOrderId: 'from_id',
            endOrderId: 'end_id',
            orderSort: 'order',
            sinceDate: 'since',
            endDate: 'end',
            pair: 'pair'
        };
        const result: ValidHistoryRequest = {};

        for (let key in filters) {
            if (filters.hasOwnProperty(key)) {
                result[match[key]] = filters[key];
            }
        }

        return result;
    }
}
