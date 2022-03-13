import React from "react";
class RoadMapItem extends React.Component {
  render() {
    let { title, value } = this.props;
    return (
      <div className="road-map__item">
        <h5 className="text-white">
          <div className="road-map__item-prefix">
            <i className="fa fa-check" style={{ zIndex: "999" }}></i>
          </div>
          <span className="font-weight-bold">{title}</span>
          {value && (
            <>
              {" "}
              - <span className="font-weight-normal">{value}</span>
            </>
          )}
        </h5>
      </div>
    );
  }
}

export default RoadMapItem;
