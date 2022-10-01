import { ThreeDots } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Spinner.scss"

const Spinner = () => {
    return (
      <div className="spinner-container">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#034867"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    );
};

export default Spinner;