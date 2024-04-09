import FPhotoText from './FPhotoText';
import './App.css';

function App() {
  return (
    <div>
      <FPhotoText image = "desktop" label = "Desktop"/>
      <FPhotoText image = "notebook" label = "Notebook"/>
      <FPhotoText image = "pad" label = "Pad"/>
    </div>
  );
}

export default App;
