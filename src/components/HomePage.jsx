import React from "react";

import { Container } from "react-bootstrap";
import HomePageHeader from "./HomePageHeader";
import MasterDashboardView from "./MasterDashboardView";
import BusinessSummary from "./BusinessSummary";

const HomePage = () => {
  return (
    <div>
      <Container fluid>
        <HomePageHeader />
        <MasterDashboardView />
        <BusinessSummary />
      </Container>
    </div>
  );
};

export default HomePage;
