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
// Name of your slice, initial state, and reducers
export const issueSlice = createSlice({
    name: 'issue', 
    initialState, 
    reducers: { 
        // PayloadAction<string> is the type of the "payload" field
        addIssue: (state, action: PayloadAction<string>) => {
            state.projectIssues = [...state.projectIssues, action.payload]
        }
    }
})

// Part 4
export const { addIssue } = issueSlice.actions
export default issueSlice.reducer
