import { useEffect, useState } from 'react';
import ArtistCard from './ArtistCard'

import './Explore.css';

const Explore = ({ selectArtist }) => {

  const [search, setSearch] = useState('');         // Valeur de la recherche dans la barre de recherche
  const [artistList, setArtistList] = useState([]);   // Reponse du call API avec search

  // Call API avec Valeur du search
  useEffect(() => {
    fetch(`https://theaudiodb.com/api/v1/json/1/search.php?s=${search}`)
      .then(response => response.json())
      .then(data => {
        setArtistList(data.artists)
      })
  },[search])

  return (
    <div className="Explore">
      <h2>Search</h2>
      <input type="text" value={search} onChange={event => setSearch(event.target.value)} />

      <div className="CardContainer">
        { artistList === null
          ? <div>Wait...</div>
          : artistList.map((artist) => (
            <ArtistCard key={artist.idArtist} artist={artist}  selectArtist={selectArtist} />
          ))
        }
      </div>
    </div>
  );
}

export default Explore;