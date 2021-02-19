import "./Loader.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";

const NotificationTemplate = ({ hasLoader }) => {
  if (hasLoader)
    return (
      <div className="loaderContainer">
        <div className="backdrop" />
        <div className="loaderBlock">
          <Loader type="ThreeDots" color="#00BFFF" height={32} width={32} />
        </div>
      </div>
    );
  return false;
};

const mapState = (state) => ({
  hasLoader: state.loader.hasLoader,
});

export default connect(mapState)(NotificationTemplate);
