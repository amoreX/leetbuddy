"use client";

import "./statistics.scss";
import { signOut } from "next-auth/react";
import { Chart as ChartJS } from "chart.js/auto";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { motion } from "framer-motion";
export default function Statistics({
  stats,
  profilestats,
  friendlist,
  calendar,
}) {
  const loadsvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      id="loading-animation"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M20.0001 12C20.0001 13.3811 19.6425 14.7386 18.9623 15.9405C18.282 17.1424 17.3022 18.1477 16.1182 18.8587C14.9341 19.5696 13.5862 19.9619 12.2056 19.9974C10.825 20.0328 9.45873 19.7103 8.23975 19.0612"
          stroke="#ffffff"
          strokeWidth="3.55556"
          strokeLinecap="round"
        />{" "}
      </g>
    </svg>
  );

  const [cal, setCal] = useState(null);
  const [actualcal, setActualcal] = useState(null);
  const [sufficient, setSufficient] = useState(true);
  const [monthname, setMonthname] = useState(null);
  useEffect(() => {
    setCal(calendar?.data?.submissionCalendar);
    // console.log(calendar?.data?.submissionCalendar);
  }, [calendar]);
  useEffect(() => {
    if (cal != null) {
      const tempcal = JSON.parse(cal);
      // for (const key in tempcal){
      //   console.log(key,tempcal[key]);
      // }
      const sortedDictionary = Object.fromEntries(
        Object.entries(tempcal)
          .map(([key, value]) => [Number(key), value]) // Convert keys to numbers
          .sort(([key1], [key2]) => key1 - key2)
      );

      const sortedArray = Object.entries(sortedDictionary);
      if (sortedArray.length < 7) {
        setSufficient(false);
      } else {
        setSufficient(true);
      }
      // Get the last 10 pairs
      const last10pairs = sortedArray.slice(-7);
      let currmonth = 0;
      for (let i = 0; i < last10pairs.length; i++) {
        let date = new Date(Number(last10pairs[i][0]) * 1000);
        let day = date.getDate();
        let month = date.getMonth();
        if (month > currmonth) {
          currmonth = month;
        }
        last10pairs[i][0] = day;
      }

      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      setMonthname(monthNames[currmonth]);
      setActualcal(last10pairs);
    }
  }, [cal]);

  useEffect(() => {
    console.log(actualcal);
  }, [actualcal]);
  return (
    <>
      <div id="statistics-container">
        <div id="title-stats" onClick={() => signOut({ callbackUrl: "/" })}>
          <span id="leet-stats">Leet</span>
          <span id="buddy-stats">Buddy</span>
        </div>
        {friendlist && (
          <>
            {friendlist.length == 0 ? (
              <div id="warning">Add your account</div>
            ) : (
              <div id="user-stats">
                <div id="questions">
                  <motion.div
                    id="easy"
                    initial={{ y: -50, opacity: 0 }}
                    transition={{
                      type: "tween",
                      delay: 0.2,
                      ease: "easeInOut",
                    }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    <span id="number">
                      {!profilestats && loadsvg}
                      {stats?.data?.easySolved}
                    </span>
                    {profilestats && (
                      <div
                        id="bar"
                        style={{
                          width: `${(stats?.data?.easySolved / 828) * 500}%`,
                          backgroundColor: "#28C244",
                        }}
                      ></div>
                    )}
                    <span id="number">828</span>
                    <span id="caption" style={{ color: "#28C244" }}>
                      Easy
                    </span>
                  </motion.div>
                  <motion.div
                    id="medium"
                    initial={{ y: -50, opacity: 0 }}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      delay: 0.4,
                    }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    <span id="number">
                      {!profilestats && loadsvg}
                      {stats?.data?.mediumSolved}
                    </span>
                    {profilestats && (
                      <div
                        id="bar"
                        style={{
                          width: `${(stats?.data?.easySolved / 828) * 500}%`,
                          backgroundColor: "#28C244",
                        }}
                      ></div>
                    )}
                    <span id="number">1733</span>
                    <span id="caption" style={{ color: "#FFA116" }}>
                      Medium
                    </span>
                  </motion.div>
                  <motion.div
                    id="hard"
                    initial={{ y: -50, opacity: 0 }}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      delay: 0.6,
                    }}
                    animate={{ y: 0, opacity: 1 }}
                  >
                    <span id="number">
                      {!profilestats && loadsvg}
                      {stats?.data?.hardSolved}
                    </span>
                    {profilestats && (
                      <div
                        id="bar"
                        style={{
                          width: `${(stats?.data?.easySolved / 828) * 500}%`,
                          backgroundColor: "#28C244",
                        }}
                      ></div>
                    )}
                    <span id="number">752</span>
                    <span id="caption" style={{ color: "#F63737" }}>
                      Hard
                    </span>
                  </motion.div>
                </div>

                <motion.div
                  id="total-solved"
                  initial={{ scale: 0.1, opacity: 0 }}
                  transition={{ type: "tween", ease: "easeInOut", delay: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  Total Solved: {!profilestats && loadsvg}
                  {stats?.data?.solvedProblem}
                </motion.div>
                <div id="other-stats">
                  <motion.div
                    id="reputation"
                    initial={{ x: -50, opacity: 0 }}
                    transition={{ type: "tween", ease: "easeInOut", delay: 1 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    <span id="data">
                      {!profilestats && loadsvg}
                      {profilestats?.data?.reputation}
                    </span>
                    <span id="caption">Reputation</span>
                  </motion.div>
                  <motion.div
                    id="aceptance"
                    initial={{ scale: 0.1, opacity: 0 }}
                    transition={{ type: "tween", ease: "easeInOut", delay: 1 }}
                    animate={{ scale: 1, opacity: 1 }}
                  >
                    <span id="name">
                      {!profilestats && loadsvg}
                      {profilestats?.data?.name}
                    </span>
                    <span id="caption">Name</span>
                  </motion.div>
                  <motion.div
                    id="ranking"
                    initial={{ x: 50, opacity: 0 }}
                    transition={{ type: "tween", ease: "easeInOut", delay: 1 }}
                    animate={{ x: 0, opacity: 1 }}
                  >
                    <span id="data">
                      {!profilestats && loadsvg}
                      {profilestats?.data?.ranking}
                    </span>
                    <span id="caption">Ranking</span>
                  </motion.div>
                </div>
                <div id="chart-container">
                  {actualcal != null ? (
                    <>
                      {sufficient == true ? (
                        <BarChart
                          xAxis={[
                            {
                              tickLabelStyle: {
                                fill: "white", // Change the x-axis tick label color to blue
                                fontSize: 22,
                              },

                              scaleType: "band",
                              data: [
                                actualcal[0][0],
                                actualcal[1][0],
                                actualcal[2][0],
                                actualcal[3][0],
                                actualcal[4][0],
                                actualcal[5][0],
                                actualcal[6][0],
                                // actualcal[7][0],
                                // actualcal[8][0],
                                // actualcal[9][0],
                              ],
                            },
                          ]}
                          series={[
                            {
                              data: [
                                actualcal[0][1],
                                actualcal[1][1],
                                actualcal[2][1],
                                actualcal[3][1],
                                actualcal[4][1],
                                actualcal[5][1],
                                actualcal[6][1],
                                // actualcal[7][1],
                                // actualcal[8][1],
                                // actualcal[9][1],
                              ],
                              label: monthname,
                              color: "#28C244",
                            },
                          ]}
                          yAxis={[
                            {
                              tickLabelStyle: {
                                fill: "white", // Change the x-axis tick label color to blue
                                fontSize: 24,
                              },
                            },
                          ]}
                          slotProps={{
                            legend: {
                              direction: "row",
                              labelStyle: { fill: "white", color: "white" },
                              position: {
                                vertical: "top",
                                horizontal: "middle",
                              },
                              padding: 16,
                            },
                          }}
                          width={1000}
                          height={300}
                        />
                      ) : (
                        <div style={{ color: "white" }}>
                          Not sufficient Submissions
                        </div>
                      )}
                    </>
                  ) : (
                    <div id="chart-load">{loadsvg}</div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
