import { createSlice } from '@reduxjs/toolkit'

export interface UserAccount {
    email: string
    name: string
    pictures: string
}

const initialState: UserAccount = {
    email: "",
    name: "",
    pictures: ""
}

export const userAccount = createSlice({
    name: 'userAccount',
    initialState,
    reducers: {
        setUser: (state, action) => {
            console.log(action.payload)
            state.email = action.payload.email
            state.name = action.payload.name
            state.pictures = action.payload.pictures
        },
        logOut: (state) => {
            state.email = ""
            state.name = ""
            state.pictures = ""
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser, logOut } = userAccount.actions

export default userAccount.reducer