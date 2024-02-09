# React simple text modal

## Installation
You can use this package with `create-react-app`.
To install the react-simple-text-modal package, use npm (Node Package Manager) by running the following command:

bash
### `npm install react-simple-text-modal`


## Minimum Node.js Version
The minimum Node.js version required to use this package is Node.js 10.x or higher.


## Description
The React package react-simple-text-modal makes it easy to display modals with simple text in web applications. This library provides a simple interface for displaying a modal with customized content, providing developers with a tool to easily display messages, warnings, or other important information.


## Usage

### Package
The package provides the Modal component to be used in a parent component with three props.

### Props 
Here is a table defining the props `isOpen`, `handleClose`, and `children`, indicating whether they are required, their function, and their value:

|     Prop     |Required|                Function               |   Value   |
|--------------|--------|---------------------------------------|-----------|
| isOpen       | Yes    | Controls the visibility of the  modal | Boolean   | 
| handleClose  | Yes    | Closes the modal                      | Function  |                              
| children     | Yes    | Displays text                         | String    |