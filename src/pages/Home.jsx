import React from 'react'
import FileInput from '../components/ui/FileInput'
import Form from '../components/ui/Form'
import Button from '../components/ui/Button'
import Modal from '../components/slider/Modal'

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
    setImageList([...arr])
    console.log(arr)
  }

  const handleSliderDisplay = () => {
    setSliderDisplay(!sliderDisplay)
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
    <section className='bg-primary w-full flex flex-col items-center gap-12 max-w-xl py-12'>

      <FileInput handleImage={handleImage} />
      <Form intervalTime={intervalTime} setIntervalTime={setIntervalTime} />
      <Button handleButton={handleSliderDisplay} />
      {sliderDisplay && (
        <Modal
          sliderDisplay={sliderDisplay}
          handleSliderDisplay={handleSliderDisplay}
          intervalTime={intervalTime}
          imageList={imageList}
        />
      )}
    </section>
  )
}

export default Home
