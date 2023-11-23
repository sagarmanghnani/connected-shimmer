import React, { useEffect, useState } from "react";
import { IShimmerConnector } from "../../interfaces";
import SHIMMER_ANIMATION_COMPLETE_EVENT from "../constants";
import ShimmerContext from "../../context";


const ShimmerConnector = (props: IShimmerConnector) => {
    const [shimmerCount, setShimmerCount] = useState(0);
    const [completedShimmerCount, setCompletedShimmerCount] = useState(0);

    useEffect(() => {
        if(completedShimmerCount === shimmerCount && shimmerCount) {
            const allElementAnimationCompleteEvent = new CustomEvent(SHIMMER_ANIMATION_COMPLETE_EVENT);
            document.dispatchEvent(allElementAnimationCompleteEvent);
            setCompletedShimmerCount(0);
        }
    }, [completedShimmerCount])

    const {children} = props;
    const renderChildren = () => {
        return React.Children.map(children, (child) => {
            return React.cloneElement(child, {
                setShimmerCount,
                setCompletedShimmerCount
            })
        })
    }
    return (
        <>
            <ShimmerContext.Provider value={{
                setShimmerCount,
                setCompletedShimmerCount
            }}>
                {children}
            </ShimmerContext.Provider>
        </>
    )
}

export default ShimmerConnector;