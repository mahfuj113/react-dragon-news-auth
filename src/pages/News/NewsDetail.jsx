import PropTypes from 'prop-types'

const NewsDetail = ({news}) => {
    const {image_url,title, details} = news;
  return (
    <div className='space-y-5'>
        <img className='w-full' src={image_url} alt="" />
        <p className='font-bold'>{title}</p>
        <p>{details}</p>
    </div>
  )
}

NewsDetail.propTypes = {
    news: PropTypes.object.isRequired
}

export default NewsDetail