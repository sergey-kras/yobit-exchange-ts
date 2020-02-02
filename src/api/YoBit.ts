import { AbstractYoBit } from "./AbstractYoBit";
import {YoBitOptions} from "../common/YoBitOptions";

export class YoBit extends AbstractYoBit{
    constructor(options: YoBitOptions){
        super(options);
    }

    getInfo() {
        return this.request({
            method: "getInfo",
            data: null,
            path: "tapi/"
        });
    }
}
