import { Link, useLocation } from "react-router-dom";
import "./NotFound.css";

function NotFound() {

    const location = useLocation();

    return (
        <div className="not-found">

            <div className="not-found-card">

                <div className="error-code">
                    404
                </div>

                <div className="error-icon">
                    🔍
                </div>

                <h1>Page Not Found</h1>

                <p className="error-message">
                    Sorry! The page you are looking for
                    does not exist.
                </p>

                <div className="error-details">
                    <p>
                        <strong>Error:</strong> 404 - Page Not Found
                    </p>

                    <p>
                        <strong>Requested URL:</strong>
                        <span className="requested-url">
                            {location.pathname}
                        </span>
                    </p>
                </div>

                <Link to="/" className="home-btn">
                    🏠 Back to Home
                </Link>

            </div>

        </div>
    );
}

export default NotFound;