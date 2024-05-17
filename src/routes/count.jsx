import React,{useState, useEffect} from 'react';

function useCounter(init = 0){
    const [count, setCount] = useState(init);
    const increment = () => setCount(prevCount => prevCount + 1);
    const decrement = () => setCount(prevCount => prevCount - 1);

    return[count, increment, decrement];
};

function Count(){
    const [count, increment, decrement] = useCounter(0);

    return(
        <div>
            <h1>count:{count}</h1>
            <button onClick={increment}>プラス</button>
            <button onClick={decrement}>マイナス</button>
        </div>
    )
}

// function Count(){
//     const [count, setCount] = useState(0);
//     const [total, setTotal] = useState(0);

//     useEffect(() => {
//         setTotal(total + count);
//         console.log(total);
//     });

//     const clicked = () => {
//         setCount(count + 1);
//     }

//     return (
//         <div>
//             <h1>Hello {total}</h1>
//             <button onClick={clicked}>ボタン</button>
//         </div>
//     );
// };

export default Count;