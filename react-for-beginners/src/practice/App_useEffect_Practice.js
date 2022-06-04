import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App( ) {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value)

  // 처음 랜더링 되었을때만 실행
  useEffect(()=> console.log("run Only once") , []);

  // 특정 state 변경시 실행함
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5){
      console.log("Search For", keyword);
    }
  }, [keyword]);

  // counter만 변경시 실행
  useEffect(() => { 
    console.log("run 'Counter!!' ")
  }, [counter]);

  // 둘다 변경시
  useEffect(() => { 
    console.log("run 'Counter!!' && 'keyword!!' ")
  }, [keyword, counter]);


  return (
    <div>
        <input value={keyword} onChange={onChange} type="text" placeholder="Search here...."/>
        <h1 className={styles.title}>{counter}</h1>
        <Button onClick={onClick} text={"버른"} />
    </div>
  );
}

export default App;
