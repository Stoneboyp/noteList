import Pagination from "react-bootstrap/Pagination";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
interface Props {}

const NotePagging: React.FC<Props> = ({}) => {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>
        );
    }

    return (
        <div className="flex justify-between">
            <span>Назад</span>
            <Pagination className="" size="sm">
                {items}
            </Pagination>
            <span>Далее</span>
        </div>
    );
};

export default NotePagging;
