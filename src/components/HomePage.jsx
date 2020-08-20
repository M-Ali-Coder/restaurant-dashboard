import React from "react";

import { Container } from "react-bootstrap";
import HomePageHeader from "./HomePageHeader";
import MasterDashboardView from "./MasterDashboardView";
import BusinessSummary from "./BusinessSummary";

const HomePage = () => {
  return (
    <Container>
      <HomePageHeader />
      <MasterDashboardView />
      <BusinessSummary />
    </Container>
  );
};

export default HomePage;
