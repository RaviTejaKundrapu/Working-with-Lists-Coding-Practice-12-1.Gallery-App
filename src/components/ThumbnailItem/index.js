// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, changeImage, isselectedApplyStyle} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const onChangeImage = () => {
    changeImage(id)
  }
  const removeColorToImage = isselectedApplyStyle ? '' : 'shade'
  return (
    <li className="ThumbnailImage">
      <button onClick={onChangeImage} className="buttonstyles" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={removeColorToImage}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
