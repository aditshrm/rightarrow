import Slideshow from '../components/Slideshow.js';
import TopBar from '../components/TopBar.js';
import Footer from '../components/Footer.js';
function HomePage() {
    return (
      <>
        <TopBar/>
        <div id="heading">
          <h1>Welcome</h1>
        </div>
        <div id="slideshow">
          <Slideshow />
        </div>
        <div id="writeup" style={{ fontStyle: "italic" }}>
          <p>
            Sign in for your account to access{" "}
            <b>
              <abbr id="writeupabbr" title="A daily life letter that you read online">
                Deuce Driver
              </abbr>
            </b>{" "}
            on your device.
            <br />
            <br />
          </p>
        </div>
        <Footer/>
      </>
    );
}
export default HomePage;