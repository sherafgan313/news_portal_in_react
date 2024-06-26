// import React, { Component } from 'react'
import React from 'react'

// export class NewsItem extends Component {

const NewsItem = (props) => {


  // render() {
    // let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{display:"flex", justifyContent:"flex-end", position:"absolute", right:"0"}}><span className="badge rounded-pill bg-danger" style={{left:"90%", zIndex:"1"}}>{source}</span></div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} at {new Date(date).toLocaleTimeString()}</small></p>
            <a href={newsUrl} target='_blank' rel='noreferrer noopener' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  // }
// }
}

export default NewsItem