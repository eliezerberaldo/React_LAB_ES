import { useState } from 'react';

let initialList = [
    { id: 0, title: 'Big Bellies' },
    { id: 1, title: 'Lunar Landscape' },
    { id: 2, title: 'Terracotta Army' },
];

export default function List4() {
    const [list, setList] = useState(initialList);

    function handleClick() {
        const nextList = [...list];
        nextList.reverse();
        setList(nextList);
    }

    return (
        <div className="list-principal">
            <h1 className="list-h1">Famous Artworks:</h1>
            <button className="list-button" onClick={handleClick}>
                Reverse
            </button>
            <ul className="list-ul">
                {list.map(artwork => (
                    <li key={artwork.id} className="list-li">{artwork.title}</li>
                ))}
            </ul>
        </div>
    );
}
