import PropTypes from 'prop-types';
import style from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';

export default function ImageGallery({ photos, ...otherProps }) {
  return (
    <ul className={style.gallery}>
      {photos.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          otherProps={otherProps}
          url={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
  otherProps: PropTypes.shape({
    getModalImg: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
  }),
};
