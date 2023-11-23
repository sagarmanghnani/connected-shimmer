import { useEffect, useState } from "react"
import { ConnectedShimmer, ShimmerConnector } from "../component";
import './template1.css';

const ImageShimmer = (props:any) => {
    return (
        <ConnectedShimmer width='400px' height='300px' isLoading={props?.isLoading} {...props}>
            <img src="http://placekitten.com/g/400/300" alt="cat"></img>
        </ConnectedShimmer>
    )
}

const LengthyField = (props:any) => {
    return (
        <ConnectedShimmer width='350px' height='30px' isLoading={props?.isLoading} {...props}>
            This is lengthy field {props?.counter}
        </ConnectedShimmer>
    )
}

const SmallField = (props:any) => {
    return (
        <ConnectedShimmer width='200px' height='30px' isLoading={props?.isLoading} {...props} >
            This is small field
        </ConnectedShimmer>
    )
}

const ShimmerTemplate = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 5000);
        return () => {
            clearTimeout(timeout);
        }
    })

    return (
        <div className="template-container">
            <ShimmerConnector>
                    <div className="image-container common-margin">
                        <ImageShimmer isLoading={isLoading}></ImageShimmer>
                    </div>
                    <div className="length-field-container common-margin">
                        <LengthyField isLoading={isLoading} counter={1} ></LengthyField>
                    </div>
                    <div className="length-field-container common-margin">
                        <LengthyField isLoading={isLoading} counter={2} ></LengthyField>
                    </div>
                    <div className="small-field-container common-margin">
                        <SmallField isLoading={isLoading}></SmallField>
                    </div>
            </ShimmerConnector>
        </div>
    )
}

export default ShimmerTemplate