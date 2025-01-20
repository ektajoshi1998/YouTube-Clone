import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const buttonListt = ["All","Movie","Music","Sports","Live","Soccer", "entertainment","love","trending","Fashion","color","Gaming","Dance","rain",]
  // "Focous","News","bhajan","Arijit","EdShreen"
  return (
    <div className='flex '>

{buttonListt.map((item,index)=> (
  <Button name={item}/>
))}
    </div>
  )
}

export default ButtonList
