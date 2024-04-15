import PropTypes from 'prop-types';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { useContext } from 'react';

const ProtectedRoute = ({children}) => {
    const {user,isLoading} = useContext(AuthContext);
    const location = useLocation()
    
    if(isLoading === true){
        return <div className='text-center'><span className="loading loading-bars loading-lg absolute"></span></div>
    }
    if(!user){
        return <Navigate to='/LogIn' state={location.pathname}></Navigate>
    }
    return children;
    
  
};

ProtectedRoute.propTypes = {
    children:PropTypes.node
};

export default ProtectedRoute;