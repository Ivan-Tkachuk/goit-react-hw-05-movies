import { useParams } from "react-router-dom";

export const Cast = () => {
    const {filmId} = useParams();

// useEffect(() => {
//     http 
// }, [])

    return <div>film cast: {filmId}</div>;
}