import React from "react";
import { Button, Input, Space } from "antd";

const DatMovieForm = () => {
  const [name, setName] = React.useState<string>("");
  const [listMovie, setListMovie] = React.useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const add = () => {
    if (name) {
      setListMovie([...listMovie, name]);
      setName("");
    }
  };

  return (
    <div>
      <h2 style={{ fontWeight: 800, fontSize: "30px" }}>Dat Movie Form</h2>

      <Space direction="vertical" size="middle">
        <Space.Compact style={{ width: "100%" }}>
          <label>Name </label>
          <Input onChange={handleChange} defaultValue="" value={name} />
          <Button onClick={add} type="primary">
            Add
          </Button>
        </Space.Compact>
      </Space>

      <h3 style={{ fontWeight: 800, fontSize: "20px", color: "blueviolet" }}>List Movie</h3>
      {listMovie.length > 0 && (
        <div>
          <ul>
            {listMovie.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default DatMovieForm;
