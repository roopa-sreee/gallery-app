// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onClickThumbnail, isSelected} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailDetails

  const onClickThumbnailItem = () => {
    onClickThumbnail(id)
  }
  const selectedImageClassName = isSelected ? 'selected-image-className' : ''

  return (
    <>
      <li className="thumbnail-item-container">
        <button type="button" onClick={onClickThumbnailItem}>
          <img
            src={thumbnailUrl}
            className={`thumbnail-image ${selectedImageClassName}`}
            alt={thumbnailAltText}
          />
        </button>
      </li>
    </>
  )
}

export default ThumbnailItem
