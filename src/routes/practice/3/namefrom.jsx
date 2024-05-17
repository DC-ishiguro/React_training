import React, { useState } from 'react';

const NameForm = () => {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`名前: ${name}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                名前:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <button type="submit">送信</button>
        </form>
        // <button onClick={ }><alert>{name}</alert></button>
    );
};

export default NameForm;