import { AbstractYoBit } from "./AbstractYoBit";
import { YoBitOptions } from "../common/YoBitOptions";
import { ActiveOrders, TradeInfo, TradeParams, TradeResponse } from "../common/Intefaces";

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

    getActiveOrders(pair: string): Promise<ActiveOrders> {
        return this.request({
            method: "ActiveOrders",
            data: { pair },
            path: "tapi/"
        });
    }

    Trade(data: TradeParams): Promise<TradeResponse> {
        return this.request({
            method: "Trade",
            data,
            path: "tapi/"
        });
    }


}
