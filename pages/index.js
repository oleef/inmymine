import React, { useState, useEffect, Fragment } from "react";
import { isEmpty } from "lodash";

import Api from "../libs/api";

import Layout from "../components/layout/layout";
import Card from "../components/card/card";
// import BMI from "../components/calculate/bmi/bmi";
import Sidebar from "../components/sidebar";

const apiGroup = "todo";
const pageTitle = "Calculators";

const Index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("getData");
    getData();
  }, []);

  const getData = async () => {
    const response = await Api(apiGroup, "get", { userId: 1 });
    setData(response);
  };

  return (
    <Fragment>
      <Layout pageTitle={pageTitle}>
        {/* <div className="row"> */}
        {/* <div className="col-3">
            <div className="row">
              <Sidebar />
            </div>
          </div> */}
        {/* <div className="col-12"> */}
        <div className="row">
          {/* <BMI></BMI> */}

          {!isEmpty(data) ? (
            data.map((item, index) => {
              return (
                <Card className="col-3" title={item.id} key={index}>
                  <img src="../static/img/avatar2.png" alt="" />
                  <p>123</p>
                </Card>
              );
            })
          ) : (
            <Card className="col-12 text-center">
              <i className="fas fa-spinner"></i>
            </Card>
          )}
        </div>
        {/* </div> */}
        {/* </div> */}
      </Layout>
    </Fragment>
  );
};

export default Index;
