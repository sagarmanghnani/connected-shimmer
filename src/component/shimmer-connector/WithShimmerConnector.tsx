import IShimmerPropsConfig, { IShimmerConnectorSupporter } from "../../interfaces";
import React, { useEffect, useRef, useContext } from 'react';
import SHIMMER_ANIMATION_COMPLETE_EVENT from "../constants";
import ShimmerContext from "../../context";

function withShimmerConnector<P>(
  WrappedComponent: React.ForwardRefExoticComponent<P>,
): any{
    const WithShimmerConnector = React.forwardRef((props: P & IShimmerConnectorSupporter & IShimmerPropsConfig): JSX.Element => {
        const shimmerElemRef = useRef<HTMLDivElement>();
        const shimmerConnectorData = useContext(ShimmerContext);
        const {setShimmerCount, setCompletedShimmerCount} = shimmerConnectorData
        useEffect(() => {
            setShimmerCount((prevCount:number) => {
                return prevCount + 1
            });
            if(shimmerElemRef.current) {
                shimmerElemRef.current.addEventListener('animationend', () => {
                    shimmerElemRef.current?.classList.remove('shimmer-effect-start-animation');
                    setCompletedShimmerCount((prevCount:number) => prevCount + 1);
                });

                document.addEventListener(SHIMMER_ANIMATION_COMPLETE_EVENT, () => {
                    shimmerElemRef.current?.classList.add('shimmer-effect-start-animation');
                })
            }
            // eslint-disable-next-line
        }, []);

        return (
            <>
                <WrappedComponent {...props} ref={shimmerElemRef} ></WrappedComponent>
            </>
        )
    });
    return WithShimmerConnector
}

export default withShimmerConnector;