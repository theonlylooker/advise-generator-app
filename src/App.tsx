import React, { useEffect, useState } from "react";
import AdviceContainer from "./Components/AdviceContainer";
import axios from "axios";
import { Slip, GetSlip } from "./types/type";

function App() {
  const url = "https://api.adviceslip.com/advice";
  const [slip, setSlip] = useState<Slip>();

  const getSlip = async () => {
    try {
      let { data, status } = await axios.get<GetSlip>(url);
      setSlip({ id: data.slip.id, advice: data.slip.advice });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected Error";
      }
    }
  };

  useEffect(() => {
    getSlip();
  }, []);

  return (
    <div className="App">
      {slip && <AdviceContainer getSlip={getSlip} slip={slip} />}
    </div>
  );
}

export default App;
