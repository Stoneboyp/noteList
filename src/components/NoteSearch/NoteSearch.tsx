import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../features/noteSlice";

interface Props {}

const NoteSearch: React.FC<Props> = ({}) => {
    const [localSearchQuery, setLocalSearchQuery] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSearchQuery(localSearchQuery));
    }, [localSearchQuery]);
    return (
        <div className="flex mb-4">
            <input
                className="w-1/2 h-[52px] bg-[#5A5C66] px-7 bg-image bg-[url(../../../src/assets/ic/search.svg)] bg-no-repeat bg-[center_right_28px]"
                placeholder="Поиск"
                value={localSearchQuery}
                onChange={(event) => setLocalSearchQuery(event.target.value)}
            />
        </div>
    );
};

export default NoteSearch;
