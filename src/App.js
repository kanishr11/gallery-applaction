import { Title } from './comps/Title';
import './App.css'
import { UploadFile } from './comps/UploadFile';
import { ImageGrid } from './comps/ImageGrid';
import { Modal } from './comps/Modal';
import { useState } from 'react';

function App() {
  const [selectImg, setSelectImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UploadFile />
      <ImageGrid setSelectImg={setSelectImg} />
      { selectImg && (
        <Modal selectImg={selectImg} setSelectImg={setSelectImg} />
      )}
    </div>
  );
}

export default App;
