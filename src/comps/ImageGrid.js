import React from 'react'
import '../App.css'
import useFirestore from '../hooks/useFirestore';

export const ImageGrid = () => {
    const {docs} = useFirestore('images');
    console.log(docs);
  return (
    <div className='img-gird'>
        {docs && docs.map(doc =>(
            <div className='img-wrap' key={doc.id}>
                <img src={doc.url} alt='uploaded pic'/>
            </div>
        ))}
    </div>
  )
}
