import React, { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Chart = () => {
  const type = useParams();
  const dataType = type.id;
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:3001/dummy");
      setData(response.data);
    }
    fetchData();
  }, []);

  const handleFilter = (e) => {
    let dataType = e;
    let filterData;
    filterData = data.filter((id) => id.id === dataType);
    console.log(filterData);
    setChartData(filterData);
  };
  // const chartData = data.filter((id) => id.id === dataType);
  return (
    <div style={{ width: "auto", height: "400px", margin: "0 auto" }}>
      {data.map((item) => (
        <button
          variant="contained"
          color="success"
          key={item.id}
          // onClick={() => navigate(`/datachart/${item.id}`)}
          onClick={() => handleFilter(item.id)}
        >
          {item.id}
        </button>
      ))}
      <ResponsiveLine
        data={chartData}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Chart;
