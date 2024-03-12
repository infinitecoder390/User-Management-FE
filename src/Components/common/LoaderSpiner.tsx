import LoaderImage from "../../assets/Loader/loaderSpiner.gif";
const LoaderSpiner = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center bg-transparent">
      <img src={LoaderImage} alt="Loader" className="w-20 h-20 animate-spin" />{" "}
    </div>
  );
};
export default LoaderSpiner;
