import React from 'react'

export default function ButtonMd({title}) {
    return (
        <button className='py-2 px-8 rounded-md font-medium bg-blue-50 hover:bg-blue-100'>{title}</button>
    )
}
