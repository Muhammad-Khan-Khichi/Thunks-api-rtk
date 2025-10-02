import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const albumApi = createApi({
    reducerPath: 'album',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005'
    }),
    endpoints(builder){
        return{
            removeAlbum: builder.mutation({
                invalidatesTags: (result, error, album) => {
                    return [{ type: 'Album', id: album.userId}]
                },
                query: (album) => {
                    return{
                        url: `/albums/${album.id}`,
                        method: 'DELETE'
                    }
                }
            }),
            addAlbum: builder.mutation({
                invalidatesTags: (result, error, user) => {
                    return [{ type: 'Album', id: user.id }]
                },
                query: (user) => {
                    return{
                        url: '/album',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            title: faker.commerce.productName()
                        }
                    }
                }
            }),
            fetchAlbum: builder.query({
                providesTags: (result, error, user) => {
                    return [{type: 'Album', id: user.id}]
                },
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

export const { 
    useFetchAlbumQuery, 
    useAddAlbumMutation,
    useRemoveAlbumMutation
} = albumApi;
export { albumApi }