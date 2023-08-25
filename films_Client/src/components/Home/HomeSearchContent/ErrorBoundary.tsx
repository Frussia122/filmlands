import loader from 'assets/HomePageContent/5gaN.gif';
import { Loader } from './styled';


const ErrorBoundary: React.FC = () => {
    return (
        <div>
            <Loader src={loader} alt="Loading..." />
        </div>
    );
}

export default ErrorBoundary;