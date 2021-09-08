import React, {Component} from "react";

export class NewsBlock extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className="container p-2 my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={!imageUrl ? "https://techcrunch.com/wp-content/uploads/2021/09/Microsoft_Clipchamp.jpeg?w=764":imageUrl} className="card-img-center" alt="news_image"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
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
