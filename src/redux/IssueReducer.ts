// Part 1
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// Part 2
export interface IIssueInitialState {
    projectIssues: string[]
}
const initialState: IIssueInitialState = {
    projectIssues: []
}

// Part 3
export const issueSlice = createSlice({
    name: 'issue',
    initialState,
    reducers: {
        addIssue: (state, action: PayloadAction<string>) => {
            state.projectIssues = [...state.projectIssues, action.payload]
        }
    }
})

// Part 4
export const { addIssue } = issueSlice.actions
export default issueSlice.reducer
