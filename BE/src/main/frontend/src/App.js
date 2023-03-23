import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
    const [Id,setId] = useState("");
    
    const [Pw,setPw] = useState("");
    
    return(
        <form>
            <div>
                <label>아이디</label><input onChange={(e)=>{
                    setId(e.target.value);
                    console.log(Id);
                }
                }/>
            </div>
            <div>
                <label>비번</label><input onChange={(e)=>{setPw(e.target.value)}}/>
            </div>
            <button onClick={() => {
                axios.post("http://localhost:8080/login/L", {ID: Id, PW: Pw})
                    .then((response) => {console.log(response)})
            }}>로그인</button>
        </form>
        )

}

export default App;