const FAPI_URL = 'https://fapi.binance.com';

// *****************************
// ******** M A R K E T ********
// *****************************

export const PING = `${FAPI_URL}/fapi/v1/ping`;
export const SERVER_TIME = `${FAPI_URL}/fapi/v1/time`;
export const EXCHANGE_INFO = `${FAPI_URL}/fapi/v1/exchangeInfo`;
export const DEPTH = `${FAPI_URL}/fapi/v1/depth`;
export const TRADES = `${FAPI_URL}/fapi/v1/trades`;
export const AGG_TRADES = `${FAPI_URL}/fapi/v1/aggTrades`;
export const KLINES = `${FAPI_URL}/fapi/v1/klines`;
export const CONTINUOUS_KLINES = `${FAPI_URL}/fapi/v1/continuousKlines`;
export const MARK_PRICE_KLINES = `${FAPI_URL}/fapi/v1/markPriceKlines`;
export const PREMIUM_INDEX = `${FAPI_URL}/fapi/v1/premiumIndex`;
export const FUNDING_RATE = `${FAPI_URL}/fapi/v1/fundingRate`;
export const TICKER_24H = `${FAPI_URL}/fapi/v1/ticker/24hr`;
export const TICKER_PRICE = `${FAPI_URL}/fapi/v1/ticker/price`;
export const TICKER_ORDER_BOOK = `${FAPI_URL}/fapi/v1/ticker/bookTicker`;
export const OPEN_INTEREST = `${FAPI_URL}/fapi/v1/openInterest`;
export const OPEN_INTEREST_HIST = `${FAPI_URL}/futures/data/openInterestHist`;
export const TOP_LONG_SHORT_ACCOUNT_RATIO = `${FAPI_URL}/futures/data/topLongShortAccountRatio`;
export const TOP_LONG_SHORT_POSITION_RATIO = `${FAPI_URL}/futures/data/topLongShortPositionRatio`;
export const GLOBAL_LONG_SHORT_ACCOUNT_RATIO = `${FAPI_URL}/futures/data/globalLongShortAccountRatio`;
export const TAKER_LONG_SHORT_RATIO = `${FAPI_URL}/futures/data/takerlongshortRatio`;
export const INDEX_INFO = `${FAPI_URL}/fapi/v1/indexInfo`;
export const ASSET_INDEX = `${FAPI_URL}/fapi/v1/assetIndex`;

// *****************************
// ******* A C C O U N T *******
// *****************************

export const ACCOUNT = `${FAPI_URL}/fapi/v2/account`;
export const INCOME = `${FAPI_URL}/fapi/v1/income`;
export const POSITION_RISK = `${FAPI_URL}/fapi/v1/positionRisk`;
export const USER_TRADES = `${FAPI_URL}/fapi/v1/userTrades`;
export const BALANCE = `${FAPI_URL}/fapi/v2/balance`;
export const LEVERAGE_BRACKETS = `${FAPI_URL}/fapi/v1/leverageBracket`;
export const ADL_QUANTILE = `${FAPI_URL}/fapi/v1/adlQuantile`;
export const COMMISSION_RATE = `${FAPI_URL}/fapi/v1/commissionRate`;
export const MULTIASSETS_MARGIN = `${FAPI_URL}/fapi/v1/multiAssetsMargin`;

// *****************************
// ********* O R D E R *********
// *****************************

export const ORDER = `${FAPI_URL}/fapi/v1/order`;
export const BATCH_ORDERS = `${FAPI_URL}/fapi/v1/batchOrders`;
export const ALL_OPEN_ORDERS = `${FAPI_URL}/fapi/v1/allOpenOrders`;
export const COUNTDOWN_CANCEL_ALL = `${FAPI_URL}/fapi/v1/countdownCancelAll`;
export const OPEN_ORDERS = `${FAPI_URL}/fapi/v1/openOrders`;
export const OPEN_ORDER = `${FAPI_URL}/fapi/v1/openOrder`;
export const ALL_ORDERS = `${FAPI_URL}/fapi/v1/allOrders`;
export const FORCE_ORDERS = `${FAPI_URL}/fapi/v1/forceOrders`;

// *****************************
// ********* T R A D E *********
// *****************************

export const MARGIN_TYPE = `${FAPI_URL}/fapi/v1/marginType`;
export const LEVERAGE = `${FAPI_URL}/fapi/v1/leverage`;
export const POSITION_MARGIN = `${FAPI_URL}/fapi/v1/positionMargin`;
export const POSITION_SIDE = `${FAPI_URL}/fapi/v1/positionSide`;
export const TRADING_STATUS = `${FAPI_URL}/fapi/v1/apiTradingStatus`;
