import { Col, Grid, Row } from "rsuite";
import Header from "./Header";
import ProductList from "./ProductList";
import styles from "../styles/Content.module.css";

const Content = () => {
  return (
    <div>
      <Grid fluid>
        <div className={styles.Wrapper}>
          <Row className="show-grid">
            <Col xsHidden smHidden mdHidden lg={3}></Col>
            <Col xs={24} sm={24} md={24} lg={18}>
              <div className={styles.MainGrid}>
                <Header />
                <hr />
                <ProductList />
              </div>
            </Col>
            <Col xsHidden smHidden mdHidden lg={3}></Col>
          </Row>
        </div>
      </Grid>
    </div>
  );
};

export default Content;
