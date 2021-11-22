/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./ImageHeader.css";

const ImageHeader = () => {
  return (
    <section className="categories">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div className="dresses">
              <div className="categories_text">
                <h4>Dresses</h4>
                <button className="btn btn-success">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 other-row">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div className="shoes">
                  <div className="categories__text">
                    <h4>Shoes</h4>
                    <button className="btn btn-success">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div className="active-wear">
                  <div className="categories__text">
                    <h4>Accessories</h4>
                    <button className="btn btn-success">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div className="cosmetics">
                  <div className="categories__text">
                    <h4>Beauty</h4>
                    <button className="btn btn-success">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div className="accessories">
                  <div className="categories__text">
                    <h4>Purses</h4>
                    <button className="btn btn-success">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageHeader;
