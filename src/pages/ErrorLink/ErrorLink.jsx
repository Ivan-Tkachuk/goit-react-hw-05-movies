import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorLink = () => {
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? `/`);

return (
    <>
    <div>
    <Link to={backLinkLocationRef.current}><button type="button">Go back</button></Link>
    </div>
<h1>Sorry, Something wrong with URL</h1>
    </>

)
}


export default ErrorLink;