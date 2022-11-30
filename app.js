let data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

let j = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
let d = new Date();
const containerCharts = document.getElementById("container-charts");
for (let element in data) {
  const charts = document.createElement("div");
  charts.className = "wrapper";
  const graph = document.createElement("div");
  const hover = document.createElement("div");
  hover.className = "hover";
  charts.appendChild(hover);
  const amount = document.createElement("p");
  amount.className = "amount";
  hover.appendChild(amount);
  graph.className = "graph";
  graph.style.height = data[element].amount * 2 + "px";
  graph.id = "idGraph" + element;
  hover.id = "hover" + element;
  graph.addEventListener("mouseenter", () => {
    hover.style.opacity = "1";
    amount.innerText = "$" + data[element].amount;
  });
  graph.addEventListener("mouseout", () => {
    hover.style.opacity = "0";
  });
  charts.appendChild(graph);
  containerCharts.appendChild(charts);
  const day = document.createElement("p");
  day.innerText = data[element].day;
  charts.appendChild(day);
}
const dateDay = document.getElementById("idGraph" + d.getDay());
dateDay.style.backgroundColor = "var(--Cyan)";
