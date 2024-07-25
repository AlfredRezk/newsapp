import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const API = process.env.REACT_APP_NEWS_APIKEY
const initialState = {
    news:[], 
    error:false, 
    loading:false
}

const newsSlice = createSlice({
    name:'news',
    initialState, 
    reducers:{
        fetchNews(state, action){
            state.news = action.payload
            state.loading = false;
            state.error = false
        },
        setLoading(state, action){
            state.loading = action.payload
        }, 
        setError(state, action){
            state.error = action.payload
        }, 
        clearNews(state, action){
            state.news = []
        }
    }
})


// Async actions
export const getNews = ()=>{
    return async(dispatch)=>{
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API}`
        try{
            dispatch(newsSlice.actions.setLoading(true))
            const {data}= await axios(url)
            dispatch(newsSlice.actions.fetchNews(data.articles))
            dispatch(newsSlice.actions.setLoading(false))
        }catch(error){
            dispatch(newsSlice.actions.setLoading(false))
            dispatch(newsSlice.actions.setError("something went wrong"))

        }
    }
}

export const {clearNews} = newsSlice.actions
export const newsReducer = newsSlice.reducer