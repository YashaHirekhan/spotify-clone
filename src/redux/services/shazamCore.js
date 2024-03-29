import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl:'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: ()=> {
                headers.set('X-RapidAPI-Key','f864c1e31bmsha0fbf0174b5de31p168b95jsn26646b606dc9')
                return headers;
            },
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({query:()=> '/charts/world'}),
        })
    });

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;