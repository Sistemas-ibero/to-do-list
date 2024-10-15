import React from 'react'

export const Task = ({ name, status }) => {

    return (
        <>
            <p>{name}</p>
            <div>
                {/* TODO: Validar si status es true o false */}
                <button onClick={() => {
                    console.log('Done')
                }}>Done</button>
                <button onClick={() => {
                    console.log('Delete')
                }}>Delete</button>
            </div>
        </>
    )
}
