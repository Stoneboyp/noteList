import React from "react";

interface Props {}

const NoteSearch: React.FC<Props> = ({}) => {
    const HandleSearch = (event: { target: { value: any } }) => {
        const searchQuery = event.target.value;
    };
    return (
        <div className="">
            <input
                className="w-1/2 h-[52px] bg-[#5A5C66] px-7 bg-image bg-[url(../../../src/assets/ic/search.svg)] bg-no-repeat bg-[center_right_28px]"
                type="search"
                placeholder="Поиск"
                onChange={HandleSearch}
            />
        </div>
    );
};

export default NoteSearch;
