import axios from "axios";
import React, { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import useFetch from "../customHooks/useFetch";
import { toast } from "react-toastify";
import Loading from "./Loading";
import ProductCard from "./ProductCard";

const Products = () => {
  const options = ["none", "Price", "Ratings"];

  const [filters, setFilters] = useState({
    catagory: "All",
    Price: 1000,
  });

  const [filterData, setFilterData] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [searchResult, setSearchResult] = useState(null);

  const navigate = useNavigate();
  const { addItem, totalUniqueItems } = useCart();

  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products"
  );

  useEffect(() => {
    const filteredData =
      data &&
      data.filter((ele) => {
        if (filters.catagory == "All") {
          return ele.price <= filters.Price;
        } else {
          return ele.category == filters.catagory && ele.price <= filters.Price;
        }
      });

    setFilterData(filteredData);
  }, [filters]);

  useEffect(() => {
    if (filterData) {
      var res = filterData && filterData.filter((ele) => {
        return ele.title.toLowerCase().includes(searchResult.toLowerCase());
      });
    } else {
      var res =
        data &&
        data.filter((ele) => {
          return ele.title.toLowerCase().includes(searchResult.toLowerCase());
        });
    }

    //console.log(res)
    setFilterData(res);
  }, [searchResult]);

  const catagories = ["All"];
  data &&
    data.map((ele) => {
      if (!catagories.includes(ele.category)) {
        catagories.push(ele.category);
      }
    });
  const addToCart = (item) => {
    addItem(item);
    toast.success("Item added to Cart");
  };

  return (
    <div className="mx-4 md:mx-20 my-20">
      {loading ? <Loading /> : ""}
      <div className="flex flex-col md:flex-row">
        <div className="w-40">
          <div className="flex flex-row md:flex-col gap-2 md:gap-4 mb-2  ">
            <h1 className=" text-lg md:text-xl font-bold mx-2 md:mx-0 ">
              Categories:
            </h1>
            {catagories &&
              catagories.map((ele) => {
                return (
                  <div className="flex flex-row items-start justify-center md:flex-col  md:gap-4   ">
                    <h2
                      className={`text-sm font-sans cursor-pointer flex items-start justify-start  ${
                        currentCategory == ele
                          ? "border-b-2 border-black  "
                          : ""
                      }`}
                      onClick={() => {
                        setFilters({ ...filters, catagory: ele });
                        setCurrentCategory(ele);
                      }}
                    >
                      {ele}
                    </h2>
                  </div>
                );
              })}
          </div>

          <h1 className="text-xl font-bold ">Price</h1>
          <input
            type="range"
            min={0}
            max={1000}
            value={filters.Price}
            onChange={(e) => {
              setFilters({ ...filters, Price: e.target.value });
            }}
            className="w-30"
          />
          <p>{filters.Price}$</p>
          <button className="bg-orange-700 px-2 py-1 rounded-md text-white my-4" onClick={()=>{
            setFilters({
              catagory: "All",
              Price: 1000,
            })
          }}>
            Clear Filter
          </button>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-4">
            <input
              type="search"
              placeholder="Search Products"
              className="h-8 border-b-2 border-black px-2"
              onChange={(e) => {
                setSearchResult(e.target.value);
              }}
            />
            <div className="flex items-center justify-center">
              <p className="text-lg">Sort By : </p>

              <Dropdown
                options={options}
                placeholder="Select option"
                className="w-38 h-10"
              />
            </div>
          </div>

          {filterData ? (
            <ProductCard data={filterData} />
          ) : (
            <ProductCard data={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
