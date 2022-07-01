import { Radar } from "react-chartjs-2";
import "chart.js/auto";
import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);

export default function RadarChart({ heading, sentiments }) {
  let radarData = [];
  let radarLabels = [];
  let radarBackground = [];
  function generateRandomColorRgb() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
  }

  if (sentiments) {
    sentiments.map((value) => {
      radarData.push(value.number);
      radarLabels.push(value.value);
      radarBackground.push(generateRandomColorRgb());
    });
  }
  const data = {
    labels: radarLabels,

    datasets: [
      {
        label: "Number of Sentiments",
        data: radarData,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center text-center">
      <h2 className=" text-lg mt-8">{heading}</h2>
      <div className="mt-3" style={{ height: 600, width: 600 }}>
        <Radar
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
}
