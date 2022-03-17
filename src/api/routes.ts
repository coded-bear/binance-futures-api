const FAPI_URL = 'https://fapi.binance.com';

// *****************************
// ******** M A R K E T ********
// *****************************

export const GET_PING = `${FAPI_URL}/fapi/v1/ping`;
export const GET_SERVER_TIME = `${FAPI_URL}/fapi/v1/time`;
export const GET_EXCHANGE_INFO = `${FAPI_URL}/fapi/v1/exchangeInfo`;
export const GET_ORDER_BOOK = `${FAPI_URL}/fapi/v1/depth`;
export const GET_RECENT_TRADES = `${FAPI_URL}/fapi/v1/trades`;
export const GET_COMPRESSED_TRADES = `${FAPI_URL}/fapi/v1/aggTrades`;
export const GET_KLINES = `${FAPI_URL}/fapi/v1/klines`;
export const GET_CONTINUOUS_KLINES = `${FAPI_URL}/fapi/v1/continuousKlines`;
export const GET_MARK_PRICE_KLINES = `${FAPI_URL}/fapi/v1/markPriceKlines`;
export const GET_MARK_PRICE = `${FAPI_URL}/fapi/v1/premiumIndex`;
export const GET_FUNDING_RATE_HIST = `${FAPI_URL}/fapi/v1/fundingRate`;
export const GET_24H_TICKER_PRICE = `${FAPI_URL}/fapi/v1/ticker/24hr`;
export const GET_PRICE_TICKER = `${FAPI_URL}/fapi/v1/ticker/price`;
export const GET_ORDER_BOOK_TICKER = `${FAPI_URL}/fapi/v1/ticker/bookTicker`;
export const GET_OPEN_INTEREST = `${FAPI_URL}/fapi/v1/openInterest`;
export const GET_OPEN_INTEREST_HIST = `${FAPI_URL}/futures/data/openInterestHist`;
export const GET_TOP_LONG_SHORT_ACC_RATIO = `${FAPI_URL}/futures/data/topLongShortAccountRatio`;
export const GET_TOP_LONG_SHORT_POS_RATIO = `${FAPI_URL}/futures/data/topLongShortPositionRatio`;
export const GET_GLOBAL_LONG_SHORT_ACC_RATIO = `${FAPI_URL}/futures/data/globalLongShortAccountRatio`;
export const GET_TAKER_LONG_SHORT_RATIO = `${FAPI_URL}/futures/data/takerlongshortRatio`;
export const GET_INDEX_INFO = `${FAPI_URL}/fapi/v1/indexInfo`;
export const GET_ASSET_INDEX = `${FAPI_URL}/fapi/v1/assetIndex`;

// *****************************
// ******* A C C O U N T *******
// *****************************

export const GET_ACCOUNT_INFO = `${FAPI_URL}/fapi/v2/account`;
export const GET_INCOME_HIST = `${FAPI_URL}/fapi/v1/income`;
export const GET_POSITION_INFO = `${FAPI_URL}/fapi/v1/positionRisk`;
export const GET_ACCOUNT_TRADE_LIST = `${FAPI_URL}/fapi/v1/userTrades`;
export const GET_ACCOUNT_BALANCE = `${FAPI_URL}/fapi/v2/balance`;
export const GET_LEVERAGE_BRACKETS = `${FAPI_URL}/fapi/v1/leverageBracket`;
export const GET_POSITION_ADL_QUANTILE = `${FAPI_URL}/fapi/v1/adlQuantile`;
export const GET_USER_COMMISSION_RATE = `${FAPI_URL}/fapi/v1/commissionRate`;
export const GET_MULTIASSETS_MODE = `${FAPI_URL}/fapi/v1/multiAssetsMargin`;
export const POST_MULTIASSETS_MODE = `${FAPI_URL}/fapi/v1/multiAssetsMargin`;

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
