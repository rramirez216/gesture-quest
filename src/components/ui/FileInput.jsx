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
