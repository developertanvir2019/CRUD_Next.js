import React from 'react'

const addTopic = () => {
    return (
        <form className='flex flex-col gap-3'>
            <input className='border border-slate-500 px-8 py-2' type="text" placeholder='Topic Title' />
            <textarea className='border border-slate-500 px-8 py-2' type="text" placeholder='Topic Description' />
            <button className='text-white bg-green-500 font-bold py-3 px-6 w-fit'>Add Topic</button>
        </form>
    )
}

export default addTopic