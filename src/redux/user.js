import { createSlice } from '@reduxjs/toolkit'
import { USER_STATE_CHANGE } from './constants'
import { db, auth } from "../../firebase";
import {  getDoc, doc, startAfter} from "firebase/firestore";

const initialState = {
  currentUser: null
}

export const userSlice = createSlice({
  name: USER_STATE_CHANGE,
  initialState,
  reducers: {
        fetchUser: () => {
            getDoc(doc(db, "users", auth.currentUser.uid))
            .then((snapshot) => {
                if(snapshot.exists){
                   currentUser = { type: USER_STATE_CHANGE, payload: { uid: auth.currentUser.uid, ...snapshot.data() } }
    
                }else{
                    console.log('error')
                }
            })
        }
  },
})


// Action creators are generated for each case reducer function
export const { fetchUser } = userSlice.actions

export default userSlice.reducer