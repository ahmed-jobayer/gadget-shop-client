import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <HashLoader
        color={"#852f2f"}
        loading={true}
        cssOverride={""}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> 
    </div>
  );
};

export default Loading;
