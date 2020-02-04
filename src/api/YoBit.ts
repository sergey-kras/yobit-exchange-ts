import { AbstractYoBit } from "./AbstractYoBit";
import { YoBitOptions } from "../common/YoBitOptions";
import { ActiveOrders, TradeInfo, TradeParams } from "../common/Intefaces";
import { EnumPairs } from "../common/Pairs";

export class YoBit extends AbstractYoBit{
    constructor(options: YoBitOptions){
        super(options);
    }

    getInfo(): Promise<TradeInfo> {
        return this.request({
            method: "getInfo",
            data: null,
            path: "tapi/"
        });
    }

    getActiveOrders(pair: keyof typeof EnumPairs): Promise<ActiveOrders> {
        return this.request({
            method: "ActiveOrders",
            data: { pair },
            path: "tapi/"
        });
    }

    Trade(data: TradeParams) {
        return this.request({
            method: "Trade",
            data,
            path: "tapi/"
        });
    }


}
