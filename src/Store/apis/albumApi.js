import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const albumApi = createApi({
    reducerPath: 'album',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder){
        return{
            fetchAlbum: builder.query({
                query: (user) => {
                    return{
                        url: '/album',
                        params: {
                            userId: user.id
                        },
                        method: 'GET'
                    }
                }
            })
        }
    }
}) 

export const { useFetchAlbumQuery } = albumApi;
export { albumApi }