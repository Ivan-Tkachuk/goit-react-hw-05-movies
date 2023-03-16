import { useParams } from "react-router-dom";

export const Reviews = () => {
    const {filmId} = useParams();

// useEffect(() => {
//     http 
// }, [])

    return <div>film reviews: {filmId}</div>;
}