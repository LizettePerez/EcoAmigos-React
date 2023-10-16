import axios from "axios";
import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";

function AppData() {
  //const profilePic = localStorage.getItem
  const [data, setData] = useState({});
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/post/lista",
    })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    console.log("listening to data");
  }, [data]);
  console.log(data);
  return <Avatar alt="profilePic" src={data.profilePic} />;
}

export default AppData;
