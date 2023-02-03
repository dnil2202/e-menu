import Categories from './Pages/Categories';
import HomePage from './Pages/HomePage';
import MenuPages from './Pages/MenuPages';
import { Route, Routes } from 'react-router-dom';
import { Provider, useAtom } from 'jotai';
import { menuAtom, userAtom } from './store';
import axios from 'axios';
import { API_URL } from './helper';
import { useEffect } from 'react';
import Cart from './Pages/Cart';
import Transaction from './Pages/Transaction';

function App() {
  
  const [dataMenu, setDataMenu] = useAtom(menuAtom)
  const [dataUser, setDataUser] = useAtom(userAtom)



  useEffect(()=>{
    axios.get(API_URL+'/menu')
    .then((res)=>{
      let food = res.data.filter(data=> data.category === 'heavy meal')
      setDataMenu(food)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  useEffect(()=>{
   let idLogin = localStorage.getItem('menu')
    axios.get(API_URL+`/user/${idLogin}`)
    .then((res)=>{
      setDataUser(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/menu' element={<MenuPages />} />
        <Route path='/categories/:name' element={<Categories />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/transaction' element={<Transaction />} />
      </Routes>
    </div>
  );
}

export default () =>(
  <Provider>
    <App/>
  </Provider>
)
