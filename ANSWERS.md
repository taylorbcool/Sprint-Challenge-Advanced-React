- [ ] Why would you use class component over function components (removing hooks from the question)?

I would use a class component over a function component if: 1. The component needs to use lifecycle methods like `shouldComponentUpdate`, or 2. If I'm using this component as a sort of container component that will handle most of the functionality for the app.

- [ ] Name three lifecycle methods and their purposes.

componentDidMount - this method is called whenever the component mounts for the first time. It is used for things that must happen at the beginning of each lifecycle, ie. loading data.

componentDidUpdate - this method is called whenever the component updates. This is used to react to DOM changes.

componentWillUnmount - this method is called before the component unmounts. It is mostly used for cleanup before the component leaves.

- [ ] What is the purpose of a custom hook?

Custom hooks are a lot like LESS or SCSS mixins. They are used to share stateful or side-effectful functionality between multiple components.

- [ ] Why is it important to test our apps?

App testing is a good way to ensure our app works for specific use cases wothout actually opening the app and performing the use case. Additionally it saves time and money in the long run because you don't need to troubleshoot every possible path a user may take through the app.