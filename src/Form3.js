import { useState } from 'react';

export default function Form3() {
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        },
    });

    function handleNameChange(e) {
        setPerson({
            ...person,
            name: e.target.value,
        });
    }

    function handleTitleChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value,
            },
        });
    }

    function handleCityChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                city: e.target.value,
            },
        });
    }

    function handleImageChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value,
            },
        });
    }

    return (
        <div className='form2-principal'>
            <label className='form2-label'>
                Name:
                <input
                    className='form2-input'
                    value={person.name}
                    onChange={handleNameChange}
                />
            </label>
            <br />
            <label className='form2-label'>
                Title:
                <input
                    className='form2-input'
                    value={person.artwork.title}
                    onChange={handleTitleChange}
                />
            </label>
            <br />
            <label className='form2-label'>
                City:
                <input
                    className='form2-input'
                    value={person.artwork.city}
                    onChange={handleCityChange}
                />
            </label>
            <br />
            <label className='form2-label'>
                Image:
                <input
                    className='form2-input'
                    value={person.artwork.image}
                    onChange={handleImageChange}
                />
            </label>
            <br />
            <p className='form2-print'>
                <i>{person.artwork.title}</i> by {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
            <img
                src={person.artwork.image}
                alt={person.artwork.title}
                style={{ maxWidth: '300px', maxHeight: '300px' }}
            />
        </div>
    );
}
