import { FC, useEffect, useState } from "react";
const axios = require("axios");

interface randomQuotesProps {}

const RandomQuotes: FC<randomQuotesProps> = () => {
  const [quote, setQuote] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote")
      .then(function (response) {
        //console.log('star wars quotes: ',response.data);
        setQuote(response.data.content);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!quote) return <p>No quotes available</p>;

  return (
    <div>
      <h3>Random Quotes here</h3>
      <p>{quote}</p>
    </div>
  );
};

export default RandomQuotes;