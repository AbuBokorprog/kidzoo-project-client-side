import React from "react";
import useRoute from "../../RouteHook/UseRoute";

const About = () => {
  useRoute("About");
  return (
    <div>
      <div>
        <img
          className="w-full"
          src="https://img.freepik.com/free-vector/about-us-page-concept-illustration_114360-3931.jpg?w=900&t=st=1685261836~exp=1685262436~hmac=f7b91d0d8b1b699ab8750568d35c58df876d3280dd34a3472ab5b99dc962312d"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
