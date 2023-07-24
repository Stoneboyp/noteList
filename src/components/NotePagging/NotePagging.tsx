import Pagination from "react-bootstrap/Pagination";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store"; // Update the path based on your store configuration
import { setCurrentPage } from "../../features/noteSlice";

interface Props {}

const NotePagging: React.FC<Props> = ({}) => {
    const dispatch = useDispatch();
    const currentPage = useSelector(
        (state: RootState) => state.note.currentPage
    );

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1));
        }
    };

    const handleNextPage = () => {
        if (currentPage < 10) {
            dispatch(setCurrentPage(currentPage + 1));
        }
    };

    let items = [];
    for (let number = 1; number <= 10; number++) {
        items.push(
            <Pagination.Item key={number} active={number === currentPage}>
                {number}
            </Pagination.Item>
        );
    }

    return (
        <div className="flex justify-between">
            <button onClick={handlePreviousPage}>Назад</button>
            <Pagination className="" size="sm">
                {items}
            </Pagination>
            <button onClick={handleNextPage}>Далее</button>
        </div>
    );
};

export default NotePagging;
