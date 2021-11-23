import React from 'react'
import {Bar} from 'react-chartjs-2'

<style>maxWidth=50%,
</style>
const Chartaa = () => {


  // const dataState = {
  //   labels: ['Inat','ads','adas'],
  //   datasets: [
  //     {
  //     label: 'My First Dataset',
  //     data: [65, 59, 80, 81, 56, 55, 40],
  //     fill: false,
  //     borderColor: 'rgb(75, 192, 192)',
  //     tension: 0.1
  //   }
  // ]
  // };

  // const labels = Utils.months({count: 7});
const dataState = {
  labels: ['January' , 'Febuary', 'March','April','May','June','July','Augest','September','October','November','December'],
  datasets: [{
    label: 'COVID 19 Cases',
    data: [65, 59, 80, 81, 56, 55, 40,90,89,55,12,54,66,100],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)',
      'rgba(255, 99, 132, 0.2)',
      'rgba(155, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(155, 159, 64, 0.2)',
      'rgba(355, 205, 86, 0.2)'
    ],
  },
  { 
  label: 'COVID 19 Death ',
    data: [35, 39, 30, 31, 6, 51, 24,30,69,75,82,94,36,20],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)',
      'rgba(255, 99, 132, 0.2)',
      'rgba(155, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(155, 159, 64, 0.2)',
      'rgba(355, 205, 86, 0.2)'
    ],
  },
  { 
    label: 'COVID 19 Recoverd ',
      data: [35, 69, 38, 39, 68, 75, 40,20,49,15,19,44,36,97],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(155, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(155, 159, 64, 0.2)',
        'rgba(355, 205, 86, 0.2)'
      ],
    borderWidth: 1
  }]
};

  return (
    <div>
      <Bar data={dataState}  width='500px' />
    </div>
  )
}

export default Chartaa
