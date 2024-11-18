
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";

const Statis = ({ selectedMonth }) => {
  const [Statis, setStatis] = useState({
    totalSaleAmount: 0,
    totalSoldItems: 0,
    totalNotSoldItems: 0,
  });

  useEffect(() => {
    const fetchStatis = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/Statis?month=${selectedMonth}`
        );
        const data = await response.json();
        setStatis(data);
      } catch (error) {
        console.error("Error fetching Statis:", error);
      }
    };

    fetchStatis();
  }, [selectedMonth]);

  const pieData = {
    labels: ["Total Sale Amount", "Total Sold Items", "Total Not Sold Items"],
    datasets: [
      {
        data: [
          Statis.totalSaleAmount,
          Statis.totalSoldItems,
          Statis.totalNotSoldItems,
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="pb-5">
      <div className=" font-bold text-black text-4xl text-center m-5">
        Statis - {selectedMonth}
      </div>
      <div className="flex justify-center m-5">
        <div className=" container max-w-max p-4 bg-[#f8df8c] rounded-xl">
          <div className="flex flex-row flex-wrap gap-5">
            <div>
              <h3 className=" font-bold">Total Sale Amount</h3>
              <h3 className=" font-bold">Total Sold Items</h3>
              <h3 className=" font-bold">Total Not Sold Items</h3>
            </div>
            <div>
              <h3 className=" font-bold">{Statis.totalSaleAmount}</h3>
              <h3 className=" font-bold">{Statis.totalSoldItems}</h3>
              <h3 className=" font-bold">{Statis.totalNotSoldItems}</h3>
            </div>
          </div>
          <div className="mt-5">
            <Pie data={pieData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statis;
