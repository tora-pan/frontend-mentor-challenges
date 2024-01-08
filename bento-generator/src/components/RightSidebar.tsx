import styled from 'styled-components';

const StyledRightSidebar = styled.div`
    background-color: red;
    width: 20vw;
    height: 100vh;
`;

type Props = {};

const RightSidebar = (props: Props) => {
    return (
            <StyledRightSidebar>Right Sidebar</StyledRightSidebar>
    );
};

export default RightSidebar;
