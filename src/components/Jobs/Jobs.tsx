import React, { useEffect, useCallback} from "react";
import { getJobsRepo } from "../../api/endpoints/endpoints";
import { useDispatch, useSelector } from "react-redux";
import {apiActions} from "../../api/reduxApi/apiActions";
import {ApiEnum} from "../../api/models/api.enum";
import {AccamulatorType} from "../../api/reduxApi/reducer";

const Jobs = () => {
    const state = useSelector((state: {api: Record<string, AccamulatorType>} )=> state.api[ApiEnum.Jobs]);

    console.log(state)

    return (
        <div>
          Hello word 
        </div>
    )
} 

export default Jobs;