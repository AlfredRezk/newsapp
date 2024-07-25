import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    news:[], 
    error:false, 
    loading:false
}

const API = process.env.REACT_APP_NEWS_APIKEY
// Pending => loading
// Fullfield => have data 
// rejected => have error
export const getNews = createAsyncThunk(
    "getNews",  //action type
    async(thunkAPI, {rejectWithValue})=>{
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API}`
        try{

            const {data}= await axios(url)
            console.log(data);
            return data.articles
        }catch(error){
            console.log(error)
            return rejectWithValue("Something went wrong")
        }
    }  
)


const newsSlice = createSlice({
    name:"news",
    initialState,
    reducers:{
        clearNews(state){
            state.news = []
        }
    },
    extraReducers:({addCase})=>{
        addCase(getNews.pending, (state, action)=>{
            state.loading = true
        })
        .addCase(getNews.fulfilled, (state, action)=>{
            state.loading = false;
            state.news = action.payload;
        })
        .addCase(getNews.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }

})

export const {clearNews} = newsSlice.actions
export const newsReducer = newsSlice.reducer