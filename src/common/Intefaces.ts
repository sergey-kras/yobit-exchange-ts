import { EnumSymbols } from "./Symbols";
import { EnumPairs } from "./Pairs";

interface IResponse {
    success: 1
}

export type FundsType = {
    [key in EnumSymbols]: number
};

export type OrderType = 'buy' | 'sell';

export interface TradeInfo extends IResponse{
    return:
        {
            rights: {
                info: number,
                trade: number,
                deposit: number,
                withdraw: number
            },
            funds: FundsType,
            funds_incl_orders: FundsType,
            transaction_count: number,
            open_orders: number,
            server_time: Date
        }
}

export interface ActiveOrders extends IResponse{
    return: {
        [key: number]: {
            pair: keyof typeof EnumPairs,
            type: OrderType,
            amount: number,
            rate: number,
            timestamp_created: Date,
            status: number
        }
    }
}

export interface TradeParams {
    pair: keyof typeof EnumPairs,
    type: OrderType,
    rate: number,
    amount: number
}

export interface TradeResponse extends IResponse{
    return: {
        received: number,
        remains: number,
        order_id: number,
        funds: FundsType
    }
}
