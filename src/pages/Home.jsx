import React from 'react'
import { styled } from '@linaria/react'

function Home() {
  const [imageList, setImageList] = React.useState([])

  const handleImage = (event) => {
    let arr = []
    for (const obj of event.target.files) {
      let url = URL.createObjectURL(obj)
      arr = [...arr, url]
    }
    setImageList([...arr])
    console.log(arr)
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
      {' '}
      <FileInput handleImage={handleImage} />
      {imageList.map((item) => (
        <Image src={item} alt='' key={crypto.randomUUID()} />
      ))}
    </>
  )
}

const Image = styled.img`
  width: 100px;
  height: 100px;
`

export default Home
