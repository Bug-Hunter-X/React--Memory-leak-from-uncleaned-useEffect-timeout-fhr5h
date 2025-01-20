# React Memory Leak Bug

This repository demonstrates a common memory leak bug in React applications involving `useEffect` and timeouts.  The bug occurs because a timeout is set within an effect, but there's no mechanism to clear the timeout when the component unmounts.

## Bug Description

The `MyComponent` component uses `useEffect` to log messages. A `setTimeout` is used to log a message after 10 seconds. However, if the component unmounts before the timeout completes, the timeout continues running, leading to a memory leak. The leaked memory is associated with the callback function set within `setTimeout`, preventing proper garbage collection.

## Bug Solution

The solution involves using the return value of `useEffect` to return a cleanup function. This cleanup function clears the timeout when the component is unmounted, preventing the memory leak.  Refer to `bugSolution.js` for the fixed version.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the console output.  Unmount the component (e.g., by navigating away from the page or switching tabs) before the timeout elapses.

## Related Issues

* React documentation on useEffect: https://reactjs.org/docs/hooks-effect.html