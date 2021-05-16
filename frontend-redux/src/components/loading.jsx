import "./loading.css"
import loadingGif from '../imgs/loading.gif'

const loading = () => {
    return (
        <div className="loading">
            <img src={loadingGif} alt="" className="loadingGif" />
        </div>
    );
}

export default loading;