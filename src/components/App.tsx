import { useState, VFC } from "react";
import WrappedPeksuElementLit from "./WrappedPeksuElementLit";

const App: VFC = () => {
  const [complexer, setComplexer] = useState(undefined);

  return (
    <div>
      <h2>React integration</h2>

      <peksu-element-lit
        name="React-peksu"
        pexus={["Piksu", "Pöksy"]}
        complexer={complexer}
      ></peksu-element-lit>

      <WrappedPeksuElementLit
        name="Gugga Gogga"
        complexer={complexer}
        onPeksuClick={(e) => {
          console.log(
            "%cPEKSU CLICK REACT",
            "color: brown; font-size: 20px",
            e
          );
        }}
      />

      <button
        onClick={() => {
          setComplexer({
            firstName: "Pekkis",
            lastName: "Pitkäkaula"
          });
        }}
      >
        CHANGE COMPLEX STUFF
      </button>
    </div>
  );
};

export default App;
