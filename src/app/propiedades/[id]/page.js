"use client";

import { useState } from "react";
import Contact from "../../../components/ContactSection/Contact";
import PropertyDetails from "../../../components/PropertyDetails/PropertyDetails";

const Page = () => {
  const [propertyInfo, setPropertyInfo] = useState(null);
  return (
    <div className="mt-4 pt-1">
      <PropertyDetails
        propertyInfo={propertyInfo}
        setPropertyInfo={setPropertyInfo}
      />
      ;
      <Contact propertyInfo={propertyInfo} />
    </div>
  );
};

export default Page;
