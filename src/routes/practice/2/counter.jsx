import React,{useState} from 'react';

function useCounter(init = 0){
    const [count, setCount] = useState(init);
    const increment = () => setCount(prevCount => prevCount + 1);

    return[count, increment];
};

function Counter(){
    const [count, increment] = useCounter(0);

    return(
        <div>
            <h1>count:{count}</h1>
            <button onClick={increment}>プラス</button>
        </div>
    )
}

export default Counter;