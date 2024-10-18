import { useSearchParams } from 'react-router-dom'
import styles from './Map.module.css'


function Map() {
    const [searchParams, setSearchParams] = useSearchParams();
    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");

    return (
        <div className={styles.mapContainer}>
            Map
            position :  {lat}, {lng}
            <button onClick={() => 
                {setSearchParams({lat:25, lng:11})}}>change location </button>
        </div>
    )
}

export default Map
