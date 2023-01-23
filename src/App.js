import Categories from './Pages/Categories';
import HomePage from './Pages/HomePage';
import MenuPages from './Pages/MenuPages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<MenuPages />} />
        <Route path='/categories/:name' element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
