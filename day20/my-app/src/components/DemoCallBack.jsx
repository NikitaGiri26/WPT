import React, { useCallback, useState } from "react";

const funcSet = new Set();

const DemoCallBack = () => {
    const [cnt, setCnt] = useState(0);
    const [num, setNum] = useState(0);

    // Using functional updates to avoid dependency on cnt and num
    const incCnt = useCallback(() => setCnt(prevCnt => prevCnt + 1), []);
    const decCnt = useCallback(() => setCnt(prevCnt => prevCnt - 1), []);
    const incNum = useCallback(() => setNum(prevNum => prevNum + 1), []);

    funcSet.add(incCnt);
    funcSet.add(decCnt);
    funcSet.add(incNum);

    return (
        <div>
            <h2>With useCallback Hook</h2>
            <button onClick={incCnt}>Increase Counter</button>
            <button onClick={decCnt}>Decrease Counter</button>
            <button onClick={incNum}>Increase Number</button>

            <h1>Count : {cnt}</h1>
            <h1>Number : {num}</h1>
            <h2>Set Size  : {funcSet.size}</h2>
        </div>
    );
};

export default DemoCallBack;
