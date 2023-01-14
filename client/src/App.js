import "./App.css";
import UploadImage from "./components/UploadImage";
import { useState } from "react";
import axios from "axios";

function App() {
  const [nft, setNft] = useState({
    nftName: "",
    clientSecret: "",
    projectId: "",
    email: "",
    name: "",
    description: "",
    traitType: "",
    value: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(`http://localhost:3001/nft`, nft);
    console.log(response);
  };

  const handleChange = (e) => {
    setNft({ ...nft, [e.target.name]: e.target.value });
    console.log(nft);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="NFT Name"
            name="nftName"
            value={nft.nftName}
            onChange={handleChange}
          ></input>

          <input
            placeholder="Client secret"
            name="clientSecret"
            value={nft.clientSecret}
            onChange={handleChange}
          ></input>

          <input
            placeholder="Project ID"
            name="projectId"
            value={nft.projectId}
            onChange={handleChange}
          ></input>

          <input
            placeholder="Email"
            name="email"
            value={nft.email}
            onChange={handleChange}
          ></input>

          <input
            placeholder="Name"
            name="name"
            value={nft.name}
            onChange={handleChange}
          ></input>

          <input
            placeholder="Description"
            name="description"
            value={nft.description}
            onChange={handleChange}
          ></input>

          <input
            placeholder="Type"
            name="traitType"
            value={nft.traitType}
            onChange={handleChange}
          ></input>

          <input
            placeholder="true or false"
            name="value"
            value={nft.value}
            onChange={handleChange}
          ></input>

          <UploadImage />
          <button style={{backgroundColor: "blue", color: "white", borderRadius: "5px"}} type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
