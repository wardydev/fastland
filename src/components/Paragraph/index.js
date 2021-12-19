import React from 'react'

export default function Paragraph({title, light}) {
    return (
        <p className={light ? 'text-gray-300 text-lg' : 'text-gray-500 text-lg'}>{title}</p>
    )
}
