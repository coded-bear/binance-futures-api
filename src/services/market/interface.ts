export interface SymbolParams {
  readonly symbol: string;
}

export interface OptionalSymbolParams {
  readonly symbol?: string;
}

export interface SymbolSymbolsParams extends OptionalSymbolParams {
  readonly symbols?: string;
}

export interface SymbolLimitParams extends SymbolParams {
  readonly limit?: number;
}

export interface SymbolLimitTimeParams extends SymbolLimitParams {
  readonly startTime?: number; // timestamp
  readonly endTime?: number; // timestamp
}

export interface SymbolLimitTimePeriodParams extends SymbolLimitTimeParams {
  readonly period: string;
}

export interface CompressedTradesParams extends SymbolLimitTimeParams {
  readonly fromId?: string;
}

export interface KlinesParams extends SymbolLimitTimeParams {
  readonly interval: string;
}

export interface ContinuousKlinesParams {
  readonly pair: string;
  readonly contractType: string;
  readonly interval: string;
  readonly startTime?: number; // timestamp
  readonly endTime?: number; // timestamp
  readonly limit?: number;
}
