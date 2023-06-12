import React from "react";
import axios from "axios";
import "./reset.css";
import "./App.css";

function App() {
  const [imageUrl, setImageUrl] = React.useState(null);
  const [handleImage, setHandleImage] = React.useState(false);

  React.useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const promise = axios.get(`${apiUrl}/images`);
    promise.then((res) => setImageUrl(res.data.url));
  }, [handleImage]);

  function handleClick() {
    setHandleImage(!handleImage);
  }

  if (!imageUrl) return null;
  return (
    <div>
      <h1>Foto do Dia</h1>
      <img onClick={handleClick} src={imageUrl} alt="" />
    </div>
  );
}

export default App;
