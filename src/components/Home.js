import React, { useEffect } from "react";

const Home = ({ getInfo, getInf, getData, getInform }) => {
  useEffect(() => {
    const num = Math.floor(Math.random() * 1000);
    const mun = Math.floor(Math.random() * 1000);
    const qty = Math.floor(Math.random() * 1000);
    const ytq = Math.floor(Math.random() * 1000);
    console.log(num);
    console.log(mun);
    console.log(qty);
    console.log(ytq);
    getInfo(num);
    getInf(mun);
    getInform(qty);
    getData(ytq);
    //es-lint disable link
  }, []);

  return <div></div>;
};

export default Home;
