import PropTypes from 'prop-types';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation()
    if(!user){
        return <Navigate to='/LogIn' state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

PrivateRoute.propTypes = {
    children:PropTypes.node
};

export default PrivateRoute;