import React, { useEffect } from "react";
import { ApiEnum } from "../../../../api/models/api.enum";
import { useFetch } from "../../../../hooks/useFetch";
import AsideBar from "../../../../components/AsideBar/AsideBar";

const Jobs = () => {
  const { response, performFetch } = useFetch(ApiEnum.Jobs);

  useEffect(() => {
    performFetch();
  }, [performFetch]);

  return (
    <aside>
      Hello word
      <AsideBar />
    </aside>
  );
};

export default Jobs;
