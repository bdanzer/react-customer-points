import React from "react";

import "./table-row.scss";

export default function TableRow({ name, points, months }) {
    return (
        <tr>
            <td>{name}</td>
            {months.map((month, i) => (
                <td key={i}>{month.amount}</td>
            ))}
            <td>{points}</td>
        </tr>
    );
}
