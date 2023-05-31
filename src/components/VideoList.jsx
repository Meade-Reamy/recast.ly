import VideoListEntry from './VideoListEntry.js';
var VideoList = ({videos, setVideo}) => (
  <div className="video-list">
    {videos.map((item, i) => {
      return <VideoListEntry key={i} video={item} setVideo={setVideo}/>;
    }
    )}
    {/* <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div> */}
    {/* <div><h5>Test</h5>{videos[0].etag}</div> */}
  </div>
);
//^
//.map videos so each video (singular) is passed as a prop to VideoListEntry


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
