import React from "react";
import IShimmerPropsConfig from "../../interfaces";
import "./shimmer.css";

const ShimmerSkeleton = React.forwardRef(
    (props: IShimmerPropsConfig, ref: React.ForwardedRef<HTMLDivElement>) => {
        const { isLoading, width, height, className, children } = props;
        return (
          <>
            {isLoading ? (
              <div className={`shimmer-effect shimmer-effect-start-animation ${className || ""}`} style={{
                  width: width || '100%',
                  height: height || '50px'
              }} ref={ref}>
              </div>
            ) : (
              children
            )}
          </>
        );
    }
)


export default ShimmerSkeleton;
