import { AbstractYoBit } from "./AbstractYoBit";
import { YoBitOptions } from "../common/YoBitOptions";
import {
    ActiveOrders,
    OrderCancel,
    OrderInfo,
    RequestTradeHistory,
    ResponseTradeHistory,
    TradeInfo,
    TradeParams,
    TradeResponse
} from "../common/Intefaces";

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

    getOrderInfo(orderId: string): Promise<OrderInfo> {
        return this.request({
            method: "OrderInfo",
            data: { order_id: orderId },
            path: "tapi/"
        });
    }

    getTradeHistory(filters: RequestTradeHistory): Promise<ResponseTradeHistory> {
        const data = this.getValidHistoryRequest(filters);

        return this.request({
            method: "TradeHistory",
            data,
            path: "tapi/"
        });
    }

    trade(data: TradeParams): Promise<TradeResponse> {
        return this.request({
            method: "Trade",
            data,
            path: "tapi/"
        });
    }

    cancelOrder(orderId: string): Promise<OrderCancel> {
        return this.request({
            method: "CancelOrder",
            data: { order_id: orderId },
            path: "tapi/"
        });
    }
}
