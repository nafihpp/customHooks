import { useState } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import useToggle from "./hooks/useToggle";
import { useDirection } from "./hooks/useDirection";

function App() {
    //useToggle Hook
    const [state, handleChange] = useToggle();
    //useLocalStorage Hook
    const [input, setInput] = useState("");
    const [key, setKey] = useState("");
    const [localData, setLocalData] = useState();
    const { data, getFromLocal, addtoLocal } = useLocalStorage(input);
    //useDireaction Hook
    const { refDirection, directionData } = useDirection();

    return (
        <>
            <div>
                <h1>useToggle Hook</h1>
                <button onClick={handleChange}>
                    {state ? "true" : "false"}
                </button>
            </div>
            <div>
                <h1>useLocalStorage Hook</h1>
                <input
                    placeholder="enter LocalStorage name"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={() => getFromLocal()}>
                    Get data from local Storage
                </button>
                <h2>
                    {data
                        ? JSON.stringify(data)
                        : "no data local storage , search with the valid key"}
                </h2>
                <input
                    placeholder="enter key name for local Storage"
                    onChange={(e) => setKey(e.target.value)}
                />
                <input
                    placeholder="enter data to add to local storge"
                    onChange={(e) => setLocalData(e.target.value)}
                />

                <button
                    onClick={() => {
                        if (key && localData) {
                            addtoLocal(key, localData);
                        }
                    }}
                >
                    Add to LocalStorage
                </button>
            </div>
            <div>
                <h1>useDirection Hook</h1>
                <div ref={refDirection} dir="rtl">
                    <p>
                        The direction of this text is
                        <span style={{ color: "red" }}>
                            {directionData} which means
                        </span>
                        {directionData === "rtl" ? "Right" : "Left"}
                    </p>
                </div>
            </div>
        </>
    );
}

export default App;
