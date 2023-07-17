import AuthenticationForm from "components/AuntificationForm";
import {Wrapper, Background} from 'assets/Auth/styled'
import img from 'assets/Auth/background.png';


const SignUp: React.FC = () => {
    const handleClick = (values: object) => {
        console.log(values)
    }
    return (
        <Wrapper>
            <AuthenticationForm handleClick={handleClick} type="Sign Up" />
            <Background src={img} />
        </Wrapper>
    )
}

export default SignUp;