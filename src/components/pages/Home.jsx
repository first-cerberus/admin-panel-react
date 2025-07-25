import React from "react";
import RevenueCard from "../RevenueCard";
import PeopleCard from "../PeopleCard";
import { LuHouse } from "react-icons/lu";
import TestChart from "../TestChart";

const Home = () => {
  return (
    <>
      <h1 className="mb-5 mt-5 text-4xl flex gap-4"><LuHouse />Головна</h1>
      <div className="flex flex-row gap-4">
        <RevenueCard />
        <PeopleCard />
        <RevenueCard />
      </div>
      <div className="mt-10 max-w-3xl">
      <TestChart />
      </div>
    </>
  );
};

export default Home;
