const LeftComponent = ({ goToSingup }: any) => {
  return (
    <div className="left">
      <h1 onClick={goToSingup}>Go to singup</h1>
    </div>
  );
};

export default LeftComponent;
