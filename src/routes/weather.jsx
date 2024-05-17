import { useEffect, useState } from "react";

const Weather = () => {
    const [prefecture,setPrefecture] = useState('');
    const [weatherData, setWeatherData] = useState();

    const prefectureChange = (e) => {
        setPrefecture(e.target.value);
    }

    const fetchWeather = async () => {
        if(!prefecture) return;

        const url = `https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${prefecture}.json`
        
        try{
            const response = await fetch(url);
            const data = await response.json();
            setWeatherData(data);
            console.log(data);
        }catch(error){
            setWeatherData(null);
        }
    }

    return(
        <div>
            <h1>気象庁</h1>
            <select onChange={prefectureChange}>
                <option>都道府県を選択してください</option>
                <option value="014100">北海道</option>
                <option value="130000">東京都</option>
                <option value="270000">大阪府</option>
            </select>
            <button onClick={fetchWeather}>確定</button>
            {/* <div>
                {weatherData} ? <pre>{weatherData.text}</pre>  <p>天気の情報を表示するには都道府県を選択してください</p>
            </div>         */}
        </div>
    )
}

export default Weather;