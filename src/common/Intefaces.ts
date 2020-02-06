import { ValidHistoryMatch } from "../api/AbstractYoBit";
import { ValueOf } from "../utils/typesCreator";

interface IResponse {
    success: 1
}

export type FundsType = {
    [key: string]: number
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
            pair: string,
            type: OrderType,
            amount: number,
            rate: number,
            timestamp_created: Date,
            status: number
        }
    }
}

export interface OrderInfo extends IResponse{
    return: {
        [key: string]: {
            pair: string,
            type: OrderType,
            start_amount: number,
            amount: number,
            rate: number,
            timestamp_created: Date,
            status: 1 | 0
        }
    }
}

export interface TradeParams {
    pair: string,
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

export interface OrderCancel extends IResponse{
    return: {
        order_id: number,
        funds: FundsType
    }
}

export interface RequestTradeHistory {
    fromOrderNumber: number,
    count: number,
    fromOrderId: number,
    endOrderId: number,
    orderSort: 'ASC' | 'DESC',
    sinceDate: number,
    endDate: number,
    pair: string
}

export type ValidHistoryRequest = {
    [key in ValueOf<ValidHistoryMatch>]: number | string
}

export interface ResponseTradeHistory extends IResponse {
    return: {
        [key: number]: {
            pair: string,
            type: OrderType,
            amount: number,
            rate: number,
            order_id: number,
            is_your_order: number,
            timestamp: number
        }
    }
}
