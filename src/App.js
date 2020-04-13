import React, { useEffect, useState } from "react";

import { transactionsData } from "./api/api";
import { filterDates, getMonthsBack } from "./utils/dates";

import PointsTable from "./components/table/points-table";
import TableRow from "./components/table/table-row";

import "./styles.css";

export default function App() {
    const [transactions, setTransactionsData] = useState();
    const [months, setMonths] = useState([]);

    const getTransactions = async () => {
        let tData = await transactionsData;

        const [initialDate, movedDate, monthsInRange] = getMonthsBack(
            "11/15/2018",
            3
        );

        setMonths(monthsInRange);

        tData = filterDates(tData, initialDate, movedDate, monthsInRange);

        setTransactionsData(tData);
    };

    useEffect(() => {
        getTransactions();
    }, []);

    return (
        <div className="App">
            <h1>Points Per Customer</h1>
            {transactions && (
                <PointsTable
                    headers={["Name", ...months, "Total"]}
                    data={transactions}
                >
                    {(rowData, i) => (
                        <TableRow
                            key={i}
                            name={rowData.name}
                            points={rowData.amount}
                            months={rowData.months}
                        />
                    )}
                </PointsTable>
            )}
        </div>
    );
}
