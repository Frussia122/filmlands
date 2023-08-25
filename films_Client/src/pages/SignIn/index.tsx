import AuthForm from "components/AuntificationForm/index";
import {Wrapper, Background} from 'assets/Auth/styled'
import img from 'assets/Auth/background.png';

import { useDispatch } from "react-redux";
import { registration } from "store/slices/authSlice";
import { AppDispatch } from "store/store";


const SignIn: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const handleClick = async (values: { email: any; password: any; }) => {
        const { email, password } = values;
        dispatch(registration({email, password}));
    };
    return (
        <Wrapper>
            <AuthForm handleClick={handleClick} type="Sign In" />
            <Background src={img} />
        </Wrapper>
    )
}

export default SignIn;
