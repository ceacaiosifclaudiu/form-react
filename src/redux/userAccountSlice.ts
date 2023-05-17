import { createSlice } from '@reduxjs/toolkit'

export interface UserAccount {
    email: string
    name: string
    picture: string
    family_name: string
    given_name: string
}

const initialState: UserAccount = {
    email: "",
    name: "",
    picture: "",
    family_name: "",
    given_name: ""
}

export const userAccount = createSlice({
    name: 'userAccount',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email
            state.name = action.payload.name
            state.picture = action.payload.picture
            state.family_name = action.payload.family_name
            state.given_name = action.payload.given_name
        },
        logOut: (state) => {
            state.email = ""
            state.name = ""
            state.picture = ""
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser, logOut } = userAccount.actions

export default userAccount.reducer