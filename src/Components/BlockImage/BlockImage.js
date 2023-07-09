import './BlockImage.css';
import image from '../../Pictures/Image.png'

function BlockImage() {

    return (
        <>
            <div className="blockImage">
                <div className="Image">
                    <img src={image}/>
                </div>
                
            </div>
        </>
    );

}

export default BlockImage;