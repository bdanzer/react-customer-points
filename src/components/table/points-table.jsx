import React from "react";

import "./points-table.scss";

export default function PointsTable({ children, data, headers }) {
    return (
        <div className="table-wrap">
            <table id="customers">
                <tbody>
                    <tr>
                        {headers.map((header) => (
                            <th>{header}</th>
                        ))}
                    </tr>
                    {Object.keys(data).map((key, i) => children(data[key], i))}
                </tbody>
            </table>
        </div>
    );
}
