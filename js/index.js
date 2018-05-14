
Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'HK Population by Sex (2006-2016)'
  },
  subtitle: {
    text: 'Source:Census and Statistics Department'
  },
  xAxis: {
    categories: [
      '2006',
      '2011',
      '2016',
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Population (Number of Persons)'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:f}</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    }
  },
  series: [{
    name: 'Male',
    data: [3272956, 3303015,3375362]

  }, {
    name: 'Female',
    data: [3591390, 3768561,3961223]

  }]
});