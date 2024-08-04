import React from 'react'
import { styled } from '@linaria/react'
import FileInput from '../components/ui/FileInput'
import Form from '../components/ui/Form'
import StartButton from '../components/ui/StartButton'

function Home() {
  const [imageList, setImageList] = React.useState([])
  const [intervalTime, setIntervalTime] = React.useState('1 min')
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

  React.useEffect(() => {
    console.log(intervalTime)
  }, [intervalTime])

  return (
    <>
      <Form intervalTime={intervalTime} setIntervalTime={setIntervalTime} />
      <FileInput handleImage={handleImage} />
      {imageList.map((item) => (
        <Image src={item} alt='' key={crypto.randomUUID()} />
      ))}
      <div>
        {intervalTime} - {`${sliderDisplay}`}
      </div>
      <StartButton handleSliderDisplay={handleSliderDisplay} />
    </>
  )
}

const Image = styled.img`
  width: 100px;
  height: 100px;
`

export default Home
