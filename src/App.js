import React from "react";

import GridMember from "./components/GridMember";
import { useNetlify } from "./api/hooks";

const App = () => {
  const user = useNetlify();

  if (user && document.getElementById("homepage"))
    document.getElementById("homepage").remove();
  else return <div />;

  return (
    <div>
      <GridMember user={user} />
    </div>
  );
};

export default App;
