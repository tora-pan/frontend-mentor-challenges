import { useState } from 'react';
import styled from 'styled-components';
import GridForm from './GridForm';

const StyledSidebar = styled.div<{ open: boolean }>`
    position: relative;
    background-color: red;
    padding: 100px 0;
    width: 20vw;
    height: 100vh;
    ${(props) => (props.open ? 'display: none;' : '')}
`;

const StyledButton = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    background-color: blue;
    width: 100px;
    height: 50px;
`;

type Props = {
    setData: (data: { rows: string; columns: string }) => void;
};

const LeftSidebar = (props: Props) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const [formData, setFormData] = useState({
        rows: '',
        columns: '',
    });

    const handleFormChange = (newFormData) => {
        props.setData(newFormData);
    };

    const handleFormSubmit = (formData) => {
        // Do something with the form data in the parent component
        console.log('Form data submitted:', formData);
        props.setData(formData);
    };

    return (
        <div>
            <StyledSidebar open={sidebarOpen}>
                Grid Settings
                <GridForm
                    formData={formData}
                    onFormChange={handleFormChange}
                    onFormSubmit={handleFormSubmit}
                />
            </StyledSidebar>
            <StyledButton onClick={toggleSidebar}>here</StyledButton>
        </div>
    );
};

export default LeftSidebar;
