import React, { Component } from "react";

class Article extends Component {
  render() {
    const id = this.props.match.params.id;
    const article = this.props.articles.find(t => t.id === id);
    const articleContent = article ? (
      <div>
        <img src={article.picurl} alt="" />
        <h3>{article.title}</h3>
        <div>{article.body}</div>
      </div>
    ) : (
      "请稍等"
    );
    console.log(article);
    return <div>{articleContent}</div>;
  }
}

export default Article;
