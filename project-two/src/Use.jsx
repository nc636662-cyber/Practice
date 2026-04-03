// import React, { useState } from "react";

// const CounterState = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Count: {count}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// };

// export default CounterState;
import React, { useRef } from "react";

const CounterState = () => {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  };

  return (
    <div>
      <h2>Count: {countRef.current}</h2>

      <button onClick={handleClick}>
        Increase
      </button>
    </div>
  );
};

export default CounterState;


// import React, { useState, useMemo } from "react";

// const CounterState = () => {
//   const [count, setCount] = useState(0);
//   const [number, setNumber] = useState(0);

//   // 🔥 Heavy Loop (1 to 10000)
//   const result = useMemo(() => {
//     console.log("Running heavy calculation...");

//     let sum = 0;
//     for (let i = 1; i <= 10000; i++) {
//       sum += i;
//     }

//     return sum + number;
//   }, [number]); // sirf number change hone par chalega

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Heavy Result: {result}</h2>
//       <h2>Counter: {count}</h2>

//       {/* Normal Counter */}
//       <button onClick={() => setCount(count + 1)}>
//         Increase Counter
//       </button>

//       {/* Trigger Heavy Calculation */}
//       <button onClick={() => setNumber(number + 1)}>
//         Change Number
//       </button>
//     </div>
//   );
// };

// export default CounterState;