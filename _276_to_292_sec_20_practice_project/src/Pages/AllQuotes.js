import React, { useEffect } from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

// const DUMMY_QUOTES = [
//   { id: "q1", author: "Max", text: "Learning React is fun!!" },
//   { id: "q2", author: "Maximilian", text: "Learning React is great!" },
// ];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="centered focused">
        <p>{error}</p>
      </div>
    );
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return (
      <div className="centered">
        <NoQuotesFound />
      </div>
    );
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
