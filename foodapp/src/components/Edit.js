import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  console.log("id=",id)

  useEffect(() => {
    setData({});
    fetch("http://localhost:8080/product/" + id)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, [id]); 

  console.log("data=",data)
  // added dependency array to rerun effect when id changes

  function editData() {
    fetch("http://localhost:8080/product/" + id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      navigate("/admin");
    });
  }

  return (
    <>
      <input
        type="text"
        value={data.image || ""}
        onChange={(e) => setData({ ...data, image: e.target.value })}
        placeholder="Enter image URL"
      />
      <input
        type="text"
        value={data.name || ""}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        placeholder="Enter name"
      />
      <input
        type="text"
        value={data.category || ""}
        onChange={(e) => setData({ ...data, category: e.target.value })}
        placeholder="Enter category"
      />
      <input
        type="text"
        value={data.color || ""}
        onChange={(e) => setData({ ...data, color: e.target.value })}
        placeholder="Enter color"
      />
      <input
        type="number"
        value={data.price || ""}
        onChange={(e) => setData({ ...data, price: e.target.value })}
        placeholder="Enter price"
      />
      <input
        type="number"
        value={data.rating || ""}
        onChange={(e) => setData({ ...data, rating: e.target.value })}
        placeholder="Enter rating"
      />
      <input
        type="text"
        value={data.size || ""}
        onChange={(e) => setData({ ...data, size: e.target.value })}
        placeholder="Enter size"
      />
      <br />
      <button onClick={editData}>Edit</button>
    </>
  );
}

export default Edit;
