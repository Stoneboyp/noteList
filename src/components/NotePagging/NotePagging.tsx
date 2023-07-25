import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
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
            <button
                key={number}
                onClick={() => dispatch(setCurrentPage(number))}
                className={`${
                    number === currentPage ? "text-[#7EBC3C]" : "text-[#474955]"
                } px-3 py-1  mx-1 cursor-pointer font-bold text-lg`}
            >
                {number}
            </button>
        );
    }

    return (
        <div className="flex justify-between mt-3">
            <button
                className="text-[#474955] text-2xl"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
            >
                Назад
            </button>
            <div>{items}</div>
            <button
                className="text-[#474955] text-2xl"
                onClick={handleNextPage}
                disabled={currentPage === 10}
            >
                Далее
            </button>
        </div>
    );
};

export default NotePagging;
