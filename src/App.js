import { useRef, useMemo, useState } from "react";
import './App.css';

function App() {
  const[items, setItems] = useState([])
  const[query, setQuery] = useState("")
  const inputRef = useRef()

  const filteredItems = useMemo(() => {
    return items.filter(item => item.toLowerCase().includes(query.toLowerCase()))
  })


  function onSubmit(e){
    e.preventDefault();

    const value = inputRef.current.value
    if(value === "") return
    setItems(prev => {
      return [...prev, value]
    })
    inputRef.current.value = ""
  }

  return (
    <>
    <div class="content__container">
    <div class="content">
    <p>Search: </p>
      <input class="input"
        value={query}
        onChange={e=> setQuery(e.target.value)}
        type="search"/>
      <form onSubmit={onSubmit}>
        <p>New Item: </p><input class="input" ref={inputRef} type="text"/>
        <button class="button">Add</button>
          <h3>Items: 
            {filteredItems.map(item=> (
              <div>{item}</div>
            ))}
          </h3>
        </form>
    </div>
    </div>
    </>
  );
}

export default App;
