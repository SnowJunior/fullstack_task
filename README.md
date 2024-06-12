## Description
This repo contains the completed take home assessment for the fullstack engineer position. The assessment was interesting and enjoyed creating the solution. I would like to see my solution be used in the organizations application if it statisfies the conditions

## Functions
All assessment requirements were met and completed. These include:
- Search for books by title
- Add a book to reading list
- Remove the book from reading list
- Use of material UI
- Use of react hooks
- Responsiveness
- Use of 'Mulish' font

## Extras
- Detailed commits - Descriptive to know what was handled where
- Paginated the data and allowed filtering across all pages
- Use of scss together with MUI to offer full customization and control of components
- Ensured the application requests were type safe
- Error handling for any instance of failure of a request happening

## Video Link
As the completed solution below is the link of a small demo of the process and the application solution and output that was created
https://www.loom.com/share/968d0f9588e04458a96b3dee109a0244?sid=e1534ec2-3b16-4638-8cdf-b3c44b66f5ff


### Organization
I have followed a personal approach that allows me to achieve the best solution. I separated the data layer from the UI layer. The UI layer interacts with the data layer using hooks that allow for the fetching of data and creation of items.

Detailed description of the organization 
https://www.loom.com/share/90f7f1368d8e4d88a63c26cc958d9469?sid=a02d6746-761f-447e-841b-9c7fe8a0d9ea

In the frontend I have the following files: 
- Api - This handle the setup of Apollo client and the client actions i.e: all queries and mutations
- App - This contains the app file
- Components - This contains all the reusable components i.e the book_item, buttons and input elements
- Hooks - This contains all custom made hooks that are used in the application
- Models - This is to define the book model and all prop interaction with a single place for all the application models for well defined requests and responses
- Pages - This contains the views that the users sees and interacts with in the application
