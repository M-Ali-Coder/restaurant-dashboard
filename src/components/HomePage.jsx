import React from "react";

import SideMenu from "./SideMenu";
import { Col, Row, Card, Container } from "react-bootstrap";

import Order1 from "../assets/images/latest-orders1.jpg";

// Fusion Charts
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { Link } from "react-router-dom";
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const categories = [
  {
    category: [
      {
        label: "Jan",
      },
      {
        label: "Feb",
      },
      {
        label: "Mar",
      },
      {
        label: "Apr",
      },
      {
        label: "May",
      },
      {
        label: "Jun",
      },
      {
        label: "Jul",
      },
      {
        label: "Aug",
      },
      {
        label: "Sep",
      },
      {
        label: "Oct",
      },
      {
        label: "Nov",
      },
      {
        label: "Dec",
      },
    ],
  },
];
// STEP 3- Construct the datase, t comprising combination series
const dataset = [
  {
    seriesName: "Actual Revenue",
    showValues: "1",
    data: [
      {
        value: "16000",
      },
      {
        value: "20000",
      },
      {
        value: "18000",
      },
      {
        value: "19000",
      },
      {
        value: "15000",
      },
      {
        value: "21000",
      },
      {
        value: "16000",
      },
      {
        value: "20000",
      },
      {
        value: "17000",
      },
      {
        value: "25000",
      },
      {
        value: "19000",
      },
      {
        value: "23000",
      },
    ],
  },
];

// Charts config
const chartConfigs = {
  type: "mscombi2d", // The chart type
  width: "100%", // Width of the chart
  // height: "100%", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    chart: {
      caption: "Earnings",
      subCaption: "Sales analysis of last year",
      xAxisname: "Month",
      // yAxisName: "Amount (In USD)",
      // numberPrefix: "EGP ",
      showBorder: "1",
      showLabels: "1",
      labelFontSize: "10",
      rotateValues: "0",
      divlineColor: "green",
      divLineIsDashed: "1",
      divLineDashLen: "1",
      divLineGapLen: "1",
      toolTipColor: "#ffffff",
      toolTipBorderThickness: "0",
      toolTipBgColor: "#000000",
      toolTipBgAlpha: "80",
      toolTipBorderRadius: "2",
      toolTipPadding: "5",
      theme: "fusion",
    },
    categories: categories,
    dataset: dataset,
  },
};

const restuantRatingChartConfigs = {
  type: "doughnut3d", // The chart type
  width: "100%", // Width of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Map Configuration
    chart: {
      caption: "Split of Revenue by Product Categories",
      subCaption: "Last year",
      numberPrefix: "$",
      defaultCenterLabel: "Total revenue: $64.08K",
      centerLabel: "Revenue from $label: $value",
      decimals: "0",
      theme: "fusion",
      showBorder: "1",
      showLabels: "0",
      valuePosition: "inside",
    },
    // Source data as JSON --> id represents countries of the world.
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

const vistorHoursConfigs = {
  type: "msspline", // The chart type
  width: "100%", // Width of the chart
  dataFormat: "json", // Data type
  dataSource: {
    chart: {
      caption: "Revenues and Profits",
      subCaption: "For last year",
      xAxisname: "Month",
      pYAxisName: "Amount (In USD)",
      sYAxisName: "Profit %",
      numberPrefix: "$",
      sNumberSuffix: "%",
      sYAxisMaxValue: "50",
      theme: "fusion",
    },
    categories: [
      {
        category: [
          {
            label: "Jan",
          },
          {
            label: "Feb",
          },
          {
            label: "Mar",
          },
          {
            label: "Apr",
          },
          {
            label: "May",
          },
          {
            label: "Jun",
          },
          {
            label: "Jul",
          },
          {
            label: "Aug",
          },
          {
            label: "Sep",
          },
          {
            label: "Oct",
          },
          {
            label: "Nov",
          },
          {
            label: "Dec",
          },
        ],
      },
    ],
    dataset: [
      {
        seriesName: "Profit %",
        parentYAxis: "S",
        renderAs: "line",
        showValues: "0",
        data: [
          {
            value: "25",
          },
          {
            value: "25",
          },
          {
            value: "16.66",
          },
          {
            value: "21.05",
          },
          {
            value: "6.66",
          },
          {
            value: "33.33",
          },
          {
            value: "6.25",
          },
          {
            value: "25",
          },
          {
            value: "5.88",
          },
          {
            value: "36.36",
          },
          {
            value: "10.52",
          },
          {
            value: "30.43",
          },
        ],
      },
    ],
  },
};

const branchesDataset = [
  {
    id: "NA",
    value: ".82",
    showLabel: "1",
  },
  {
    id: "SA",
    value: "2.04",
    showLabel: "1",
  },
  {
    id: "AS",
    value: "1.78",
    showLabel: "1",
  },
  {
    id: "EU",
    value: ".40",
    showLabel: "1",
  },
  {
    id: "AF",
    value: "2.58",
    showLabel: "1",
  },
  {
    id: "AU",
    value: "1.30",
    showLabel: "1",
  },
];

const branchesColorrange = {
  minvalue: "0",
  code: "#FFE0B2",
  gradient: "1",
  color: [
    {
      minvalue: "0.5",
      maxvalue: "1.0",
      color: "#FFD74D",
    },
    {
      minvalue: "1.0",
      maxvalue: "2.0",
      color: "#FB8C00",
    },
    {
      minvalue: "2.0",
      maxvalue: "3.0",
      color: "#E65100",
    },
  ],
};

const branchesConfigs = {
  type: "world", // The chart type
  width: "700", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Map Configuration
    chart: {
      caption: "Split of Revenue by Product Categories",
      subCaption: "Last year",
      numberPrefix: "$",
      defaultCenterLabel: "Total revenue: $64.08K",
      centerLabel: "Revenue from $label: $value",
      decimals: "0",
      theme: "fusion",
      showBorder: "1",
    },
    // Aesthetics; ranges synced with the slider
    colorrange: branchesColorrange,
    // Source data as JSON --> id represents countries of the world.
    data: branchesDataset,
  },
};

const HomePage = () => {
  return (
    <div>
      <Row>
        <Col md={3}>
          <SideMenu />
        </Col>
        <Col>
          <Container fluid>
            {/* Start earning statistics */}
            <div className="earning-statistics-wrapper">
              <Row>
                <Col>
                  <Row>
                    <Col md={6}>
                      <div className="cart-item">
                        <div className="cart-title">
                          <span>Order</span>
                          <span>
                            <b>$100.00</b>
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="cart-item">
                        <div className="cart-title">
                          <span>Order</span>
                          <span>
                            <b>$100.00</b>
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="cart-item">
                        <div className="cart-title">
                          <span>Order</span>
                          <span>
                            <b>$100.00</b>
                          </span>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="cart-item">
                        <div className="cart-title">
                          <span>Order</span>
                          <span>
                            <b>$100.00</b>
                          </span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <ReactFC {...chartConfigs} />
                </Col>
              </Row>
            </div>
            {/* End earning statistics */}

            {/* Start latest orders */}
            <div className="latest-orders-wrapper">
              <Row>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={Order1} />
                  <Card.Body>
                    <div className="menu-cart-title">
                      <span>
                        <b>Frensh Crostin</b>
                      </span>
                      <span>$50</span>
                    </div>
                    <div className="menu-cart-footer">
                      <span>
                        order: <b>10</b>
                      </span>
                      <span>
                        Revenu: <b>$100.00</b>
                      </span>
                    </div>
                  </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={Order1} />
                  <Card.Body>
                    <div className="menu-cart-title">
                      <span>
                        <b>Frensh Crostin</b>
                      </span>
                      <span>$50</span>
                    </div>
                    <div className="menu-cart-footer">
                      <span>
                        order: <b>10</b>
                      </span>
                      <span>
                        Revenu: <b>$100.00</b>
                      </span>
                    </div>
                  </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={Order1} />
                  <Card.Body>
                    <div className="menu-cart-title">
                      <span>
                        <b>Frensh Crostin</b>
                      </span>
                      <span>$50</span>
                    </div>
                    <div className="menu-cart-footer">
                      <span>
                        order: <b>10</b>
                      </span>
                      <span>
                        Revenu: <b>$100.00</b>
                      </span>
                    </div>
                  </Card.Body>
                </Card>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={Order1} />
                  <Card.Body>
                    <div className="menu-cart-title">
                      <span>
                        <b>Frensh Crostin</b>
                      </span>
                      <span>$50</span>
                    </div>
                    <div className="menu-cart-footer">
                      <span>
                        order: <b>10</b>
                      </span>
                      <span>
                        Revenu: <b>$100.00</b>
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </Row>
            </div>
            {/* End latest orders */}

            {/* Restaurant rating */}
            <div className="restaurant-rating-wrapper">
              <Row>
                <Col>
                  <ReactFC {...restuantRatingChartConfigs} />
                </Col>
                <Col>
                  <ReactFC {...vistorHoursConfigs} />
                </Col>
              </Row>
            </div>
            {/* Restaurant rating */}

            {/* Restaurant spread our  */}
            <div className="spread-our-wrapper">
              <Row>
                <Col>
                  <div className="timeline-wrapper">
                    <div className="column-title">TIMELINE</div>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="#">
                          <span className="order-time">10 minutes ago</span>
                          <h6>New Order Recived</h6>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="order-time">8 minutes ago</span>
                          <h6>New Order Delivered</h6>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="order-time">30 minutes ago</span>
                          <h6>3 New Tickets</h6>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="order-time">8 minutes ago</span>
                          <h6>12 New Reviews</h6>
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <span className="order-time">15 minutes ago</span>
                          <h6>50 New Facebook Likes</h6>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div className="our-branches-wrapper">
                    <ReactFC {...branchesConfigs} />
                  </div>
                </Col>
              </Row>
            </div>
            {/* Restaurant spread our  */}
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
