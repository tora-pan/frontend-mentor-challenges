import { useState } from 'react';
import './App.css';
import CenterContent from './components/CenterContent';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';

function App() {
    const [gridData, setGridData] = useState({
        rows: '',
        columns: '',
    });

    return (
        <>
            <div className="container">
                <LeftSidebar setData={setGridData} />
                <CenterContent gridData={gridData} />
                <RightSidebar />
            </div>
        </>
    );
}

export default App;
