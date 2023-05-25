import Bigbubble from "../../../component/bubbles/bigbubble/Bigbubble";
import Smallbubble from "../../../component/bubbles/smallbubble/Smallbubble";

const CenterComponent = () => {
  return (
    <div className="center">
      <Bigbubble
        styling={{ width: "213px", height: "213px", left: "44%", top: "93px" }}
      />
      <Bigbubble
        styling={{ width: "100px", height: "100px", left: "31%", top: "300px" }}
      />
      <Bigbubble
        styling={{
          width: "220px",
          height: "220px",
          left: "6%",
          bottom: "20px",
        }}
      />
      <Bigbubble
        styling={{
          width: "400px",
          height: "400px",
          right: "-101px",
          bottom: "-100px",
        }}
      />
      <Bigbubble
        styling={{
          width: "250px",
          height: "250px",
          left: "-31px",
          top: "-10px",
        }}
      />
    
       <Bigbubble
        styling={{
          width: "200px",
          height: "200px",
          right: "101px",
          top: "-100px",
        }}
      />
      <Smallbubble
        styling={{
          width: "42px",
          height: "42px",
          left: "5%",
          top: "5%",
        }}
      />
      <Smallbubble
        styling={{
          width: "35px",
          height: "35px",
          left: "34%",
          top: "17%",
        }}
      />
      <Smallbubble
        styling={{
          width: "45px",
          height: "45px",
          left: "19%",
          top: "42%",
        }}
      />
      <Smallbubble
        styling={{
          width: "45px",
          height: "45px",
          left: "15%",
          bottom: "12%",
        }}
      />
      <Smallbubble
        styling={{
          width: "40px",
          height: "40px",
          right: "15%",
          bottom: "12%",
        }}
      />
      <Smallbubble
        styling={{
          width: "120px",
          height: "120px",
          right: "46%",
          bottom: "-2%",
        }}
      />
      <Smallbubble
        styling={{
          width: "70px",
          height: "70px",
          right: "2%",
          top: "6%",
        }}
      />
      <Smallbubble
        styling={{
          width: "40px",
          height: "40px",
          right: "27%",
          top: "21%",
        }}
      />
      <Smallbubble
        styling={{
          width: "24px",
          height: "24px",
          right: "41%",
          bottom: "33%",
        }}
      />
      <Smallbubble
        styling={{
          width: "28px",
          height: "28px",
          right: "11%",
          top: "41%",
        }}
      />
    </div>
  );
};

export default CenterComponent;
