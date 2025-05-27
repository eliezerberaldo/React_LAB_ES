import { useState } from 'react';

let nextId = 3;
const initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' },
];

export default function List3() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState(initialArtists);

    function handleClick() {
        const insertAt = 1;
        const nextArtists = [
            ...artists.slice(0, insertAt),
            { id: nextId++, name },
            ...artists.slice(insertAt)
        ];
        setArtists(nextArtists);
        setName('');
    }

    return (
        <div className="list-principal">
            <h1 className="list-h1">Inspiring sculptors:</h1>
            <input
                className="list-input"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button className="list-button" onClick={handleClick}>
                Insert
            </button>
            <ul className="list-ul">
                {artists.map(artist => (
                    <li key={artist.id} className="list-li">{artist.name}</li>
                ))}
            </ul>
        </div>
    );
}
