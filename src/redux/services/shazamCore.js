import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery : fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '8d0f4d48a5msh704d2d982ab8a9ap161e03jsn927d74fc0720');

            return headers;
        },
    }),
    endpoints : (builder) => ({
        getTopCharts : builder.query({query: () => `/charts/world`})
    })
});
export const {
    useGetTopChartsQuery,
} = shazamCoreApi;