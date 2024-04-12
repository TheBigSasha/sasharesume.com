import { useLiveQuery } from 'next-sanity/preview'
export const usePreview = ( token, query, data?) => {
    return useLiveQuery(null, query, data)[0]
}