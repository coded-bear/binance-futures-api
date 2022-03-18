export interface SymbolParams {
  readonly symbol: string;
}

export interface OptionalSymbolParams {
  readonly symbol?: string;
}

export interface MultiAssetsMarginParams {
  readonly multiAssetsMargin?: boolean;
}

export interface BatchOrdersParams {
  batchOrders: any;
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
  readonly startTime?: number; // timestamp
  readonly endTime?: number; // timestamp
}

export interface OptionalSymbolLimitTimeParams extends OptionalSymbolLimitParams {
  readonly startTime?: number; // timestamp
  readonly endTime?: number; // timestamp
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
  readonly dualSidePosition: boolean;
}

export interface SymbolMarginTypeParams extends SymbolParams {
  readonly marginType: string;
}

export interface SymbolLeverageParams extends SymbolParams {
  readonly leverage: number;
}

export interface SymbolLimitTimeTypeParams extends SymbolLimitTimeParams {
  type?: number;
}

export interface ContinuousKlinesParams {
  readonly pair: string;
  readonly contractType: string;
  readonly interval: string;
  readonly startTime?: number; // timestamp
  readonly endTime?: number; // timestamp
  readonly limit?: number;
}

export interface IncomeHistoryParams extends OptionalSymbolLimitTimeParams {
  readonly incomeType?: string;
}

export interface PositionMarginParams extends SymbolParams {
  positionSide?: string;
  amount: number;
  type: number;
}

export interface ForceOrdersParams extends OptionalSymbolLimitTimeParams {
  autoCloseType?: string;
}

export interface NewOrderParams extends SymbolParams {
  side: any;
  positionSide?: string;
  type: any;
  timeInForce?: any;
  quantity: number;
  reduceOnly?: any;
  price: number;
  newClientOrderId?: number;
  stopPrice?: number;
  closePosition?: boolean;
  activationPrice?: any;
  callbackRate?: number;
  workingType?: string;
  newOrderRespType?: string;
}
