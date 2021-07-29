import { useParams } from 'react-router-dom';

import ArtistCard from './ArtistCard';

import './ArtistCard.css';

const Artist = () => {
    const { name } = useParams()
    console.log(name);

    return (
        <div className="artistCard">
            <ArtistCard artistId={name}/>
        </div>
    );
}

export default Artist;