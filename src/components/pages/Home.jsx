import RectangularCard from "../RectangularCard";
import { LuArrowDown, LuArrowUp } from "react-icons/lu";
import TestChart from "../TestChart";
import { useEffect, useState } from "react";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fakeApiResponse = [
        {
          title: "Доходи",
          value: "$12,345",
          percent: "+5%",
          percentColor: "text-green-600",
          percentBg: "bg-green-100",
          description: "Загальний дохід за місяць",
          icon: "up",
        },
        {
          title: "Користувачі",
          value: "1,234",
          percent: "+10%",
          percentColor: "text-red-600",
          percentBg: "bg-red-100",
          description: "Загальна кількість користувачів",
          icon: "down",
        },
      ];

      const mappedData = fakeApiResponse.map((item) => ({
        ...item,
        icon: item.icon === "up" ? <LuArrowUp /> : <LuArrowDown />,
      }));

      setCards(mappedData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <p>Завантаження</p>;
  }

  return (
    <>
      <div className="flex flex-row gap-4">
        {cards.map((card, index) => (
          <RectangularCard key={index} {...card} />
        ))}
      </div>
      <div className="mt-10 max-w-3xl">
        <TestChart />
      </div>
    </>
  );
};

export default Home;
