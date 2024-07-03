import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Pages/Home'
import NavBar from './components/common/NavBar';
import Login from "./Pages/Login";
import Signup from './Pages/Signup';
import ForgotPassword from './Pages/ForgotPassword';
import OpenRoute from "./components/core/Auth/OpenRoute";
import ResetPassword from './Pages/ResetPassword';
import VerifyEmail from './Pages/VerifyEmail';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import Dashboard from './Pages/Dashboard';
import Error from './Pages/Error';
import MyProfile from './components/core/Dashboard/MyProfile';
import PrivateRoute from './components/core/Auth/PrivateRoute';
import Settings from './components/core/Dashboard/Settings';
import EnrolledCourses from './components/core/Dashboard/EnrolledCourses';
import Cart from './components/core/Dashboard/Cart';
import { ACCOUNT_TYPE } from './utils/constants';
import { useSelector } from 'react-redux';
import AddCourse from './components/core/Dashboard/AddCourse';
import MyCourses from './components/core/Dashboard/MyCourses/MyCourses';
import EditCourse from './components/core/Dashboard/EditCourse.jsx/EditCourse';
import Catalog from './Pages/Catalog';

function App() {
  const user = useSelector((state) => state.profile.user);
  return (

    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">

      <NavBar/>
        
      <Routes>

        <Route path = "/" element ={<Home/>}/>

        <Route path="/login" element={<OpenRoute> <Login/> </OpenRoute> }/>
        <Route path="/signup" element={<OpenRoute> <Signup/> </OpenRoute> }/>
        <Route path="/forgot-password" element={<OpenRoute> <ForgotPassword/> </OpenRoute> }/>
        <Route path="/update-password/:id" element={<OpenRoute> <ResetPassword/> </OpenRoute> }/>
        <Route path="/verify-email" element={<OpenRoute> <VerifyEmail/> </OpenRoute> } />
        <Route path="/about" element={<OpenRoute> <About/> </OpenRoute> } />

        <Route path="/contact" element={<ContactUs />} />

        <Route element={<PrivateRoute><Dashboard /></PrivateRoute>}>
        <Route path="/dashboard/my-profile" element={<MyProfile/>} />
        <Route path="/dashboard/settings" element={<Settings/>} />
        <Route path="catalog/:catalogName" element={<Catalog/>} />
        


        {
          user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
            <Route path="/dashboard/enrolled-courses" element={<EnrolledCourses/>} />
            <Route path="/dashboard/cart" element={<Cart/>} />
        
            </>
          )
        }

        {
          user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
            <Route path="/dashboard/add-course" element={<AddCourse/>} />
            <Route path="/dashboard/my-courses" element={<MyCourses/>} />
            <Route path="/dashboard/edit-course/:courseId" element={<EditCourse/>} />
            
            </>
          )
        }
        </Route>



        <Route path="*" element={<Error/>}></Route>
        
      </Routes>

    </div> 

  );

}

export default App;
