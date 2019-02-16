# Answers

1.  What is React JS and what problems does it try and solve?
    React is a framework developed by Facebook that allows an web application to asynchronously update data on a page without having to refresh the browser. It was designed to create a better experience for both users and developers creating these applications.
2.  What does it mean to _think_ in react?
    "Thinking in React" is the idea of planning out the structure of your React application and its components, and determining what the component heirarchy will be and which components should receive State. A good approach to this concept is to take a mockup/design/sketch and break each section down into modular components. This helps keep your project and code clean and organized before you begin building.
3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    Besides syntax, Class/Stateful components are different in their ability to hold State data which can then be passed around to other components. Functional components receive State data via props and do something with it. Functional components cannot (directly) update State.
4.  Describe state.
    State is an immutable object responsible for holding the data of your application. It is your app's quarterback and passes the data down (not up) to components when it is called upon.
5.  Describe props.
    If State is your quarterback, props is the ball. Props is an object with immutable properties containing the data from State which components receive so that users can view/interact with it.