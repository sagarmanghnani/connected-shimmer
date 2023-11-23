import React, { ReactNode } from "react";

interface IShimmerConnectorSupporter {
    setShimmerCount:React.Dispatch<React.SetStateAction<number>>
    setCompletedShimmerCount:React.Dispatch<React.SetStateAction<number>>
    id?:string;
}

interface IShimmerConnector {
    children: any;
}

export default IShimmerConnectorSupporter;
export type {
    IShimmerConnector
}