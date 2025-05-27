import { useState } from 'react';

export default function Form2() {
    const [person, setPerson]= useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    function handleFirstNameChange(e) {
        setPerson({ ...person, firstName: e.target.value });
    }

    function handleLastNameChange(e) {
        setPerson({ ...person, lastName: e.target.value });
    }

    function handleEmailChange(e) {
        setPerson({ ...person, email: e.target.value });
    }

    return (
        <div className='form2-principal'>
            <label className='form2-label'>
                First Name:
                <input  
                    className='form2-input'
                    value={person.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label className='form2-label'>
                Last Name:
                <input 
                    className='form2-input'
                    value={person.lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <label className='form2-label'>
                Email:
                <input  
                    className='form2-input'
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </label>
            <p className='form2-print'>
                {person.firstName}{' '}
                {person.lastName}{' '}
                ({person.email})
            </p>
        </div>
    )


}