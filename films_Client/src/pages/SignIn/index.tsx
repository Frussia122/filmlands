import AuthForm from "components/AuntificationForm/index";
import {Wrapper, Background} from 'assets/Auth/styled'
import img from 'assets/Auth/background.png';

import { useDispatch, useSelector } from "react-redux";
import { isAuth, login } from "store/slices/authSlice";
import { AppDispatch } from "store/store";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";


const SignIn: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const authStatus = useSelector(isAuth);

    const handleClick = async (values: { email: any; password: any; }) => {
        const { email, password } = values;

        if(email && password) {
            console.log(values);
            dispatch(login({email, password}));
        }
        
    };

    useEffect(() => {
        if(authStatus) {
            
        }
    }, [authStatus])

    
    return (
        <Wrapper>
            <AuthForm handleClick={handleClick} type="Sign In" />
            <Background src={img} />
        </Wrapper>
    )
}

export default SignIn;
