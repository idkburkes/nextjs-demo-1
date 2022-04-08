
import CreatePanel from '../components/CreatePanel'
import { useState } from 'react'
import JSONTable from './JSONTable'


export default function AdminDisplay() {

    const [data, setData] = useState([])


    const handleSubmit = (newData) => {
        setData([...data, newData])
    }

    return(
        <div className="min-h-screen">
            <div className="flex my-10 mx-auto items-center justify-center">
                    <CreatePanel  
                        title={"Create Cookie Stand"}
                        handleSubmit={handleSubmit}>
                    </CreatePanel>
            </div>
            <div className="flex items-center justify-center mb-5">
                <p> Report Table Coming Soon...</p>
            </div>
            <div className="flex items-center justify-center">
                <JSONTable data={data}></JSONTable> 
            </div>
        </div>
    )
}