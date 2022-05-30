const datas = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
];

const graphContainer = document.querySelector('.card-chart__graph');
const rootCSS = document.querySelector(':root');

let totalAmount = 0; 
let arr = [];


// search max value and total amount
datas.forEach(data => {
    totalAmount += data.amount;  
    arr.push(data.amount)  
});
let max = Math.max(...arr);

const chart = datas.map( (data, val)  => {
    
    return (
        `<div class="graph-container">
            <div class="${data.amount === max ? "graph--max" : ""} graph" style="height: calc(${data.amount}px + 3vh)"></div>
            <span>Rp${data.amount}</span>
            <span>${data.day}</span>
        </div>`
    )
    
});



graphContainer.innerHTML = 
`
<h2>Spending - Last 7 days</h2>

${chart.join('')}

<div class="graph__footer">
<div class="footer__total">
  <p>Total this month</p>
  <p>$478.33</p>
</div>

<div>
  <p class="text--bold text--accent">+2.4%</p>
  <p>from last month</p>
</div>
</div>
</div>
`
