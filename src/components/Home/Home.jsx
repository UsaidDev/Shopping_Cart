import React from 'react'
import './Home'
function Home() {
  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-12 col-sm-4 col-md-3 col-lg-4">
            <div className="d-flex justify-content-center align-items-center vh-100">
              <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home
