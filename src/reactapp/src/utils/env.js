const {
  REACT_APP_BASE_URL: baseUrl,
  REACT_APP_LANGUAGE: language,
  REACT_APP_STORE_CODE: storeCode,
  REACT_APP_CURRENCY_CODE: currencyCode,
  REACT_APP_CURRENCY_SYMBOL: currencySymbol,
} = process.env;

export default {
  baseUrl,
  language,
  storeCode,
  currencyCode,
  currencySymbol,
};