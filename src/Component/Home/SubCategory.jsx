import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabPanel1 from "./TabPanel1";
import TabPanel2 from "./TabPanel2";
import TabPanel3 from "./TabPanel3";

const SubCategory = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://kidzoo-server-side.vercel.app/toy")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);
  // Filter toys by subcategory
  const filteredToys1 = toys.filter((toy) => toy.category === "sports car");
  //setFilter(filteredToys1);
  //console.log(filteredToys1);
  const filteredToys2 = toys.filter((toy) => toy.category === "Race car");
  //console.log(filteredToys2);
  const filteredToys3 = toys.filter((toy) => toy.category === "Police Cars");
  //console.log(filteredToys3);

  return (
    <div className="my-20">
      <h1 className="text-3xl font-semibold text-center">Sub Category</h1>
      <div className="mx-auto my-4 text-center">
        <Tabs>
          <TabList className="flex text-xl font-semibold justify-around items-center">
            <Tab>Race Cars</Tab>
            <Tab>Sports Cars</Tab>
            <Tab>Police Cars</Tab>
          </TabList>
          <TabPanel>
            <div className="overflow-x-auto w-full">
              <table className="table overflow-x-auto w-full">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Toy-Name</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>View Details</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredToys2.map((toy) => (
                    <TabPanel2 key={toy._id} toy={toy}></TabPanel2>
                  ))}
                </tbody>
              </table>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="overflow-x-auto w-full">
              <table className="table overflow-x-auto w-full">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Toy-Name</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>View Details</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredToys1.map((toy) => (
                    <TabPanel1 key={toy._id} toy={toy}></TabPanel1>
                  ))}
                </tbody>
              </table>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Toy-Name</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>View Details</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredToys3.map((toy) => (
                    <TabPanel3 key={toy._id} toy={toy}></TabPanel3>
                  ))}
                </tbody>
              </table>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default SubCategory;
