import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-center text-5xl font-bold">Home</div>
      <p className="mt-5 w-[16rem] sm:w-[32rem] lg:w-[40rem] mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        tenetur veritatis rem doloremque. Quisquam quia impedit expedita a id
        eligendi saepe vel non, cumque, in nemo nam reiciendis mollitia ex.
      </p>
    </>
  );
};

export default Home;
