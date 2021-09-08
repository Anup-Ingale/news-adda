import React, {Component} from "react";

export class NewsBlock extends Component {
    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className="container p-2 my-3">
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} className="card-img-center" alt="..."/>
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
