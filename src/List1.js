import { useState } from 'react';

let nextId = 0;

export default function List1() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    return (
        <div className="list-principal">
            <h1 className="list-h1">Inspiring sculptors:</h1>
            <input
                className="list-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button
                className="list-button"
                onClick={() => {
                    if (name.trim() === '') return;
                    setArtists([...artists, { id: nextId++, name: name.trim() }]);
                    setName('');
                }}
            >
                Add
            </button>
            <ul className="list-ul">
                {artists.map((artist) => (
                    <li key={artist.id} className="list-li">{artist.name}</li>
                ))}
            </ul>
        </div>
    );
}
