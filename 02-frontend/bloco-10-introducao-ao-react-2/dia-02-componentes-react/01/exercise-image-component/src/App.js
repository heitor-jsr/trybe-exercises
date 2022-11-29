import './App.css';
import cat from './cat.jpg'
import Image from './Image';
function App() {
  return (
    <Image source={cat} alternativeText="Cute cat staring" />
  );
}

export default App;
