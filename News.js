// import React, { Component } from 'react'
import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


// export class News extends Component {


// Change all this.props to props
const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  // static defaultProps = {
  //   country: "us",
  //   pageSize: 6,
  //   category: "general"
  // }

  // static propTypes = {
  //   country: PropTypes.string,
  //   pageSize: PropTypes.number,
  //   category: PropTypes.string
  // }
  // articles = []

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  // capitalize = (str) => {
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // }

  // constructor(props) {
    // super(props);
    // this.state = {
    //   articles: [],
    //   loading: true,
    //   page: 1,
    //   totalResults: 0
    // }
    // document.title = `${this.capitalize(props.category)} - NewsPortal`
  // }

  // async updateNews() {
    const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`
    // this.setState({ loading: true })
    setLoading(true)
    let data = await fetch(url)
    props.setProgress(30);
    let parsedData = await data.json()
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // })
    props.setProgress(100);

  // }
  }

  useEffect(() => {
    document.title = `${capitalize(props.category)} - NewsPortal`
    updateNews()
    //eslint-disable-next-line
  }, [])
  

  // async componentDidMount() {
  //   this.updateNews()
  // }

  // const handlePrevClick = async () => {
  //   setPage(page-1)
  //   updateNews()

  // }
  // handlePrevClick = async () => {

  //   this.setState({
  //     page: this.state.page - 1,
  //   })
  //   this.updateNews()

  // }

  // const handleNextClick = async () => {

  //   this.setState({
  //     page: this.state.page + 1,
  //   })
  //   this.updateNews()
  // }
  // const handleNextClick = async () => {
  //   setPage(page+1)
  //   updateNews()
  // }

  const fetchMoreData = async () => {
    // this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}`
    setPage(page+1)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    // })
  };


  // render() {
    return (
      <>
        <h1 className='text-center' style={{ margin: "35px 0px", marginTop:"90px" }}>NewsPortal - Top Headlines on {capitalize(props.category)}</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return <div className="col-md-4" key={element.url} >
                  <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                </div>
              })}

            </div>
          </div>
        </InfiniteScroll>
      </>
    )
  // }
// }
}

News.defaultProps = {
  country: "us",
  pageSize: 6,
  category: "general"
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News