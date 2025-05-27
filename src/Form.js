import { useState } from 'react';

export default function Form() {
    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('Hello');

    function handleSubmit(e) {
        e.preventDefault(); 
        setTimeout(() => {
            alert(`You said "${message}" to ${to}`);
        }, 500);
    }

    return (
        <form className="form-principal" onSubmit={handleSubmit}>
            <label className="form-label">
                To:{' '}
                <select
                    className="form-select"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                >
                    <option value="Alice">Alice</option>
                    <option value="Bob">Bob</option>
                </select>
            </label>
            <br />
            <textarea
                className="form-textarea"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <br />
            <button className="form-button" type="submit">Send</button>
        </form>
    );
}
