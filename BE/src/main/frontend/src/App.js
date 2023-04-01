import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FileUploadForm from "./FileUploadForm";



export default function App() {
    const [Id, setId] = useState("");

    const [Pw, setPw] = useState("");


    return (
        <div>
            <form>
                <div>
                    <label>아이디</label><input onChange={(e) => {
                    setId(e.target.value);
                    console.log(Id);
                }
                }/>
                </div>
                <div>
                    <label>비번</label><input onChange={(e) => {
                    setPw(e.target.value)
                }}/>
                </div>
                <button onClick={() => {
                    axios.post("http://3.38.103.98:8080/login/general", {Email: Id, PW: Pw})
                        .then((response) => {
                            console.log(response)
                        })
                }}>로그인

                </button>

                <button onClick={() => {
                    axios.get("http://3.38.103.98:8080/login/hello")
                        .then((response) => {
                            console.log(response)
                        })
                }}>hello
                </button>
                </form>
                <FileUploadForm></FileUploadForm>
        </div>
    );
}

