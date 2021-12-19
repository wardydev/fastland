import React from 'react'

export default function HeadingSm({title, light}) {
    return (
        <h3 className={light ? 'text-xl font-medium text-gray-100 mb-2' : 'text-xl font-medium text-gray-600 mb-2'}>{title}</h3>
    )
}
