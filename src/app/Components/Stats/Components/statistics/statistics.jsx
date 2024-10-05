import "./statistics.scss";
import { signOut } from "next-auth/react";
import { Chart as ChartJS } from "chart.js/auto";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { Line } from "react-chartjs-2";
export default function Statistics() {
  return (
    <>
      <div id="statistics-container">
        <div id="title-stats" onClick={() => signOut({ callbackUrl: "/" })}>
          <span id="leet-stats">Leet</span>
          <span id="buddy-stats">Buddy</span>
        </div>
        <div id="user-stats">
          <div id="questions">
            <div id="easy">
              <span id="number">23</span>
              <div
                id="bar"
                style={{
                  width: `${(23 / 1726) * 500}%`,
                  backgroundColor: "#28C244",
                }}
              ></div>
              <span id="number">1756</span>
              <span id="caption" style={{ color: "#28C244" }}>
                Easy
              </span>
            </div>
            <div id="medium">
              <span id="number">50</span>
              <div
                id="bar"
                style={{
                  width: `${(50 / 1726) * 500}%`,
                  backgroundColor: "#FFA116",
                }}
              ></div>
              <span id="number">1726</span>
              <span id="caption" style={{ color: "#FFA116" }}>
                Medium
              </span>
            </div>
            <div id="hard">
              <span id="number">7</span>
              <div
                id="bar"
                style={{
                  width: `${(7 / 756) * 500}%`,
                  backgroundColor: "#F63737",
                }}
              ></div>
              <span id="number">756</span>
              <span id="caption" style={{ color: "#F63737" }}>
                Hard
              </span>
            </div>
          </div>

          <div id="total-solved"></div>
          <div id="other-stats">
            <div id="reputation"></div>
            <div id="aceptance"></div>
            <div id="ranking"></div>
          </div>
          <div id="chart-container">
            {/* <Line 
            data={{
              area:true,
              labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
              datasets:[
                {
                  label:"Contributions",
                  data:[2,4,8,2,0,0,1]
                }
              ],
            }}
          /> */}
            {/* <LineChart
              margin={{
                left: 5,
                right: 10,
                top: 30,
                bottom: 40,
              }}
              xAxis={[
                {
                  tickLabelStyle: {
                    fill: "white", // Change the x-axis tick label color to blue
                  },
                  type: "ordinal",
                  data: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],

                },
              ]}
              yAxis={[
                {
                  tickLabelStyle: {
                    fill: "white", // Change the x-axis tick label color to blue
                  },
                },
              ]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                  area: true,
                  color: "#28C244",
                },
              ]}
              width={1000}
              height={300}
            /> */}
            <BarChart
              xAxis={[
                {
                  tickLabelStyle: {
                    fill: "white", // Change the x-axis tick label color to blue
                    fontSize: 22,
                  },

                  scaleType: "band",
                  data: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                },
              ]}
              series={[
                { data: [4, 1, 2, 1, 3, 2, 5], color: "#28C244" },
                // { data: [1] },
                // { data: [2] },
                // { data: [0] },
                // { data: [3] },
                // { data: [2] },
                // { data: [5] },
              ]}
              yAxis={[
                {
                  tickLabelStyle: {
                    fill: "white", // Change the x-axis tick label color to blue
                    fontSize: 24,
                  },
                },
              ]}
              width={1000}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
}
