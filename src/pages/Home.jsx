import React from 'react'
import FileInput from '../components/ui/FileInput'
import Form from '../components/ui/Form'
import Button from '../components/ui/Button'
import Modal from '../components/slider/Modal'
import shuffleArray from './Home.helpers.js'

function Home() {
  const [imageList, setImageList] = React.useState([])
  const [intervalTime, setIntervalTime] = React.useState({
    radioNum: 30,
    radioStr: 'secs',
  })
  const [sliderDisplay, setSliderDisplay] = React.useState(false)

  const handleImage = (event) => {
    let arr = []

    for (const obj of event.target.files) {
      let url = URL.createObjectURL(obj)
      arr = [...arr, url]
    }

    setImageList(shuffleArray(arr))

    console.log(arr)
  }

  const handleSliderDisplay = () => {
    if (imageList.length > 0) {
      setSliderDisplay(!sliderDisplay)
    }
  }

  React.useEffect(() => {
    return () => {
      if (imageList.length > 0) {
        URL.revokeObjectURL(imageList)
        console.log('cleared!')
      }
    }
  }, [imageList])

  return (
    <main className='w-full h-full flex flex-col items-center justify-center md:px-8'>
      <Form intervalTime={intervalTime} setIntervalTime={setIntervalTime} sliderDisplay={sliderDisplay}>
        <FileInput handleImage={handleImage} />
        <Button handleButton={handleSliderDisplay} buttonStr={'Start'} buttonType={'submit'} />
      </Form>
      {sliderDisplay && (
        <Modal
          sliderDisplay={sliderDisplay}
          handleSliderDisplay={handleSliderDisplay}
          intervalTime={intervalTime}
          imageList={imageList}
        />
      )}
    </main>
  )
}

export default Home
