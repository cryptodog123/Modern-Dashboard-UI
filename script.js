// Pre packed so I don't need parcel or webpack
// the /auto loads all avaiable chart components
import { Chart } from "https://esm.sh/chart.js@4.0.1/auto";
// import { Chart } from "chart.js/auto";
const sidebar = document.querySelector(".sidebar");

const setHeights = function (parentEl, listItemArr) {
  // list item height: 20px
  const finalLength = `${listItemArr.length * 40 + 65}px`;

  parentEl.style.height = finalLength;
};
// Dashboard
const dashboard = document.querySelector(".menu-tab-dashboard");
const dashboardList = document.querySelectorAll(".dashboard-list li");
//Report
const report = document.querySelector(".menu-tab-reports");
const reportList = document.querySelectorAll(".report-list li");
// Schedule
const schedule = document.querySelector(".menu-tab-schedule");
const scheduleList = document.querySelectorAll(".schedule-list li");

const maintenance = document.querySelector(".menu-tab-maintenance");
const maintenanceList = document.querySelectorAll(".maintenance-list li");

setHeights(dashboard, dashboardList);
setHeights(report, reportList);
setHeights(schedule, scheduleList);
setHeights(maintenance, maintenanceList);

sidebar.addEventListener("click", function (e) {
  const target = e.target.closest(".menu-tab-header");
  const divTarget = target.closest(".menu-tab");

  if (!target) return; // Guard clauses
  console.log("change");
  divTarget.classList.toggle("closed");
  // Managing chevron
  const chevronTarget = e.target.closest(".menu-tab-header").querySelector("i");
  if (divTarget.classList.contains("closed")) {
    chevronTarget.style.rotate = "-90deg";
  } else {
    chevronTarget.style.rotate = "0deg";
  }
});

// Chart

const ctx = document.getElementById("myChart").getContext("2d");

const labels = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
];

let gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, "rgba(24, 108, 205, 0.8)");
gradient.addColorStop(0.4, "rgba(24, 108, 200, 0.5)");
gradient.addColorStop(1, "rgba(0,0,0, 0.05)");

const data = {
  labels,
  datasets: [
    {
      data: [210, 375, 854, 485, 569, 890, 722, 1153, 980, 560, 784, 302, 420],
      label: "No. of customers",
      fill: true,
      pointRadius: 0,
      backgroundColor: gradient,
      hitRadius: 30,
    },
  ],
};
// let delayed;
const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    tension: 0.2,
    animations: {
      //   tension: {
      //     duration: 2000,
      //     easing: "linear",
      //     from: 1,
      //     to: 0,
      //     loop: true,
      //   },
      //   onComplete: () => {
      //     delayed = true;
      //   },
      //   delay: (context) => {
      //     let delay = 0;
      //     if (context.type === "data" && context.mode === "default" && !delayed) {
      //       delay = context.dataIndex * 300 + context.datasetIndex * 100;
      //     }
      //     return delay;
      //   },
    },
    scales: {
      y: {
        // ticks: {
        //   callback: function (value) {
        //     return "$" + value + "m";
        //   },
        // },
      },
    },
  },
};
new Chart(ctx, config);

// Stacked bar chart

const ctx2 = document.getElementById("myChart2").getContext("2d");
const DATA_COUNT = 12;
const NUMBER_CFG = { count: DATA_COUNT, max: 100 };
const labels2 = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

const borderRadius = 100;
const borderRadiusAllCorners = {
  topLeft: borderRadius,
  topRight: borderRadius,
  bottomLeft: borderRadius,
  bottomRight: borderRadius,
};

const data2 = {
  labels: labels2,
  datasets: [
    {
      label: "Serviced",
      data: [4, 3, 7, 3, 6, 8, 3, 2, 6, 7],
      backgroundColor: "rgb(249, 52, 52, 0.9)",
      borderRadius: borderRadiusAllCorners,
      barPercentage: "10%",
    },
    {
      label: "LWOS",
      data: [5, 2, 7, 2, 6, 8, 2, 4, 5, 8],
      backgroundColor: "rgb(45, 138, 232, 0.8)",
      borderRadius: borderRadiusAllCorners,
      borderSkipped: 1,
    },
  ],
};

const config2 = {
  type: "bar",
  data: data2,
  options: {
    plugins: {
      title: {
        display: true,
        text: "LWOS (LEAVE WITHOUT SERVICE)",
        color: "rgba(210,210,210)",
        padding: 15,
      },
      legend: {
        display: true,
        position: "bottom",
        maxHeight: 30,
        labels: {
          boxWidth: 12,
          padding: 20,
        },
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          display: true,
          color: "rgba(200,200,200, 0.3)",
          lineWidth: 0.2,
        },
        border: {
          display: false,
        },
      },
    },
    barThickness: 5,
  },
};

new Chart(ctx2, config2);

const ctxDough = document.getElementById("doughnut");

const dataDough = {
  labels: ["Javascript", "C++", "C#", "Python", "SQL", "Rust", "Solidity"],
  datasets: [
    {
      label: "Senior",
      data: [65, 59, 70, 80, 78, 56, 43],
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Junior",
      data: [88, 89, 84, 5, 56, 92, 60],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
};
const configDough = {
  type: "radar",
  data: dataDough,
  options: {
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          boxWidth: 12,
          padding: 30,
        },
      },
    },

    tension: 0.1,
    elements: {
      line: {
        borderWidth: 3,
      },
    },
    scales: {
      r: {
        ticks: {
          display: false,
        },
        grid: {
          lineWidth: 3,
        },
      },
    },
  },
};

new Chart(ctxDough, configDough);
