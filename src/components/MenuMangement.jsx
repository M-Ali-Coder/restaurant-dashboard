import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import MenuOrderItem from "./MenuOrderItem";

class MenuMangement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "special-order",
    };
  }
  render() {
    const { activeTab } = this.state;
    return (
      <div className="menu-management-tab-wrapper container mt-5">
        <Row>
          <Col md={3} style={{ paddingLeft: 0, paddingRight: 0, cursor: "pointer" }}>
            {/* <h6 className="text-uppercase mb-3">Our Menu Categories</h6> */}
            <ListGroup className="text-muted">
              <ListGroup.Item onClick={() => this.setState({ activeTab: "special-order" })}>
                <span>العرض الخاص</span>
              </ListGroup.Item>
              <ListGroup.Item onClick={() => this.setState({ activeTab: "30-meals" })}>
                <span>وجبات ال 30 جنيه</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span>السلطات</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span>سندوتشات اللحوم</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span>سندوتشات الماكولات البحرية</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span>سندوتشات الدجاج</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span>الوجبات</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span>الاصناف الجانبية</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span>الحلويات</span>
              </ListGroup.Item>
              <ListGroup.Item>
                <span>المشروبات</span>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={9} style={{ paddingLeft: 0, paddingRight: 0 }}>
            <div className="active-tab-wrapper">
              {activeTab === "special-order" && (
                <>
                  <MenuOrderItem />
                  <hr />
                  <MenuOrderItem />
                  <hr />
                  <MenuOrderItem />
                </>
              )}
              {activeTab === "30-meals" && <MenuOrderItem />}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default MenuMangement;
