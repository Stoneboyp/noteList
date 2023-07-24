import React from "react";
import NoteSearch from "../NoteSearch/NoteSearch";
import NoteList from "../NoteList/NoteList";
import NotePagging from "../NotePagging/NotePagging";

interface Props {}

const Home: React.FC<Props> = ({}) => {
    return (
        <div className="w-full bg-white">
            <NoteSearch />
            <NoteList />
            <NotePagging />
        </div>
    );
};

export default Home;
