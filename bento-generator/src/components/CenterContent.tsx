import { useEffect, useState } from 'react';
import './centerContentStyles.css';
import styled from 'styled-components';

const StyledCenterContent = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    gap: 1rem;
`;

const StyledGridItem = styled.div<{ height: number }>`
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.75rem;
    border-width: 2px;
    border: 1px solid #333d51;
    height: ${(props) => props.height}px;
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
    return (
        <StyledCenterContent>
        {[
                [24, 32, 32, 16, 16],
                [32, 40, 56],
                [64, 32, 32],
            ].map((card, index) => {
                console.log('card', card);
                return (
                    <div className="inner" key={index}>
                        {card.map((height, index) => (
                            <StyledGridItem height={height} key={index}>
                                test
                            </StyledGridItem>
                        ))}
                    </div>
                );
            })}
        </StyledCenterContent>
    );
};

export default CenterContent;
