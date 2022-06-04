import { useState, useEffect } from "react";

function App() {

    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    const onChange = event => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === ""){
            return;
        }
        // 전송 후 state비우기
        setToDo("");
        // state는 직접 수정하면 안된다.
        //toDos.push() 사용 X
        setToDos(currentArray => [...currentArray, toDo]);
    }

    useEffect(() => {
        console.log(toDos);
    }, [toDos])

    return (
        <div>
            <h1>My To Dos {toDos.length}</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."/>
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item , index) => <li key={index}>{item}</li>  )}
            </ul>
        </div>
    ) 
}

export default App;
