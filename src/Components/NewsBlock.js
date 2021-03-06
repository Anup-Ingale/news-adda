import React, { Component } from "react";

export class NewsBlock extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="container p-2 my-4">
        <div className="card">
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left: '50%!important',zIndex:43}}>
            {source}
        </span>
          <img
            src={
              !imageUrl
                ? "https://techcrunch.com/wp-content/uploads/2021/09/Microsoft_Clipchamp.jpeg?w=764"
                : imageUrl
            }
            className="card-img-center"
            alt="news_image"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                {" "}
                By {!author ? "unknown" : author} on{" "}
                {new Date(date).toDateString()}
              </small>
            </p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-outline-danger text-center"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsBlock;
