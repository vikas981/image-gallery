import React from "react";
import GIF from "./static/img/spinner.gif";

class Gallery extends React.Component {
 state = {
    loading: false,
    details: [],
  };
  async componentDidMount() {
    const url = "https://vikash-image-app.herokuapp.com/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ details: data, loading: true });
  }
   render() {
    var { details, loading } = this.state;
    if (!loading) {
         return (
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <img src={GIF} alt="" className="spinner"></img>
            </div>
          </div>
        </div>
      );
    }  else {
      return (
      <>
    
    <div className="menu-items container-fluid mt-5">
      <div className="row">
        <div className="col-11 mx-auto">
          <div className="row my-5">{
              details.map((elem) => {
              const { imgName, imgURL, imgDetails } = elem;
            return (     
            <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
              <div className="row Item-inside">
                {/* for images */}
                  <div className="col-12 col-md-12 col-lg-4 img-div">
                   <img src={imgURL} alt={imgName} className="img-fluid"/>
                   </div>{/* menu items description */}
                      <div className="col-12 col-md-12 col-lg-8">
                       <div className="main-title pt-4 pb-3">
                        <h1>{imgName}</h1>
                         <p>{imgDetails}</p>
                         </div>            
                         </div>
                        </div>
                      </div>
                          )
                        })
                    }
                     </div>
                    </div>
                </div>
            </div>
    
            
        </>
      );
    }
  }
}
export default Gallery