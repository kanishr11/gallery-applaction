
import { Title } from './comps/Title';
import './App.css'
import { UploadFile } from './comps/UploadFile';
import { ImageGrid } from './comps/ImageGrid';

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadFile/>
      <ImageGrid/>
    </div>
  );
}

export default App;
