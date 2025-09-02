import React from "react";
import RevenueCard from "../RevenueCard";
import PeopleCard from "../PeopleCard";
import RectangularCard from "../RectangularCard";
import { LuHouse, LuArrowDown, LuArrowUp} from "react-icons/lu";
import TestChart from "../TestChart";

const Home = () => {
  return (
    <>
      <div className="flex flex-row gap-4">
        <RectangularCard
          title="Доходи"
          value="$12,345"
          icon={<LuArrowUp />}
          percent="+5%"
          percentColor="text-green-600"
          percentBg="bg-green-100"
          description="Загальний дохід за місяць"
        />
        <RectangularCard
          title="Користувачі"
          value="1,234"
          icon={<LuArrowDown />}
          percent="+10%"
          percentColor="text-red-600"
          percentBg="bg-red-100"
          description="Загальна кількість користувачів"
        />
      </div>
      <div className="mt-10 max-w-3xl">
      <TestChart />
      </div>
    </>
  );
};

export default Home;
