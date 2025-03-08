import { useState } from "react";
import ButtonC from "../../Components/Button";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <div>
                <ButtonC label="-" onClick={() => setCount((c) => c - 1)} />
                <ButtonC label="+" onClick={() => setCount((c) => c + 1)} />
            </div>
        </div>
    );
}

export default Counter;