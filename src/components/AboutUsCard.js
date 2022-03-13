import React from "react";
import TextEffect from "./TextEffect";
class AboutUsCard extends React.Component {
  render() {
    let { img, title, desc } = this.props;
    return (
      <div className="card__main">
        <div className="card__img">
          <img src={img} />
        </div>
        <div className="card__content">
          <div id="style__heading">
            <TextEffect title={title} />
          </div>
          <span
            id="card__span"
            dangerouslySetInnerHTML={{ __html: desc }}
          ></span>
        </div>
      </div>
    );
  }
}

export default AboutUsCard;
