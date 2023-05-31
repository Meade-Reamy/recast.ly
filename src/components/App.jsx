import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import Search from './Search.js';
const { useState } = React;
const { useEffect } = React;
var App = () => {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState(exampleVideoData[0]);
  const [searchBar, setSearchBar] = useState('');
  // useEffect(() => {
  //   //setVideos();
  //   console.log('ANYTHING', searchYouTube('cats', () => {}));
  // }, [videos]);

  useEffect(() => {
    const search = searchYouTube;
    search(searchBar, (data) => {
      if (data.length === 0) {
        data = exampleVideoData;
      }
      setVideos(data);
      setVideo(data[0]);
    });
    // return () => {
    //   // setVideos(search('', () => {}));
    //   console.log('USE EFFECT RETURN RAN');
    // };
  }, [searchBar]);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search setSearchBar={setSearchBar}/>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={video} />
        </div>
        <div className="col-md-5">
          <VideoList videos={videos} setVideo = {setVideo} />
        </div>
      </div>
    </div>
  );
};
// //
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
