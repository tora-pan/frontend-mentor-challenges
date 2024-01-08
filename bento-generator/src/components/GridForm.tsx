import { useState } from 'react';

const YourFormComponent = ({ formData, onFormChange, onFormSubmit }) => {
    const [innerFormData, setInnerFormData] = useState({
        rows: '',
        columns: '',
    });
    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        setInnerFormData({
            ...innerFormData,
            [e.target.name]: e.target.value,
        });
        onFormChange({
            ...innerFormData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(formData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Rows:
                    <input
                        type="text"
                        name="rows"
                        value={innerFormData.rows}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Columns:
                    <input
                        type="text"
                        name="columns"
                        value={innerFormData.columns}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default YourFormComponent;
