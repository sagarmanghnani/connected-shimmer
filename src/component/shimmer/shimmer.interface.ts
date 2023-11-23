import { ReactNode } from "react";

interface IShimmerPropsConfig {
    isLoading: boolean;
    width?: string;
    height?: string;
    className?:string;
    children?:ReactNode
}

export default IShimmerPropsConfig;