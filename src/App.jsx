import React from 'react'
import { styled } from '@linaria/react'

function App() {
  const [image, setImage] = React.useState([])

  const handleImage = (event) => {
    let arr = []
    for (const obj of event.target.files) {
      let url = URL.createObjectURL(obj)
      arr = [...arr, url]
    }
    setImage([...arr])
    console.log(arr)
  }

  React.useEffect(() => {
    return () => {
      if (image.length > 0) {
        URL.revokeObjectURL(image)
      }
    }
  }, [image])

  return (
    <Main>
      <FileInput handleImage={handleImage} />
      {image.map((item) => (
        <Image src={item} alt='' key={crypto.randomUUID()} />
      ))}
    </Main>
  )
}

function FileInput({ handleImage }) {
  return (
    <>
      <input
        type='file'
        name='file'
        id='file'
        accept='image/*'
        onChange={(event) => handleImage(event)}
        multiple
      />
    </>
  )
}

const Main = styled.main`
  max-height: 100%;
`
const Image = styled.img`
  width: 100px;
  height: 100px;
`
export default App
