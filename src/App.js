import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top from "./routes/index";
import Weather from "./routes/weather";
import Count from './routes/count';
import Todo from "./routes/todo";
import Practice from "./routes/practice"

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Top />} />
                <Route path='weather' element={<Weather />} />
                <Route path='count' element={<Count />} />
                <Route path='todo' element={<Todo />} />
                <Route path="practice" element={<Practice />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;