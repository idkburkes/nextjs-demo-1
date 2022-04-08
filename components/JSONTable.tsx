

import { useEffect } from 'react' 


export default function JSONTable(props) {

    useEffect( () => {
            // rerender
    }, [props.data]);


    // Use this function to preserve numeric fields in JSON 
    //https://stackoverflow.com/questions/38703780/how-to-preserve-numeric-fields-in-json-stringify
    const stringifyRow = (row) => {
        return <div>{JSON.stringify(row, (key, value) => (isNaN(value) ? value : +value))} </div>
    }


    return (
        <div className="">
            {props.data.map(row => {
                return ( stringifyRow(row))
            })}
        </div>
    )
}