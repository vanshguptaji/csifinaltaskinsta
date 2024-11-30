import { createSlice } from "@reduxjs/toolkit";
const postSlice = createSlice({
    name:'post',
    initialState:{
        allposts:[],
        posts:[],
        Hposts:[],
        selectedPost:null,
    },
    reducers:{
        //actions
        setPosts:(state,action) => {
            state.posts = action.payload;
        },
        setHposts:(state,action) => {
            state.Hposts = action.payload;
        },
        setAllPosts:(state,action) => {
            state.allposts = action.payload;
        },
        setSelectedPost:(state,action) => {
            state.selectedPost = action.payload;
        }
    }
});
export const {setAllPosts, setHposts, setPosts, setSelectedPost} = postSlice.actions;
export default postSlice.reducer;