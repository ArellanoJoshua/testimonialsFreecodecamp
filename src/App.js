import './App.css';
import Testimony from './components/testimony.js'

function App() {
  return (
    <div className='App'>
      <div className='main-container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimony 
        image='shawn'
        name='Shawn Wang'
        country='Singapore'
        position='Software Engineer'
        company='Amazon'
        testimony='Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.' />
        <Testimony 
        image='sarah'
        name='Sarah Chima'
        country='Nigeria'
        position='Software Engineer'
        company='ChatDesk'
        testimony='freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.' />
        <Testimony 
        image='emma'
        name='Emma Bostian'
        country='Sweden'
        position='Software Engineer'
        company='Spotify'
        testimony='Ive always struggled with learning JavaScript. Ive taken many courses but freeCodeCamps course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.' />
      </div>
    </div>
  );
}

export default App;
