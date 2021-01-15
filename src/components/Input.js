import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";


function Input() {
  let cityinput=''
  const { setCityName } = useContext(ThemeContext);
  function cityText()
  {
  document.querySelector('input').addEventListener('input', (e) => {
    e.preventDefault();
    setCityName(e.target.value)
  })
  }
    return (
        <div>
             <input type='text' placeholder='Şehirler' onChange={cityText}></input>
        </div>
    )
}

export default Input