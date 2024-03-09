import React from 'react'
import '../App.css'
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

export const ImageGrid = ({setSelectImg}) => {
    const {docs} = useFirestore('images');
    console.log(docs);
  return (
    <div className='img-gird'>
        {docs && docs.map(doc =>(
            <motion.div className='img-wrap' key={doc.id}
            layout
            whileHover={{opacity:1}}
            onClick={()=>setSelectImg(doc.url)}
            >
                <motion.img src={doc.url} alt='uploaded pic'
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1}}
                />
            </motion.div>
        ))}
    </div>
  )
}
