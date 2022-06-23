import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'X-CMC_PRO_API_KEY': 'f3002d03-f86f-4c88-86d3-9f109ab60dd4',
}
const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders })
export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pro-api.coinmarketcap.com' }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/v1/cryptocurrency/listings/latest'),
    }),
    // getCryptosInfo: builder.query({
    //   query: () => createRequest('/v2/cryptocurrency/info?symbol=BTC'),
    // }),
    // getCryptos: builder.query({
    //   query: (count) => createRequest(`/coins?limit=${count}`),
    // }),
    // getCryptoDetails: builder.query({
    //   query: (coinId) => createRequest(`/coin/${coinId}`),
    // }),
    // getCryptoHistory: builder.query({
    //   query: ({ coinId, timeperiod }) =>
    //     createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    // }),
    // getExchanges: builder.query({
    //   query: () => createRequest('/exchanges'),
    // }),
  }),
})
export const {
  useGetCryptosQuery,
  // useGetCryptosInfoQuery,
  // useGetCryptoDetailsQuery,
  // useGetExchangesQuery,
  // useGetCryptoHistoryQuery,
} = cryptoApi
