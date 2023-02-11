import React, { createContext, useContext, useState } from "react";
import { IRequisitionDetails } from "@src/interface/forms";

const initialValues = {
  requisitionDetails: {
    gender: "",
    noOfOpenings: 0,
    requisitionTitle: "",
    urgency: "",
  },
  jobDetails: {
    jobDetails: "",
    jobLocation: "",
    jobTitle: "",
  },
  interviewSettings: {
    interviewDuration: "",
    interviewLanguage: "",
    interviewMode: "",
  },
};

interface ContextProps {
  data: typeof initialValues;
  setData: React.Dispatch<React.SetStateAction<typeof initialValues>>;
}

export const DataContext = createContext<ContextProps>({
  data: initialValues,
  setData: ()=>{}
});

// const DataContext = createContext(typeof initialValues);
// const UpdateDataContext = createContext(React.Dispatch<React.SetStateAction<typeof initialValues>>)

const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState(initialValues);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

export default DataProvider;
