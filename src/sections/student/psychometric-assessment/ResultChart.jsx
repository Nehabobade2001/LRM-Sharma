import React from 'react';
import { GaugeContainer, GaugeValueArc, GaugeReferenceArc, useGaugeState } from '@mui/x-charts/Gauge';

const ResultChart = () => {
  return (
    <GaugeContainer width={250} height={250} startAngle={-90} endAngle={90} value={75}>
      <GaugeReferenceArc />
      <GaugeValueArc color="green" />
      <circle cx={125} cy={125} r={50} fill="none" stroke="lightgray" strokeWidth={5} />
      <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="black" fontSize="24">
        75%
      </text>
    </GaugeContainer>
  );
};

export default ResultChart;
