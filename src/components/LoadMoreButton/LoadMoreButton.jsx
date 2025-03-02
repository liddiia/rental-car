import css from './LoadMoreButton.module.css';

const LoadMoreButton = ({ onClick }) => {

  return (

    <button 
    className={css.LoadMoreBtn} 
    onClick={onClick}>
     Load more
   </button>
  )
}

export default LoadMoreButton;