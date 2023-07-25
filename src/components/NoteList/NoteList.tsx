import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotes, addNotes } from "../../features/noteSlice";
import { Note } from "../../features/noteSlice";
import { RootState } from "../../store";

interface Props {}

const NoteList: React.FC<Props> = ({}) => {
    const [sortOrder, setSortOrder] = useState<"up" | "down">("up");

    const searchQuery = useSelector(
        (state: RootState) => state.note.searchQuery
    );
    const dispatch = useDispatch();
    const currentPage = useSelector(
        (state: RootState) => state.note.currentPage
    );
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
    const filteredNotes = notes.filter((note: Note) => {
        return (
            note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            note.body.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });
    useEffect(() => {
        dispatch(setNotes(filteredNotes));
    }, [searchQuery]);
    const sortById = () => {
        const sortedNotes = [...notes].sort((a, b) =>
            sortOrder === "up" ? a.id - b.id : b.id - a.id
        );
        dispatch(setNotes(sortedNotes));
    };
    const sortByTittle = () => {
        const sortedNotes = [...notes].sort((a, b) =>
            sortOrder === "down"
                ? a.title.localeCompare(b.title)
                : b.title.localeCompare(a.title)
        );
        dispatch(setNotes(sortedNotes));
    };

    const sortByBody = () => {
        const sortedNotes = [...notes].sort((a, b) =>
            sortOrder === "up"
                ? a.body.localeCompare(b.body)
                : b.body.localeCompare(a.body)
        );
        dispatch(setNotes(sortedNotes));
    };

    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedItems = notes.slice(startIndex, endIndex);
    const tableBorderStyle = {
        border: "1px solid #E3E6EC",
        padding: "5px",
    };
    const arrowStyle = {
        display: "flex",
        alignItems: "center",
    };
    return (
        <div className="w-11/12">
            <div className="bg-[#474955] text-white h-[54px] flex justify-between items-center px-[25px]">
                <div style={arrowStyle}>
                    <span>id</span>
                    <button onClick={sortById}>
                        <img
                            className="pl-10"
                            src="../../../src/assets/ic/arrow.svg"
                            alt=""
                        />
                    </button>
                </div>
                <div style={arrowStyle}>
                    <span>Заголовок</span>
                    <button onClick={sortByTittle}>
                        <img
                            className="pl-10"
                            src="../../../src/assets/ic/arrow.svg"
                            alt=""
                        />
                    </button>
                </div>
                <div style={arrowStyle} className="w-1/2 justify-center">
                    <span>Описание</span>
                    <button onClick={sortByBody}>
                        {" "}
                        <img
                            className="pl-10"
                            src="../../../src/assets/ic/arrow.svg"
                            alt=""
                        />
                    </button>
                </div>
            </div>
            {notes && (
                <table className="">
                    <tbody>
                        {displayedItems.map((item: Note) => {
                            return (
                                <tr key={item.id}>
                                    <td
                                        className="w-28"
                                        style={tableBorderStyle}
                                    >
                                        {item.id}
                                    </td>
                                    <td
                                        className="w-1/2 text-left"
                                        style={tableBorderStyle}
                                    >
                                        {item.title}
                                    </td>
                                    <td
                                        className="text-left"
                                        style={tableBorderStyle}
                                    >
                                        {item.body}
                                    </td>
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
