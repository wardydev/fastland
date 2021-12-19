import React from 'react'

export default function ParagraphSm({title, light}) {
    return (
        <p className={light ? 'text-gray-300 text-base' : 'text-gray-400 text-base'}>{title}</p>
    )
}
