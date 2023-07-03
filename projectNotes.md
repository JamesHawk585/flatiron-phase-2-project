
# Requirements
1. [x] You must make a single page application (only one index.html file) using create-react-app.
2. [5/3] Your app should use at least 3 components in a way that keeps your code well organized.
    - Header: Create a header component that includes your name, logo, and a navigation menu to navigate between different sections of your page.
    + ProjectList 
    + Header 
    + ArticleList: 
    + Article
    - About
3. [5/2] There should be at least 2 client-side routes using React RouterLinks. Be sure to include a nav bar or other UI element that allows users to navigate between routes. 
4. [x] Use RESTful routing conventions where applicable.
5. [x] Use a json-server to create a RESTful API for your backend and make both a GET and a POST request to the json server. 
    + GET Request: Fetching Blog Posts 
    + POST Request: Adds new posts to db.json and appends to the DOM. 


6. [x] Use a form to make your post request, specifically a controlled form/component. 
7. [] For this project, you will need two separate repositories: one for your frontend and one for your backend.
8. [30/30] At least 30 total commits.  


ToDo List: 
1. [x] Append new blog post to the dom. 
2. [x] Esnure Restful Routing is being used. 
3. [x] React Router 

-------------------------------------------------------------------------
6. [x] MVP Complete
-------------------------------------------------------------------------

7. [] Add functionality to delete blog post. 
7. [] Submit backend repo
8. [] darkMode
9. [] CSS
10. [] README Quick Start
    - http://www.github.com/expressjs/express 
11. [] Test in new file 
12. [] Deploy? 
    - If you're using React Router, you'll also need to set up a _redirects file.
    - Include link to deployed app in README. 
    - Add a .env.production file with your deployed backend URL.
13. [] Front End Repo
14. [] Back End Repo
15. [] Blog 


# Stretch Goals
1. [] Use more components and client-side routes.
    - Hero Section: Add a hero section at the top of your page to introduce yourself as a full stack developer. You can include a catchy headline, a brief description, and a call-to-action button that leads to your portfolio or blog section.
    - Skills Section: Highlight your skills as a full stack developer. You can use icons or badges to represent different technologies or programming languages that you're proficient in. Consider categorizing your skills into front-end, back-end, and database technologies.
    - About Me Section: Create a component that provides a brief overview of your background, experience, and interests as a full stack developer. You can include a profile picture, a summary paragraph, and links to your social media profiles or resume.
    - Contact Section: Add a contact form or contact information section where visitors can reach out to you for inquiries, collaborations, or job opportunities. Include fields for name, email, subject, and message.
    - Footer: Create a footer component that includes links to your social media profiles, copyright information, and any additional navigation links.
2. [] Add some styling: you're encouraged to write your CSS from scratch, either by using styled componentsLinks to an external site. or writing CSS files and using id/className to style your elements. You can also incorporate a UI framework (like React BootstrapLinks to an external site., Semantic UILinks to an external site., or Material UILinks to an external site.) if you prefer.
3. [] Incorporate data from an external API. Check out this list of APIsLinks to an external site. if you need some inspiration!
4. [] Anything else you'd like! These are only the basic requirements — you're free to explore and add on as much stuff as you'd like. 
Setup


# MVP Diagram 

App (useState isDarkMode)
├── NavBar
├── Header ({ onDarkModeClick })
├── ProjectList ({ })
└── ArticleList ({ articlePosts })
    └── Article ({ title, date, preview, minutes, likes })
        └── CommentsList ({ comments, onSubmitComment, onDeleteComment, onEditComment })
        └── Comment ({ content, timeStamp, likes })

# Baby-the-Project Diagram

App (useState isDarkMode)
├── Header ({ onDarkModeClick })
├── ProjectList ({ })
└── ArticleList ({ articlePosts })
|    └── Article ({ title, date, preview, minutes, likes })
|        └── CommentsList ({ comments, onSubmitComment, onDeleteComment, onEditComment })
|        └── Comment ({ content, timeStamp, likes })
└── ProjectList
|    └── Project
|
├── SkillsSection
├── Footer


# Setting up Backend



# Deploying
When your project is complete, you are encouraged to deploy it! You'll need to deploy your frontend and backend repos to their own standalone servers.

For your backend, if you are using json-server, you will need a service capable of running a Node.js server. We recommend using RenderLinks to an external site.. See the json-server templateLinks to an external site. for instructions on deploying your backend to Render.

For your frontend, we recommend using NetlifyLinks to an external site.; however, there are a number of free services you can use if you'd like to explore alternatives.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Deploying Tips & Tricks
Routing
If you're using React Router, you'll also need to set up a _redirects file as specified here:

Netlify RedirectsLinks to an external site.
Your redirects file should be placed in the public folder. It looks like this:

/*    /index.html   200
Environment Variables
When working on your app, it's useful to consider which environment you're working on:

Development: when working locally
Test: when running tests
Production: when deployed to server
You'll likely have some variables that change depending on what environment you're working in. For example, after deploying your site to production, you won't be able to access your backend on localhost anymore.

To handle these kinds of environment variables, we can use .env files.

create-react-app has some tools for working with .env files that you can read about here:

Custom Environment VariablesLinks to an external site.

You can make a .env.development and .env.production file to keep track of separate environment variables. Note that these files should be in the root of your application directory (not in /src). For example, you might set up a .env.development file with your local development server URL:

REACT_APP_API_URL=http://localhost:4000
And a .env.production file with your deployed backend URL:

REACT_APP_API_URL=https://my-awesome-project.onrender.com
To use these environment variables in your code, you can access them at process.env.REACT_APP_VARIABLE_NAME:

fetch(`${process.env.REACT_APP_API_URL}/cats`)
  .then((r) => r.json())
  .then(setCats);
What Happens When I Deploy?
Glad you asked! Deploying your site involves taking the code that lives on your machine, and setting it up to run on someone else's machine.

As you'll recall, our frontend applications are a type of app known as a Single Page Application. What that means is that there is only one HTML file, along with a handful of JavaScript, CSS, fonts, images, and other static assets. So when our site is deployed, the main thing we need is a server to host all of those files and let other people from around the world access those files with their browsers.

static file server

In order to generate those files, create-react-app comes with a special build script that uses another tool, webpack, to take all of our JavaScript, CSS, and other assets from the src directory and optimize them by bundling (merging files together) and minifying (shortening the lines of code) so that the files load as fast as possible.

webpack bundle

You can try this out on your own by running npm run build. This will create a new directory with your bundled and minified source code!

When you upload your project to Netlify, this build script will run automatically on Netlify's server, so that they can host the content for you. Any time you update your code and push the changes up to Netlify, the build script will run again and create a new bundle on the server.

Netlify can be configured to use Continuous Deployment, which typically works by connecting your Git repository with Netlify's build process. Then, any time you push up changes to your main branch, your deployed site will automatically update! This makes it very easy to add features even after you've deployed.

How do you feel about this lesson?
Thumbs up!Thumbs down!
Have specific feedback?
Tell us here!

Instructor Questions
1. [x] When I console.log() posts, I get an empty array. Why is that?
2. [] Why do I need to refresh the page to append the article that was just POSTed to db.json?
3. [] Why does my site default to the last compnent viewed, rather than:    

// App.js
<Route exact path="/">
    <Home/>
</Route>

6. [] How can I fix my dark mode? 