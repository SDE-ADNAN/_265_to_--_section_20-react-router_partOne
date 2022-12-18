import React, { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <Fragment>
      <div>QuoteDetail</div>
      <div>{params.quoteId}</div>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
