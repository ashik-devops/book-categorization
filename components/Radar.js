import { Radar } from "react-chartjs-2";
import "chart.js/auto";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);

export default function Radar({ heading, sentiments }) {
  let radarData = [];
  let radarLabels = [];
  function generateRandomColorRgb() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
  }

  if (sentiments) {
    sentiments.map((value) => {
      barData.push(value.number);
      barLabels.push(value.value);
      barBackground.push(generateRandomColorRgb());
    });
  }
  const data = {
    labels: barLabels,

    datasets: [
      {
        data: barData,
        backgroundColor: barBackground,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className=" text-lg mt-8">{heading}</h2>
      <div className="mt-3">
        <Radar
          data={data}
          options={{
            plugins: {
              datalabels: {
                backgroundColor: function (context) {
                  return context.dataset.backgroundColor;
                },
                borderColor: "white",
                borderRadius: 5,
                borderWidth: 1,
                color: "white",
                font: {
                  weight: "bold",
                },
                padding: 6,
              },

              legend: {
                display: false,
              },
            },

            radius: 140,
          }}
        />
      </div>
    </div>
  );
}
