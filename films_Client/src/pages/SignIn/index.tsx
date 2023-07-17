import AuthenticationForm from "components/AuntificationForm";
import {Wrapper, Background} from 'assets/Auth/styled'
import img from 'assets/Auth/background.png';

const SignIn: React.FC = () => {

    const handleClick = (values: object) => {
        console.log(values)
    }
    return (
        <Wrapper>
            <AuthenticationForm handleClick={handleClick} type="Sign In" />
            <Background src={img} />
        </Wrapper>
    )
}

export default SignIn;
