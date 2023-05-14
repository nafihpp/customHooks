import React, { useEffect, useRef, useState } from "react";

export const useDirection = () => {
    const [directionData, setDirectionData] = useState();
    const refDirection = useRef();
    useEffect(() => {
        if (refDirection) {
            setDirectionData(refDirection?.current?.dir);
        }
    }, []);

    return {
        refDirection,
        directionData,
    };
};
