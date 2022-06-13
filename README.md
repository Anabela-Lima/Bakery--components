

# Exercise - Components

In this exercise we will consider how to break down a web page into components before taking a look at some of the things we can do with them.

### Task2: My webPage

<img width="1175" alt="Bakery Photo" src="https://user-images.githubusercontent.com/101633036/173449375-404e0661-8257-4ebf-b58d-244afc865758.png">

### Task1: My Wireframe

![My Recipe Page WireFrame-2](https://user-images.githubusercontent.com/101633036/173450100-d92d3404-6ee6-4edc-a7e7-2c4293e3abe3.png)




## Task:

### Part 1:

Wireframe a single-page application for a recipe website. Your page should have:

- Title
- Navigation
- A search bar
- A display of recipes
- A form to submit a new recipe

Think about how your design could be broken down into reusable components and highlight these on the wireframe. These could be quite abstract, for example a sign-up form and a submission form might have some overlap in functionality and might not need their own components. Use a tool like Excalidraw (for example) for show and tell purposes!


### Part 2:

Create a new React app to practise making components. For each bullet point make a component and implement the required functionality there.

- Display some text saying "Welcome to the Bakery!"
- Display an image of a cake from the internet. If you like you can store it locally, but you may need to do some research into how to manage images within a React app for this.
- Map the cake objects below and for each cake display its name followed by a list of the ingredients. At the bottom of the component show the average cake rating.

```json

cakes = [
    {
        cakeName: "Lemon Drizzle",
        ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
        rating: 5
    },
    {
        cakeName: "Tea Loaf",
        ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
        rating: 3
    },
    {
        cakeName: "Brownie",
        ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
        rating: 4
    },
    {
        cakeName: "Carrot Cake",
        ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
        rating: 5
    }
]

```
