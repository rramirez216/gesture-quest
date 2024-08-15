import React from 'react'
import { styled } from '@linaria/react'
import FileInput from '../components/ui/FileInput'
import Form from '../components/ui/Form'
// import Button from '../components/ui/Button'
// import Modal from '../components/slider/Modal'
import Timer from '../components/slider/Timer'

function Home() {
  const [imageList, setImageList] = React.useState([])
  const [intervalTime, setIntervalTime] = React.useState('30 secs')
  const [sliderDisplay, setSliderDisplay] = React.useState(false)

  const handleImage = (event) => {
    let arr = []
    for (const obj of event.target.files) {
      let url = URL.createObjectURL(obj)
      arr = [...arr, url]
    }
    setImageList([...arr])
    console.log(arr)
  }

  const handleSliderDisplay = () => {
    if (sliderDisplay) {
      setSliderDisplay(false)
    } else {
      setSliderDisplay(true)
    }
  }

  React.useEffect(() => {
    return () => {
      if (imageList.length > 0) {
        URL.revokeObjectURL(imageList)
      }
    }
  }, [imageList])

  return (
    <>
      <Form intervalTime={intervalTime} setIntervalTime={setIntervalTime} />
      <FileInput handleImage={handleImage} />
      {imageList.map((item) => (
        <Image src={item} alt='' key={crypto.randomUUID()} />
      ))}
      {/* <Button handleButton={handleSliderDisplay} /> */}
      <Timer intervalTime={intervalTime} sliderDisplay={sliderDisplay} />
      {/* <Modal
        sliderDisplay={sliderDisplay}
        handleSliderDisplay={handleSliderDisplay}
      /> */}
    </>
  )
}

const Image = styled.img`
  width: 100px;
  height: 100px;
`

export default Home
