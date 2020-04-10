import React from "react";

import "./table-row.scss";

export default function TableRow({ name, points, months }) {
    return (
        <tr>
            <td>{name}</td>
            {months.map((month) => (
                <td>{month.amount}</td>
            ))}
            <td>{points}</td>
        </tr>
    );
}
