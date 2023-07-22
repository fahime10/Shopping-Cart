import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="error-page">
            <h1>Oh no, this route does not exist!</h1>
            <Link to="/">
                Click here to go back to home page
            </Link>
        </div>
    );
};

export default ErrorPage;