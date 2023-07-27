import { Col, Grid, Row } from "rsuite";
import Header from "./Header";
import ProductList from "./ProductList";

const Content = () => {
  return (
    <div>
      <Grid fluid>
        <div className="wrapper">
          <Row className="show-grid">
            <Col xsHidden smHidden mdHidden lg={3}></Col>
            <Col xs={24} sm={24} md={24} lg={18}>
              <div className="main-grid">
                <Header />
                <hr />
                <ProductList />
              </div>
            </Col>
            <Col xsHidden smHidden mdHidden lg={3}></Col>
          </Row>
        </div>
        <style jsx>{`
          .wrapper {
            margin-top: 50px;
          }
          .main-grid {
            background: white;
            border-radius: 12px;
            padding: 8px;
            margin-bottom: 50px;
          }
        `}</style>
      </Grid>
    </div>
  );
};

export default Content;
