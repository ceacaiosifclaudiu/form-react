const RightComponent = ({ goToLogin }: any) => {
  return (
    <div className="right">
      <h1 onClick={goToLogin}>Go to login</h1>
    </div>
  );
};

export default RightComponent;
