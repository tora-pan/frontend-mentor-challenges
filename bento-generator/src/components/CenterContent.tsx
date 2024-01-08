import { useEffect, useState } from 'react';
import './centerContentStyles.css';
import styled from 'styled-components';

const StyledCenterContent = styled.div`
    background-color: #a88484;
    height: 100vh;
    width: 100%;
    display: flex;
`;

type Props = {
    gridData: { rows: string; columns: string };
};

type GridItem = {
    id: number;
    style: {
        gridArea: string;
    };
};

const CenterContent = (props: Props) => {
    const [gridItems, setGridItems] = useState([]);

    useEffect(() => {
    //     const generateRandomGrid = () => {
    //         const items = [];
    //         let idCounter = 1;
    //         const occupiedCells = new Set();

    //         const isCellOccupied = (row, col, rowSpan, colSpan) => {
    //             for (let i = row; i < row + rowSpan; i++) {
    //                 for (let j = col; j < col + colSpan; j++) {
    //                     if (occupiedCells.has(`${i}-${j}`)) {
    //                         return true; // Cell is occupied
    //                     }
    //                 }
    //             }
    //             return false; // Cell is not occupied
    //         };

    //         for (let i = 1; i <= parseInt(props.gridData.rows); i++) {
    //             for (let j = 1; j <= parseInt(props.gridData.columns); j++) {
    //                 let rowSpan, colSpan;

    //                 // Keep generating random spans until an unoccupied cell is found
    //                 do {
    //                     rowSpan = 1 + Math.floor(Math.random() * 3); // Random row span (1-3)
    //                     colSpan = 1 + Math.floor(Math.random() * 3); // Random column span (1-3)
    //                 } while (isCellOccupied(i, j, rowSpan, colSpan));

    //                 const gridArea = {
    //                     gridArea: `${i} / ${j} / ${i + rowSpan} / ${
    //                         j + colSpan
    //                     }`,
    //                 };

    //                 // Mark the occupied cells
    //                 for (let k = i; k < i + rowSpan; k++) {
    //                     for (let l = j; l < j + colSpan; l++) {
    //                         occupiedCells.add(`${k}-${l}`);
    //                     }
    //                 }

    //                 items.push({ id: idCounter++, style: gridArea });
    //                 console.log(items);
    //             }
    //         }

    //         setGridItems(items);
    //     };

    //     generateRandomGrid();
    // }, [props.gridData.rows, props.gridData.columns]);

    return (
        <StyledCenterContent>
            <div className="parent">
                {gridItems.map((item) => (
                    <div
                        key={item.id}
                        style={item.style}
                        className={`div${item.id}`}
                    >
                        {item.id}
                    </div>
                ))}
            </div>
        </StyledCenterContent>
    );
};

export default CenterContent;
