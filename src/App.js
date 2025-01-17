
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Footer from './Component/Common/Footer';
import NavBar from './Component/Common/NavBar';
import Home from './Component/HomePage/Home';
import SignUp from './Component/HomePage/SignUp';
import Login from './Component/HomePage/Login';
import ForgetPassword from './Component/HomePage/ForgetPassword';
import Product from './Ecomerce/Pages/Product';
import News from './Component/HomePage/News';
import AboutUs from './Component/HomePage/AboutUs';
import Contact from './Component/HomePage/Contact';
import VerifyEmail from './Component/Common/VerifyEmail';

function App() {
  
  return (
    <div className='bg-[#cefad0]'>
      <NavBar/>

      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgot-password' element={<ForgetPassword/>}/> 
     <Route path='/product' element={<Product/>}/>
     <Route path='/news' element={<News/>}/>
     <Route path='/about' element={<AboutUs/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/verifyemail' element={<VerifyEmail/>}/>
      
      </Routes>
     



      {/* footer */}
      <Footer/>
    </div>
  
  );
}

export default App;
