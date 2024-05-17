import { useNavigate } from "react-router-dom";

const Top = () => {

    const navigate = useNavigate();

    const onClickWeather = () => {
        navigate('/weather');
    }

    const onClickCounter = () => {
        navigate('/count');
    }

    const onClickTodo = () => {
        navigate('/Todo');
    }

    const onClickPractice = () => {
      navigate('/Practice');
    }

    return (
      <div>
        <h1>やったこと</h1>
        <button onClick={onClickWeather}>weatherAPI</button>
        <br />
        <button onClick={onClickCounter}>カウント</button>
        <br />
        <button onClick={onClickTodo}>Todoリスト</button>
        <br />
        <button onClick={onClickPractice}>演習問題</button>
      </div>
    );
  }
  
  export default Top;