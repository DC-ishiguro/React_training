import { useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import Greeting from "./practice/1/greeting";
import Counter from "./practice/2/counter";
import NameFrom from "./practice/3/namefrom"
import Timer from "./practice/4/timer"
import FilterableList from "./practice/12/filterablelist";
import Modal from "./practice/13/modal";

const Practice = () => {
    
    //演習13
    const [show, setShow] = useState(false)
    const openModal = () => {
      setShow(true)
    }

    //演習14
    const navigate = useNavigate();
    const onClickHome = () => {
        navigate('/home');
    }

    const onClickAbout = () => {
        navigate('/about');
    }

    const onClickContact = () => {
        navigate('/contact');
    }

    return(
        
        <div>
            <p>演習1</p>
            <Greeting 
                name="aさん"
            />

            <p>演習2</p>
            <Counter />

            <p>演習3</p>
            <NameFrom />

            <p>演習4</p>
            <Timer />

            <p>演習5</p>
            <p>演習6</p>
            <p>演習7</p>
            <p>演習8</p>
            <p>演習9</p>
            <p>演習10</p>
            <p>演習11</p>
            <p>演習12</p>
            <FilterableList />

            <p>演習13</p>
            <div>
                <button onClick={openModal}>Clikc</button>
                <Modal
                    show={show}
                    setShow={setShow}
                />
            </div>

            <p>演習14</p>
            <button onClick={onClickHome}>Home</button>
            <br />
            <button onClick={onClickAbout}>About</button>
            <br />
            <button onClick={onClickContact}>Contact</button>

        </div>

        // <form action="./practice/greeting">
        //     <input type="text" name="" />
        //     <input type="submit" value="送信" />
        // </form>
    )
}

export default Practice;