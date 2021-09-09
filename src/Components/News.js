import React, { Component } from "react";
import NewsBlock from "./NewsBlock";
import PropTypes from 'prop-types';
import Spinner from './Spinner'

export class News extends Component {
  static defaultProps ={
    country : 'in',
    pageSize : 8 ,
    category : 'general',
    
  }
  static propTypes ={
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  Prev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=baa7bb6a65144a35867128e1eb31dac0&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    
    this.setState({ loading : true });
    let data = await fetch(url);
    let parsed_data = await data.json();
    console.warn(parsed_data);
    this.setState({
      articles: parsed_data.articles,
      page: this.state.page - 1,
      loading : false
    });
  };

  Next = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize))){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=baa7bb6a65144a35867128e1eb31dac0&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      
     this.setState({ loading : true });
      let data = await fetch(url);
      let parsed_data = await data.json();
      console.warn(parsed_data);
      this.setState({
        articles: parsed_data.articles,
        page: this.state.page + 1,
        loading : false
      });
    }
  };

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=baa7bb6a65144a35867128e1eb31dac0&page=1&pageSize=${this.props.pageSize}`;
    
      this.setState({loading:true});
    let data = await fetch(url);
    let parsed_data = await data.json();
    this.setState({
      articles: parsed_data.articles,
      totalResults: parsed_data.totalResults,
      loading :false
    });
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center my-3">News Duniya - Top News </h2>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div
                className="col-md-4 text-center"
                key={element.url ? element.url : ""}
              >
                <NewsBlock
                  key={element.url}
                  title={element.title ? element.title.slice(0, 45) : " "}
                  description={
                    element.description ? element.description.slice(0, 85) : " "
                  }
                  imageUrl={element.urlToImage}
                  newsUrl= {element.url}
                  author = {element.author}
                  date   = {element.publishedAt}
                  source = {element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container p-3">
          <div className="d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              className="btn btn-outline-danger"
              onClick={this.Prev}
            >
              &larr; Prev
            </button>

            <button  disabled={this.state.page + 1 > Math.ceil(this.state.totalResults /this.props.pageSize)} className="btn btn-outline-danger" onClick={this.Next}>
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
