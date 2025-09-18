import { useRef, useState } from "react";

function Bmitext({ bmi }) {
  if (bmi === 0) return null; // ถ้ายังไม่กดคำนวณ ไม่ต้องแสดง
  if (bmi < 18.5) return <h1>Underweight</h1>;
  if (bmi >= 25) return <h1>Overweight</h1>; // ปรับให้ตามเกณฑ์มาตรฐาน
  return <h1>Normal</h1>;
}

export default function Bmi() {
  const w_inputRef = useRef(null);
  const h_inputRef = useRef(null);
  const [Bmi, setBmi] = useState(0);

  const calBmi = () => {
    let w = parseFloat(w_inputRef.current.value);
    let h = parseFloat(h_inputRef.current.value) / 100;
    if (w > 0 && h > 0) {
      setBmi(w / Math.pow(h, 2));
    } else {
      setBmi(0);
    }
  };

  return (
    <>
      <h3>BMI Calculator</h3>
      <div>
        Weight (kg):{" "}
        <input type="number" ref={w_inputRef} placeholder="Enter weight" />
      </div>
      <div>
        Height (cm):{" "}
        <input type="number" ref={h_inputRef} placeholder="Enter height" />
      </div>
      <button onClick={calBmi}>Calculate</button>

      <h4>Your BMI: {Bmi > 0 ? Bmi.toFixed(2) : "-"}</h4>
      <Bmitext bmi={Bmi} />
    </>
  );
}
