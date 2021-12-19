import React from 'react'

export default function HeadingMd({title, light, column}) {
    return (
        <>
            {
                column ? <h2 className={light ? 'text-5xl text-white mb-6' : 'text-5xl text-gray-700 mb-6'}>{title}</h2> : <h2 className={light ? 'text-5xl text-white' : 'text-5xl text-gray-700'}>{title}</h2>
            }
        </>
    )
}
