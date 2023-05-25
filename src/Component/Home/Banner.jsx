import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="carousel mt-10 w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/non-binary-kids-playing-with-cars-game_23-2148779599.jpg?w=1060&t=st=1684983459~exp=1684984059~hmac=d2cac45c6a590df83ac793f929db8012d3bd4e933b70fe2ec9d803bc6470ef70"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/kids-home-playing-with-toys_23-2148630637.jpg?w=826&t=st=1684983521~exp=1684984121~hmac=d0c7c4aacc9bd875cb4aa67ea2f292f03cad5e90d45a35afa790b73408c7b2df"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-photo/high-angle-siblings-playing-with-toys_23-2148355142.jpg?w=900&t=st=1684983784~exp=1684984384~hmac=a8a23def0e9912f31386104c7ea73956490e0723f27640fc396b399bf9ea26e3"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/premium-photo/focused-kid-playing-with-dinosaurs-home-boy-learning-paleontology-by-dino-toys-leisure-concept-clever-child-early-education_159315-737.jpg?w=900"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
