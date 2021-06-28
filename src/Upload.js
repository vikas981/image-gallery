import React from 'react';
import ImageService from './ImageService'

class Upload extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            imgName: '',
            imgURL: '',
            imgDetails: ''
        }
        this.changeImageName=this.changeImageName.bind(this)
        this.changeImageUrl=this.changeImageUrl.bind(this)
        this.changeImageDescription=this.changeImageDescription.bind(this)
        this.saveImage=this.saveImage.bind(this)
       

    }
    changeImageName=(e)=>{
        this.setState({imgName: e.target.value});
    }
     changeImageUrl=(e)=>{
        this.setState({imgURL: e.target.value});
    }
     changeImageDescription=(e)=>{
        this.setState({imgDetails: e.target.value});
    }
    saveImage=(e)=>{
        e.preventDefault();
        let img={imgName:this.state.imgName, imgURL:this.state.imgURL, imgDetails:this.state.imgDetails}
        ImageService.saveImage(img).then(res =>{
            this.props.history.push("/")
        })

    }
    cancel(){
        this.props.history.push('/')
    }

    render() {
    return(
        <>
        <div className="menu-items container-fluid mt-5">
        <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h4 className="text-center mt-4">Add Image</h4>
                    <div className="card-body">
                        <form>
                            <div className="form-group mt-4">
                                <label>Image Name</label>
                                <input placeholder="image name" name="image_name" className="form-control"
                                value={this.state.imgName} onChange={this.changeImageName}/>
                            </div>
                             <div className="form-group mt-4">
                                <label>Image Url</label>
                                <input placeholder="Image Url" name="image_url" className="form-control"
                                value={this.state.imgURL} onChange={this.changeImageUrl}/>
                            </div>

                             <div className="form-group mt-4">
                                <label>Description</label>
                                <input placeholder="Description" name="image_desc" className="form-control"
                                value={this.state.imgDetails} onChange={this.changeImageDescription}/>
                            </div>

                            <button className="btn btn-success mt-2" onClick={this.saveImage}>Save</button>
                            <button className="btn btn-danger mt-2" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
 
        </>
    )
}
  
}
export default Upload