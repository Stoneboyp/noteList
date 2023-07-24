import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotes, addNotes } from "../../features/noteSlice";
import { Note } from "../../features/noteSlice";
import { RootState } from "../../store";

interface Props {}

const NoteList: React.FC<Props> = ({}) => {
    const dispatch = useDispatch();
    const currentPage = useSelector(
        (state: RootState) => state.note.currentPage
    );
    console.log(currentPage);

    const notes = useSelector((state: RootState) => state.note.notes);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                );
                if (response) {
                    dispatch(setNotes(response.data));
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedItems = notes.slice(startIndex, endIndex);
    return (
        <div className="w-4/5">
            <div className="bg-[#474955]  h-[54px] flex justify-between">
                <span>id</span>
                <button></button>
                <span>Заголовок</span>
                <button></button>
                <span>Описание</span>
                <button></button>
            </div>
            {notes && (
                <table>
                    <tbody>
                        {displayedItems.map((item: Note) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default NoteList;
