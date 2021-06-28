import axios from 'axios'

const IMAGE_UPLOAD_URL ="https://vikash-image-app.herokuapp.com/upload"

class ImageService {
    saveImage(image){
        return axios.post(IMAGE_UPLOAD_URL,image)
    }
}
export default new ImageService()