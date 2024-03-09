import React, { useEffect } from 'react'
import '../App.css'
import { useStorage } from '../hooks/useStorage'
import { motion } from 'framer-motion'

export const ProgressBar = ({file,setFile}) => {
    const {url,progress} = useStorage(file);
    console.log(progress,url);

    useEffect(()=>{
      if(url){
        setFile(null);
      }
    },[url,setFile])
    return(
<motion.div className='progress-bar'
 initial={{width:0}}
 animate={{width:progress + '%'}}
 ></motion.div>
  )
}
