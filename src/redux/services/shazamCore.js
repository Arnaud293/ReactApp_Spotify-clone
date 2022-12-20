import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery : fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '8d0f4d48a5msh704d2d982ab8a9ap161e03jsn927d74fc0720');

            return headers;
        },
    }),
    endpoints : (builder) => ({
        getTopCharts : builder.query({query: () => `v1/charts/world`}),
        getSongDetails: builder.query({query :({ songid }) => `v1/tracks/details?track_id=${songid}` }),
        getSongRelated : builder.query({query :({ songid }) => `v1/tracks/related?track_id=${songid}`}),
        getArtistDetails : builder.query({query:(artistId) => `v2/artists/details?artist_id=${artistId}` }),
        
    })
});
export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
} = shazamCoreApi;