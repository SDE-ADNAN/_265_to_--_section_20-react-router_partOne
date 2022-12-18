import React, { Fragment } from "react";
import { useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <Fragment>
      <div>QuoteDetail</div>
      <div>{params.quoteId}</div>
    </Fragment>
  );
};

export default QuoteDetail;
