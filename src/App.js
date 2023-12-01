
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Landingpage from './Pages/Landingpage';
import Homepage from './Pages/Homepage';
import PageNotFound from './Pages/PageNotFound';
import WatchHistory from './Pages/WatchHistory';


function App() {

 
  return (
    <div className="App">
     <Header/>
     <Routes>
     {/* localhost:3000 Landingpage */}
      <Route path='/' element={<Landingpage/>}/>
      {/* localhost:3000/home Homepage */}
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/watch-histroy' element={<WatchHistory/>}/>

      {/* localhost:3000/homesfmmfn PageNoteFund */}
      <Route path='*' element={<PageNotFound/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
