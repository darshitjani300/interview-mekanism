import React, { useEffect, useState } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import Card from "./components/cards/Card";
import axios from "axios";
import Select from "react-select";

const App = () => {
  const [data, setData] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [orderOption, setOrderOption] = useState("");
  const options = [
    { value: "Bug", label: "Bug" },
    { value: "Dark", label: "Dark" },
    { value: "Dragon", label: "Dragon" },
    { value: "Electric", label: "Electric" },
    { value: "Fairy", label: "Fairy" },
    { value: "Fighting", label: "Fighting" },
    { value: "Fire", label: "Fire" },
    { value: "Flying", label: "Flying" },
    { value: "Ghost", label: "Ghost" },
    { value: "Grass", label: "Grass" },
    { value: "Ground", label: "Ground" },
    { value: "Ice", label: "Ice" },
    { value: "Normal", label: "Normal" },
    { value: "Poison", label: "Poison" },
    { value: "Psychic", label: "Psychic" },
    { value: "Rock", label: "Rock" },
    { value: "Steel", label: "Steel" },
    { value: "Water", label: "Water" },
  ];
  const order = [
    { value: "Asc", label: "Ascending" },
    { value: "Desc", label: "descending" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:8000/v3/pokemon?type=${
            selectedOption.value || ""
          }&sort=${orderOption.value || ""}`
        );

        const resultData = result?.data?.data;
        setData(resultData || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [selectedOption, orderOption]);

  return (
    <section className="mb-5">
      <header className="bg-[#F34D61] w-full">
        <div className="max-w-6xl mx-auto p-2">
          <div className="flex text-white justify-between">
            <div className="flex gap-3">
              <img src="pokeball.png" alt="Pokeball" className="h-7.5 w-7.5" />

              <h1 className="text-xl">Pokédex</h1>
            </div>
            <div className="bg-white flex items-center justify-center px-2 rounded-sm">
              <RxMagnifyingGlass className="text-[#DC0A2D]" size={17} />
              <input
                type="text"
                placeholder="Search by name"
                className=" rounded-sm text-[#666666] px-3"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-2 w-full justify-end my-3">
        <div className="max-w-60 w-full">
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            placeholder={"Type"}
          />
        </div>
        <div className="max-w-60 w-full">
          <Select
            defaultValue={orderOption}
            onChange={setOrderOption}
            options={order}
            placeholder={"Order"}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-3">
        {data?.map((item) => {
          return <Card data={item} key={item?.id} />;
        })}
      </div>

      <div className="max-w-6xl mx-auto text-center mt-5">
        <button className="bg-[#F34D61] text-white rounded-full p-3 px-5">
          Load More
        </button>
      </div>
    </section>
  );
};

export default App;
