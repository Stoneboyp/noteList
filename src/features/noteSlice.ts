// src/features/noteSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Note {
    body: string;
    id: number;
    title: string;
    userId: number;
}

interface NoteState {
    notes: Note[];
    currentPage: number;
}

const initialState: NoteState = {
    notes: [],
    currentPage: 1,
};

const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {
        setNotes: (state, action: PayloadAction<Note[]>) => {
            state.notes = action.payload;
        },
        addNotes: (state, action: PayloadAction<Note>) => {
            state.notes.push(action.payload);
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
    },
});

export const { setNotes, addNotes, setCurrentPage } = noteSlice.actions;
export default noteSlice.reducer;
