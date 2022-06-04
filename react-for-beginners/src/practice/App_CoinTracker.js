import { useState, useEffect } from "react";

function App() {

    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [myPrice, setMyPrice] = useState(0);
    const [selectValue , setSelectValue] = useState({});
    const [changePrice, setChangePrice] = useState(0);

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then(response => response.json())
        .then((json) => {
            setCoins(json);
            setLoading(false);
        });
    } , []);

    const onChange = (event) => {
        setMyPrice(event.target.value);
        if(selectValue > 0) setChangePrice(myPrice / selectValue);
    };

    const selectOnChange = (event) => {
        setSelectValue(event.target.value);
        if(myPrice > 0) setChangePrice(myPrice / selectValue);
    }

    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? <h1>loading...</h1> : 
                <div>
                    <div>
                        <input onChange={onChange} value={myPrice} type="number" placeholder="Write your to Price.."/>
                    </div>
                    <select onChange={selectOnChange}>
                        <option value="default">selected....</option>
                        {
                            coins.map((coin) => 
                                <option value={coin.quotes.USD.price} key={coin.id}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price}</option>
                            )
                        }
                    </select>
                    <hr />
                    <h1>{changePrice}</h1>
                </div>
            }
        </div>
    ) 
}

export default App;
