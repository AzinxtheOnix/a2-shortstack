### Assignment 2 - Short Stack: Basic Two-tier Web Application using HTML/CSS/JS and Node.js  
===

## A Random Survey About Destiny (The Game)
Michael Lai http://a2-azinxtheonix.glitch.me

With this assignment, I've created a scoreboard for people to record their highscores to. This scoreboard also keeps track who has the highscore in each game.

For the technical side of the project, it shows that I can design an application that involves sending data to a server and sending data back to the client to update. I used CSS grids to position items.

As for instructions on how to use the application, I've already put them in the site itself.

NOTE: There's an error that's stating the receiving end does not exist, which in turn causes the whole application not to work. From debugging, it seems to be a server side error when it tries to unsuccessfully load the site in node.js (try node ./server.improved.js in console, go to the localhost on port 3000, and loading the local.html file; it won't work). I've looked through my code and but I can't see what's causing this. I'm fairly certain that the rest of the code works (if the client can connect properly).

The server should also be calculating the highscore as the derived data, but with the server connection bug, nothing can be seen.

## Technical Achievements
**1 - Updating Data:**
The code here should work if it weren't for the weird server connection bug that's going on right now. Essentially what the code should be doing is every time a delete, submit, or modify action is taken, it will beforehand update the client side data to make sure the data the action working with is up to date. After the action is complete, then the table is updated (with another call to the server for the JSON data).

## Design/Evaluation Achievements
N/A

## Old Readme Below
---

Due: September 9th, by 11:59 AM.

This assignment aims to introduce you to creating a prototype two-tiered web application. 
Your application will include the use of HTML, CSS, JavaScript, and Node.js functionality, with active communication between the client and the server over the life of a user session.

Baseline Requirements
---

There is a large range of application areas and possibilities that meet these baseline requirements. 
Try to make your application do something useful! A todo list, storing / retrieving high scores for a very simple game... have a little fun with it.

Your application is required to implement the following functionalities:

- a `Server` which not only serves files, but also maintains a tabular dataset with 3 or more fields related to your application
- a `Results` functionality which shows the entire dataset residing in the server's memory
- a `Form/Entry` functionality which allows a user to add, modify, or delete data items residing in the server's memory
- a `Server Logic` which, upon receiving new or modified "incoming" data, includes and uses a function that adds at least one additional derived field to this incoming data before integrating it with the existing dataset
- the `Derived field` for a new row of data must be computed based on fields already existing in the row. 
For example, a `todo` dataset with `task`, `priority`, and `creation_date` may generate a new field `deadline` by looking at `creation_date` and `priority`

Your application is required to demonstrate the use of the following concepts:

HTML:
- One or more [HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms), with any combination of form tags appropriate for the user input portion of the application
- A results page displaying all data currently available on the server. You will most likely use a `<table>` tag for this, but `<ul>` or `<ol>` could also work and might be simpler to work with.
- All pages should [validate](https://validator.w3.org)

CSS:
- CSS styling of the primary visual elements in the application
- Various CSS Selector functionality must be demonstrated:
    - Element selectors
    - ID selectors
    - Class selectors
- CSS positioning and styling of the primary visual elements in the application:
    - Use of either a CSS grid or flexbox for layout
    - Rules defining fonts for all text used; no default fonts! Be sure to use a web safe font or a font from a web service like [Google Fonts](http://fonts.google.com/)

- CSS defined in a maintainable, readable form, in external stylesheets 

JavaScript:
- At minimum, a small amount of front-end JavaScript to get / fetch data from the server; a sample is provided in this repository.

Node.js:
- An HTTP Server that delivers all necessary files and data for the application, and also creates the required `Derived Fields` in your data. 
A starting point is provided in this repository.

Deliverables
---

Do the following to complete this assignment and acheive a base grade of 85%:

1. Fork the starting project code (make sure to fork the 2021 repo!). This repo contains some starter code that may be used or discarded as needed.
2. Implement your project with the above requirements.
3. Test your project to make sure that when someone goes to your main page, it displays correctly.
4. Deploy your project to Glitch, and fill in the appropriate fields in your package.json file.
5. Ensure that your project has the proper naming scheme `a2-yourGithubUsername` so we can find it.
6. Modify the README to the specifications below, and delete all of the instructions originally found in this README.
7. Create and submit a Pull Request to the original repo. Label the pull request as follows: a2-gitusername-firstname-lastname

Acheivements
---

Below are suggested technical and design achievements. You can use these to help boost your grade up to an A and customize the assignment to your personal interests. These are recommended acheivements, but feel free to create/implement your own... just make sure you thoroughly describe what you did in your README and why it was challenging. ALL ACHIEVEMENTS MUST BE DESCRIBED IN YOUR README IN ORDER TO GET CREDIT FOR THEM.

*Technical*
- (10 points) Create a single-page app that both provides a form for users to submit data and always shows the current state of the server-side data. To put it another way, when the user submits data, the server should respond sending back the updated data (including the derived field calculated on the server) and the client should then update its data display.

*Design/UX*
- (5 points per person, with a max of 10 points) Test your user interface with other students in the class. Define a specific task for them to complete (ideally something short that takes <10 minutes), and then use the [think-aloud protocol](https://en.wikipedia.org/wiki/Think_aloud_protocol) to obtain feedback on your design (talk-aloud is also find). Important considerations when designing your study:

1. Make sure you start the study by clearly stating the task that you expect your user to accomplish.
2. You shouldn't provide any verbal instructions on how to use your interface / accomplish the task you give them. Make sure that your interface is clear enough that users can figure it out without any instruction, or provide text instructions from within the interface itself. 
3. If users get stuck to the point where they give up, you can then provde instruction so that the study can continue, but make sure to discuss this in your README. You won't lose any points for this... all feedback is good feedback!

You'll need to use sometype of collaborative software that will enable you both to see the test subject's screen and listen to their voice as they describe their thoughts. After completing each study, briefly (one to two sentences for each question) address the following in your README:

1. Provide the last name of each student you conduct the evaluation with.
2. What problems did the user have with your design?
3. What comments did they make that surprised you?
4. What would you change about the interface based on their feedback?

*You do not need to actually make changes based on their feedback*. This acheivement is designed to help gain experience testing user interfaces. If you run two user studies, you should answer two sets of questions. 