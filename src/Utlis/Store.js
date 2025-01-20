import { configureStore } from "@reduxjs/toolkit";
import menUSlice from "./MenuSlice";
import searchSlice from "./SearchSlice";
import ChatSlice from './ChatSlice';

 const store = configureStore({
    reducer:{
        app: menUSlice,
        search: searchSlice,
        chat: ChatSlice,
    }
});

export default store;

