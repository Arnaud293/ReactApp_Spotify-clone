import SongBar from './SongBar';

const RelatedSongs = ({data, isPlaying, activeSong, handlePauseClick, handlePlayClick}) => (
  <div className='flex flex-col'>
    <h1 className='font-bold text-3xl text-white'>Related songs :</h1>
    <div className="mt-6 w-full flex flex-col">
      {data?.map((song,index) =>(
        <SongBar key={`${song.key}-${song.id}-${artistId}`} song={song} index={index} artistId={artistId} isPlaying={isPlaying} activeSong={activeSong} handlePauseClick={handlePauseClick} handlePlayClick={handlePlayClick} />
      ))}
    </div>
  </div>
);

export default RelatedSongs;
