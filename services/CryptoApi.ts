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
    getCryptosInfo: builder.query({
      query: (slug) => createRequest(`/v2/cryptocurrency/info?slug=${slug}`),
    }),
  }),
})
export const { useGetCryptosQuery, useGetCryptosInfoQuery } = cryptoApi
