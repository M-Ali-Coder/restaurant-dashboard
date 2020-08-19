import React from "react";
import { Row, Col } from "react-bootstrap";
import ChartItem from "./ChartItem";

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// First chart config
const firstChartConfig = {
  type: "doughnut3d",
  width: "100%",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Latest Orders",
      subCaption: "Last Month",
      numberPrefix: "$",
      defaultCenterLabel: "Total revenue: $64.08K",
      centerLabel: "Revenue from $label: $value",
      decimals: "0",
      theme: "fusion",
    },
    data: [
      {
        label: "Food",
        value: "28504",
      },
      {
        label: "Apparels",
        value: "14633",
      },
      {
        label: "Electronics",
        value: "10507",
      },
      {
        label: "Household",
        value: "4910",
      },
    ],
  },
};

// Second Chart config
const secondChartConfig = {
  type: "mscombi3d",
  width: "100%",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Revenue, Profits & Number of employees",
      drawcrossline: "1",
      yaxisname: "Revenue / Profit (in $)",
      syaxisname: "Number of employees",
      showvalues: "0",
      showanchors: "0",
      numberprefix: "$",
      plothighlighteffect: "fadeout",
      theme: "fusion",
    },
    categories: [
      {
        category: [
          {
            label: "Mar-2012",
          },
          {
            label: "Jun-2012",
          },
          {
            label: "Sept-2012",
          },
          {
            label: "Dec-2012",
          },
          {
            label: "Mar-2013",
          },
        ],
      },
    ],
    dataset: [
      {
        seriesname: "Revenue",
        plottooltext: "Revenue in $label : <b>$dataValue</b>",
        data: [
          {
            value: "36000",
          },
          {
            value: "26000",
          },
          {
            value: "28000",
          },
          {
            value: "47000",
          },
          {
            value: "38000",
          },
        ],
      },
    ],
  },
};

// Third chart config
const thirdChartConfig = {
  type: "msspline",
  width: "100%",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Number of visitors last week",
      subCaption: "Bakersfield Central vs Los Angeles Topanga",
      xAxisName: "Day",
      yAxisName: "No. of Visitor",
      theme: "fusion",
    },
    categories: [
      {
        category: [
          {
            label: "Mon",
          },
          {
            label: "Tue",
          },
          {
            label: "Wed",
          },
          {
            vline: "true",
            lineposition: "0",
            color: "#6baa01",
            labelHAlign: "right",
            labelPosition: "0",
            label: "National holiday",
          },
          {
            label: "Thu",
          },
          {
            label: "Fri",
          },
          {
            label: "Sat",
          },
          {
            label: "Sun",
          },
        ],
      },
    ],
    dataset: [
      {
        seriesname: "Bakersfield Central",
        data: [
          {
            value: "15123",
          },
          {
            value: "14233",
          },
          {
            value: "25507",
          },
          {
            value: "9110",
          },
          {
            value: "15529",
          },
          {
            value: "20803",
          },
          {
            value: "19202",
          },
        ],
      },
      {
        seriesname: "Los Angeles Topanga",
        data: [
          {
            value: "13400",
          },
          {
            value: "12800",
          },
          {
            value: "22800",
          },
          {
            value: "12400",
          },
          {
            value: "15800",
          },
          {
            value: "19800",
          },
          {
            value: "21800",
          },
        ],
      },
    ],
  },
};

// Fourth charts config
const fourthChartConfig = {
  type: "stackedcolumn3d",
  width: "100%",
  dataFormat: "json",
  dataSource: {
    chart: {
      caption: "Product-wise quarterly revenue in current year",
      subCaption: "Harry's SuperMart",
      xAxisname: "Quarter",
      yAxisName: "Revenue (In USD)",
      numberPrefix: "$",
      theme: "fusion",
    },
    categories: [
      {
        category: [
          {
            label: "Q1",
          },
          {
            label: "Q2",
          },
          {
            label: "Q3",
          },
          {
            label: "Q4",
          },
        ],
      },
    ],
    dataset: [
      {
        seriesname: "Food Products",
        data: [
          {
            value: "121000",
          },
          {
            value: "135000",
          },
          {
            value: "123500",
          },
          {
            value: "145000",
          },
        ],
      },
      {
        seriesname: "Non-Food Products",
        data: [
          {
            value: "131400",
          },
          {
            value: "154800",
          },
          {
            value: "98300",
          },
          {
            value: "131800",
          },
        ],
      },
    ],
  },
};

const BusinessSummary = () => {
  // Chart item 1 configs

  return (
    <div className="mt-4 mb-4">
      <h6 className="mb-3">Business Summary</h6>
      <div>
        <Row>
          <Col md={6} sm={1} lg={6}>
            <ChartItem config={firstChartConfig} />
          </Col>
          <Col md={6} sm={1} lg={6}>
            <ChartItem config={secondChartConfig} />
          </Col>
        </Row>
      </div>
      <div className="mt-4">
        <Row>
          <Col md={6} sm={1} lg={6}>
            <ChartItem config={fourthChartConfig} />
          </Col>
          <Col md={6} sm={1} lg={6}>
            <ChartItem config={thirdChartConfig} />
          </Col>
        </Row>
      </div>
      <hr />
    </div>
  );
};

export default BusinessSummary;
