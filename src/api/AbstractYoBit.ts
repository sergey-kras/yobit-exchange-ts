import { YoBitOptions } from '../common/YoBitOptions';
import request from 'request-promise';
import { getAuthHeaders } from '../common/Athentificate';
import { getNonce } from '../utils/getNonce.utils';

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
            url: 'https://yobit.net/' + path,
            method: 'POST',
            form: extraData,
            headers: getAuthHeaders({
                secret: this.secret,
                key: this.key,
                data: extraData
            })
        };

        return request(requestOptions);
    }
}
