import { useState, useEffect } from 'react'
import bettaImg from './assets/YLBetta.svg'
import './css/styles.css'

function App() {
  //  const [count, setCount] = useState(0)
  const [bid, setBid] = useState(0);
  const [maxBid, setMaxBid] = useState(0);
  const [maxBider, setMaxBider] = useState("");
  const [bider, setBider] = useState("");
  useEffect(() => {
    let abortController = new AbortController();
    try {


    } catch (error) {
 
    } finally {

    }
  

    return () => abortController.abort();
  }, [bid])


  const addBid = () => {
    if (bid !== '' && parseInt(bid) > maxBid) {
      setMaxBid((maxBid) => bid)
      setMaxBider((maxBider)=> bider)   
    }
    console.log("Bider Name: ", maxBider);
    console.log("Max price: ", maxBid);
  }


  return (
    <>
    <img src="./assets/img/00165-2697548705.png" class="img" />
                <br></br>
      <h3>{maxBider} : {maxBid}</h3>
      <br></br>
      <h4>Name : </h4><input value={bider} onChange={e => setBider(e.target.value)} />
      <br></br>
      <h4>Bid : </h4><input value={bid} onChange={e => setBid(e.target.value)} />
      <br></br>
      <button class="submit" onClick={addBid}>Bid</button>

    </>
  )

  

}

export default App
