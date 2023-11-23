# Shimmer

This project consists of mainly two components
1. Shimmer
2. ConnectedShimmer

# About Shimmer component
This is a simple traditional shimmer which takes up following props
1. isLoading: when set to false, it removes the shimmer, and shows the content wrapped around it
2. width: takes, width of the shimmer element, default is 100%
3. height: takes height of the shimmer element, default is 50px
4. className: in order to provide custom css

# About Connected Shimmer
This component works in a way, when all shimmer elements defined inside this component, completes their animation, till then it waits for all the components, to complete their animation, and then it starts the new animation for all the connected shimmer altogether, making the animation syncronized

# Approach taken for Connected Shimmeer

    Basic Idea:
    ShimmerConnector, component, that manages, the restart and start of animation, it keeps track of shimmer elements, used within it, and when all shimmer components, completes their animation, it trigger an event, signalling all the shimmer components, to start the animation again, and together

    In order to handle the logic of Shimmer connection and keeping it independent of Basic Shimmer component, I am using WithShimmerConnector HOC, this hoc receives, two state updaters namely: setShimmerCount, setCompletedShimmerCount
    One is used to keep count of number of shimmer used, Other one is used to keep count of how many shimmers have completed their animation.

    once (number of shimmers = number of completed shimmer animation) this condition satisfies, we trigger, new animation

    I used HOC, in order to keep logic out of basic shimmer, and make it easy to use as a different component, as a different component, Using this approach, I can abstract away the logic, and hassle for connection, and make easy to use all these components



# Link for viewing Shimmer
https://master--shimmer-demo.netlify.app/


