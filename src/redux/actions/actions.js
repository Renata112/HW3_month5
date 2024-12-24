export const GET_FETCH_BRAND = 'GET_FETCH_BRAND'


export const fetchSuccessBrand = (data) => {
    return{
        type: GET_FETCH_BRAND,
        payload: data
    }
}
export const getAsyncDataBrand = (data) => {
    return async (dispatch) => {
        try{
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            dispatch(fetchSuccessBrand(data))
        }catch (e){
            console.log(e)
        }
    }
}