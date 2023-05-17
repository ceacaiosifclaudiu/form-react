import { createSlice } from '@reduxjs/toolkit'

export interface UserHaveAccountState {
    value: boolean
}

const initialState: UserHaveAccountState = {
    value: true,
}

export const userHaveAccount = createSlice({
    name: 'userHaveAccount',
    initialState,
    reducers: {
        goToSingup: (state) => {
            state.value = false
        },
        goToLogin: (state) => {
            state.value = true
        },
    },
})

// Action creators are generated for each case reducer function
export const { goToSingup, goToLogin } = userHaveAccount.actions

export default userHaveAccount.reducer