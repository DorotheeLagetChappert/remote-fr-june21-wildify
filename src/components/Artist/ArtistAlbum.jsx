import './ArtistAlbum.css'

const ArtistAlbum = ({ album }) => {
    return (
        <div className="artistAlbum">
            {album.strAlbumThumb
                ? <img src={album.strAlbumThumb} alt={`Cover ${album.strAlbum}`}/>
                : <img src={"https://i.ibb.co/fD8vLPB/no-cover-ter.png"} alt={"Wildify3DCover"}/>
            }
            <p>{album.strAlbum} ({album.intYearReleased})</p>
        </div>
    );
}

export default ArtistAlbum;