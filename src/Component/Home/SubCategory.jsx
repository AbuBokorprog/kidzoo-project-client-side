import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const SubCategory = () => {
  return (
    <div className="my-20">
      <h1 className="text-3xl font-semibold text-center">Sub Category</h1>
      <div className="mx-auto my-4 text-center">
        <Tabs>
          <TabList className="flex text-xl font-semibold justify-around items-center">
            <Tab>Math Toys</Tab>
            <Tab>Language Toys</Tab>
            <Tab>Science Toys</Tab>
          </TabList>
          <TabPanel>
            <h2>Math Toys</h2>
            {/* Render Math Toys content */}
          </TabPanel>

          <TabPanel>
            <h2>Language Toys</h2>
            {/* Render Language Toys content */}
          </TabPanel>

          <TabPanel>
            <h2>Science Toys</h2>
            {/* Render Science Toys content */}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default SubCategory;
