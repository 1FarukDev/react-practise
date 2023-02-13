import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    function handleClick(){
        setCount(prevCount => prevCount + 1)
    }
    // console.log("Component rendered")
    
    /**
     * Challenge: re-write the useEffect
     * It should run any time `count` changes
     * For now, just console.log("Effect function ran")
     */
    React.useEffect(() => {
        // console.log("Effect function ran")
        console.log(starWarsData)
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
    }, [count])
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}


