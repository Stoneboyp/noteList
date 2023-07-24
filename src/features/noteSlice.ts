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
}

const initialState: NoteState = {
    notes: [],
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
    },
});

export const { setNotes, addNotes } = noteSlice.actions;
export default noteSlice.reducer;
