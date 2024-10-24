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
  const leetbuddypfp=(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={180}
      height={72}
      viewBox="0 0 482 94"
      fill="none"
    >
      <path
        d="M11.375 72.0469C7.90625 72.0469 5.21875 71.125 3.3125 69.2812C1.4375 67.4375 0.5 64.6562 0.5 60.9375V15.0938C2.15625 13.6875 4.17188 12.6094 6.54688 11.8594C8.95312 11.0781 11.4375 10.6875 14 10.6875C17.7812 10.6875 20.9844 11.625 23.6094 13.5C26.4531 15.625 27.875 18.5625 27.875 22.3125V47.9531C26.125 48.1094 24.4062 48.6094 22.7188 49.4531C21.0312 50.2656 20.1875 51.1094 20.1875 51.9844C20.1875 52.5156 20.4844 52.9688 21.0781 53.3438C24.1719 50.75 28.7656 49.4531 34.8594 49.4531H45.9688C48.0312 53.0781 49.0625 56.7812 49.0625 60.5625C49.0625 62.4375 48.7344 64.5156 48.0781 66.7969C47.4219 69.0781 46.5469 70.8281 45.4531 72.0469H11.375ZM77.4219 73.4531C68.7656 73.4531 61.9375 71.0469 56.9375 66.2344C51.8125 61.3906 49.25 54.7656 49.25 46.3594C49.25 37.9219 51.8906 31.2344 57.1719 26.2969C62.0469 21.7031 68.2188 19.4062 75.6875 19.4062C83.1562 19.4062 89.1406 21.4688 93.6406 25.5938C98.1719 29.6875 100.438 34.7344 100.438 40.7344C100.438 46.0781 98.5781 50.1094 94.8594 52.8281C91.4219 55.3906 86.7344 56.6719 80.7969 56.6719C76.3594 56.6719 72.6094 55.75 69.5469 53.9062C69.2969 54.0938 69.1719 54.4375 69.1719 54.9375C69.1719 55.875 70.4062 56.7344 72.875 57.5156C75.3438 58.3594 78.1406 58.7812 81.2656 58.7812C84.4219 58.7812 87.2812 58.3906 89.8438 57.6094C92.4375 56.7969 94.5156 55.8438 96.0781 54.75C96.8281 55.4062 97.4219 56.625 97.8594 58.4062C98.3281 60.1562 98.5625 61.7656 98.5625 63.2344C98.5625 64.6719 98.4219 65.9531 98.1406 67.0781C95.7031 69.1406 93.2031 70.6094 90.6406 71.4844C87.0156 72.7969 82.6094 73.4531 77.4219 73.4531ZM76.8125 41.7188C78.375 41.7188 79.1562 41.125 79.1562 39.9375C79.1562 38.8125 78.3281 38.25 76.6719 38.25C75.0156 38.25 74.0625 39.1406 73.8125 40.9219C74.6875 41.4531 75.6875 41.7188 76.8125 41.7188ZM130.484 73.4531C121.828 73.4531 115 71.0469 110 66.2344C104.875 61.3906 102.312 54.7656 102.312 46.3594C102.312 37.9219 104.953 31.2344 110.234 26.2969C115.109 21.7031 121.281 19.4062 128.75 19.4062C136.219 19.4062 142.203 21.4688 146.703 25.5938C151.234 29.6875 153.5 34.7344 153.5 40.7344C153.5 46.0781 151.641 50.1094 147.922 52.8281C144.484 55.3906 139.797 56.6719 133.859 56.6719C129.422 56.6719 125.672 55.75 122.609 53.9062C122.359 54.0938 122.234 54.4375 122.234 54.9375C122.234 55.875 123.469 56.7344 125.938 57.5156C128.406 58.3594 131.203 58.7812 134.328 58.7812C137.484 58.7812 140.344 58.3906 142.906 57.6094C145.5 56.7969 147.578 55.8438 149.141 54.75C149.891 55.4062 150.484 56.625 150.922 58.4062C151.391 60.1562 151.625 61.7656 151.625 63.2344C151.625 64.6719 151.484 65.9531 151.203 67.0781C148.766 69.1406 146.266 70.6094 143.703 71.4844C140.078 72.7969 135.672 73.4531 130.484 73.4531ZM129.875 41.7188C131.438 41.7188 132.219 41.125 132.219 39.9375C132.219 38.8125 131.391 38.25 129.734 38.25C128.078 38.25 127.125 39.1406 126.875 40.9219C127.75 41.4531 128.75 41.7188 129.875 41.7188ZM160.438 42.375H163.344C164.906 42.375 165.688 41.8594 165.688 40.8281C165.688 40.7031 165.656 40.5156 165.594 40.2656H155.094C154.406 38.0781 154.062 35.6406 154.062 32.9531C154.062 30.2344 154.266 28.0312 154.672 26.3438C156.453 25.2188 158.906 23.5 162.031 21.1875C162.906 19.0625 164.047 15.6875 165.453 11.0625C165.641 10.4375 165.859 9.82812 166.109 9.23438C168.547 8.60938 171.328 8.29688 174.453 8.29688C177.578 8.29688 180.656 8.625 183.688 9.28125V20.7656H191.797C193.609 23.5156 194.516 26.75 194.516 30.4688C194.516 32.1562 194.281 33.8906 193.812 35.6719C193.344 37.4531 192.672 38.9688 191.797 40.2188H185.094V47.2969C185.094 51.2969 186.766 53.2969 190.109 53.2969H192.125C192.781 55.6719 193.109 57.7344 193.109 59.4844C193.109 63.7969 191.75 67.1094 189.031 69.4219C186.344 71.7031 182.422 72.8438 177.266 72.8438C172.141 72.8438 168.047 71.4219 164.984 68.5781C161.953 65.7031 160.438 61.4844 160.438 55.9219V42.375Z"
        fill="#FFA116"
      />
      <path
        d="M232.301 72V6.72H251.501C257.773 6.72 262.381 8.256 265.325 11.328C268.333 14.336 269.837 18.4 269.837 23.52V25.632C269.837 28.448 269.197 30.944 267.917 33.12C266.637 35.296 264.781 37.024 262.349 38.304C265.741 39.392 268.301 41.184 270.029 43.68C271.821 46.112 272.717 49.056 272.717 52.512V54.624C272.717 59.872 271.181 64.096 268.109 67.296C265.101 70.432 260.365 72 253.901 72H232.301ZM251.501 14.4H240.653V35.04H251.501C254.701 35.04 257.101 34.24 258.701 32.64C260.365 30.976 261.197 28.704 261.197 25.824V23.52C261.197 20.704 260.365 18.496 258.701 16.896C257.101 15.232 254.701 14.4 251.501 14.4ZM253.901 42.72H240.653V64.416H253.901C257.293 64.416 259.821 63.552 261.485 61.824C263.213 60.096 264.077 57.696 264.077 54.624V52.32C264.077 49.376 263.213 47.04 261.485 45.312C259.821 43.584 257.293 42.72 253.901 42.72ZM316.009 72V65.28C312.681 68.16 309.705 70.176 307.081 71.328C304.457 72.416 301.833 72.96 299.209 72.96C294.985 72.96 291.753 71.584 289.513 68.832C287.273 66.016 286.153 62.08 286.153 57.024V24.48H294.025V55.872C294.025 59.2 294.601 61.664 295.753 63.264C296.969 64.8 298.761 65.568 301.129 65.568C302.921 65.568 304.937 65.12 307.177 64.224C309.417 63.328 312.201 61.536 315.529 58.848V24.48H323.401V72H316.009ZM369.25 72V65.376C366.306 68.192 363.618 70.176 361.186 71.328C358.818 72.416 356.354 72.96 353.794 72.96C348.738 72.96 344.834 71.04 342.082 67.2C339.394 63.36 338.05 57.984 338.05 51.072V45.504C338.05 38.784 339.714 33.44 343.042 29.472C346.434 25.504 351.33 23.52 357.73 23.52C359.586 23.52 361.442 23.712 363.298 24.096C365.154 24.48 367.01 25.024 368.866 25.728V0.959999H376.738V72H369.25ZM346.21 51.072C346.21 56.064 346.978 59.744 348.514 62.112C350.114 64.416 352.482 65.568 355.618 65.568C357.474 65.568 359.394 65.12 361.378 64.224C363.362 63.264 365.858 61.312 368.866 58.368V33.024C367.01 32.192 365.218 31.616 363.49 31.296C361.762 30.912 360.066 30.72 358.402 30.72C354.05 30.72 350.914 32.032 348.994 34.656C347.138 37.28 346.21 40.896 346.21 45.504V51.072ZM422.594 72V65.376C419.65 68.192 416.962 70.176 414.53 71.328C412.162 72.416 409.698 72.96 407.138 72.96C402.082 72.96 398.178 71.04 395.426 67.2C392.738 63.36 391.394 57.984 391.394 51.072V45.504C391.394 38.784 393.058 33.44 396.386 29.472C399.778 25.504 404.674 23.52 411.074 23.52C412.93 23.52 414.786 23.712 416.642 24.096C418.498 24.48 420.354 25.024 422.21 25.728V0.959999H430.082V72H422.594ZM399.554 51.072C399.554 56.064 400.322 59.744 401.858 62.112C403.458 64.416 405.826 65.568 408.962 65.568C410.818 65.568 412.738 65.12 414.722 64.224C416.706 63.264 419.202 61.312 422.21 58.368V33.024C420.354 32.192 418.562 31.616 416.834 31.296C415.106 30.912 413.41 30.72 411.746 30.72C407.394 30.72 404.258 32.032 402.338 34.656C400.482 37.28 399.554 40.896 399.554 45.504V51.072ZM463.266 76.8C461.218 82.56 458.69 86.752 455.682 89.376C452.738 92.064 448.61 93.408 443.298 93.408V85.632C445.474 85.568 447.33 85.28 448.866 84.768C450.466 84.256 451.874 83.2 453.09 81.6C454.37 80.064 455.586 77.76 456.738 74.688L457.698 72.288L440.61 24.48H448.674L456.642 47.616L461.538 62.4L466.242 47.616L474.018 24.48H481.794L463.266 76.8Z"
        fill="white"
      />
    </svg>
    )

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
          {/* <span id="leet-stats">Leet</span>
          <span id="buddy-stats">Buddy</span> */}
          {leetbuddypfp}
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
                          width: `${(stats?.data?.easySolved / 828) * 100}%`,
                          // width: `${(60/ 828) * 100}%`,
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
                          width: `${(stats?.data?.mediumSolved / 1733) * 100}%`,
                          // width: `${(68/ 1733) * 100}%`,
                          backgroundColor: "#FFA116",
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
                          width: `${(stats?.data?.hardSolved / 752) * 150}%`,
                          backgroundColor: "#F63737",
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
