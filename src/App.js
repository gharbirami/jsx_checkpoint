
import './Style.css';
import myWonderfulImage from "./image2.jpg"
function App() {
  return (
    <div className='App'>
      <h1 className="title">GoMyCode</h1>
        <div className="home" >
        
          <br />
          <img src="image1.jpg"  alt='gomycode'/>
          <br />
          <img src={myWonderfulImage }alt='gomycode'/>
        </div>
        <video width={750} height={500} controls>
          <source src="gomycode.mp4" type="video/mp4" />
        </video>
      </div>
  );
}

export default App;
