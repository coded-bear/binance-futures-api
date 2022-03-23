export interface SymbolParams {
  readonly symbol: string;
}

export interface OptionalSymbolParams {
  readonly symbol?: string;
}

export interface MultiAssetsMarginParams {
  readonly multiAssetsMargin?: boolean; // true -> Multi-Assets Mode, false -> Single-Asset Mode
}

export interface BatchOrdersParams {
  batchOrders: any[];
}

export interface SymbolCountdownTimeParams extends SymbolParams {
  countdownTime: number;
}

export interface SymbolOptionalOrdersIdParams extends SymbolParams {
  orderId?: number;
  origClientOrderId?: string;
}

export interface SymbolOrdersIdListParams extends SymbolParams {
  orderIdList?: number[];
  origClientOrderIdList: string[];
}

export interface SymbolSymbolsParams extends OptionalSymbolParams {
  readonly symbols?: string;
}

export interface SymbolLimitParams extends SymbolParams {
  readonly limit?: number;
}

export interface OptionalSymbolLimitParams extends OptionalSymbolParams {
  readonly limit?: number;
}

export interface SymbolLimitTimeParams extends SymbolLimitParams {
  readonly startTime?: number;
  readonly endTime?: number;
}

export interface OptionalSymbolLimitTimeParams extends OptionalSymbolLimitParams {
  readonly startTime?: number;
  readonly endTime?: number;
}

export interface SymbolLimitTimeOptionalOrderIdParams extends SymbolLimitTimeParams {
  orderId?: number;
}

export interface SymbolLimitTimePeriodParams extends SymbolLimitTimeParams {
  readonly period: string;
}

export interface SymbolLimitTimeFromIdParams extends SymbolLimitTimeParams {
  readonly fromId?: string;
}

export interface KlinesParams extends SymbolLimitTimeParams {
  readonly interval: string;
}

export interface DualSidePositionParams {
  readonly dualSidePosition: boolean; // true -> Hedge Mode, false -> One-way Mode
}

export interface SymbolMarginTypeParams extends SymbolParams {
  readonly marginType: 'ISOLATED' | 'CROSSED';
}

export interface SymbolLeverageParams extends SymbolParams {
  readonly leverage: number;
}

export interface SymbolLimitTimeTypeParams extends SymbolLimitTimeParams {
  type?: number; // 	1 -> Add position margin，2 -> Reduce position margin
}

export interface ContinuousKlinesParams {
  readonly pair: string;
  readonly contractType:
    | 'PERPETUAL'
    | 'CURRENT_MONTH'
    | 'NEXT_MONTH'
    | 'CURRENT_QUARTER'
    | 'NEXT_QUARTER';
  readonly interval: string;
  readonly startTime?: number;
  readonly endTime?: number;
  readonly limit?: number;
}

export interface IncomeHistoryParams extends OptionalSymbolLimitTimeParams {
  readonly incomeType?:
    | 'TRANSFER'
    | 'WELCOME_BONUS'
    | 'REALIZED_PNL'
    | 'FUNDING_FEE'
    | 'COMMISSION'
    | 'INSURANCE_CLEAR'
    | 'REFERRAL_KICKBACK'
    | 'COMMISSION_REBATE'
    | 'DELIVERED_SETTELMENT'
    | 'COIN_SWAP_DEPOSIT'
    | 'COIN_SWAP_WITHDRAW';
}

export interface PositionMarginParams extends SymbolParams {
  positionSide?: 'BOTH' | 'LONG' | 'SHORT';
  amount: number;
  type: number; // 1 -> add position margin, 2 -> reduce position margin
}

export interface ForceOrdersParams extends OptionalSymbolLimitTimeParams {
  autoCloseType?: 'LIQUIDATION' | 'ADL';
}

export interface NewOrderParams extends SymbolParams {
  side: 'BUY' | 'SELL';
  positionSide?: 'BOTH' | 'LONG' | 'SHORT';
  type:
    | 'LIMIT'
    | 'MARKET'
    | 'STOP'
    | 'STOP_MARKET'
    | 'TAKE_PROFIT'
    | 'TAKE_PROFIT_MARKET'
    | 'TRAILING_STOP_MARKET';
  timeInForce?: 'GTC' | 'IOC' | 'FOK' | 'GTX';
  quantity: number;
  reduceOnly?: 'TAKE_PROFIT' | 'TAKE_PROFIT_MARKET' | 'STOP' | 'STOP_MARKET';
  price?: number;
  newClientOrderId?: number;
  stopPrice?: number;
  closePosition?: boolean;
  activationPrice?: number;
  callbackRate?: number;
  workingType?: 'MARK_PRICE' | 'CONTRACT_PRICE';
  newOrderRespType?: 'ACK' | 'RESULT';
}
