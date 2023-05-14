import React, { useState } from "react";

const useLocalStorage = (value) => {
    const [data, setData] = useState();
    const getFromLocal = () => {
        let DatafromLocal = localStorage.getItem(value);
        setData(JSON.parse(DatafromLocal));
    };
    const addtoLocal = (name, localData) => {
        localStorage.setItem(name, localData);
    };
    return {
        getFromLocal,
        data,
        addtoLocal,
    };
};

export default useLocalStorage;
