SCAPIC FRONEND REACT ASSIGNMENT

  ( NOTE :
     Actually This project to be a 3D models. But I was tried 'aframe', 'react-vr' and three.js with react.
     What are the issues, I was faced?
       - I'm not able to load .obj file .mtl file using s3 bucket and also local files (.obj and .mtl).
       -I can able to create square, circle and etc. But I'm not able to loop.)

Documentation

  Installation: 

    step 1: npm install 
       Note: need NPM and NODE.
             (1) To check npm version using this command.
                npm -v
             (2) To check Node version using the command.
                node -v
    Step 2: npm start
    Step 3: check this link in your browser 
                http://0.0.0.0:3000/ 
                  or 
                http://localhost:3000/

Project Tips: If You need Custome Arrow function instead of AutoScroll to follow this steps: 
   --> Go to "component" directory 
   --> Go to "SlideCategory" directory
   --> To open "index.js"
   --> Change value of "showCustomeArrow: false" to "showCustomeArrow: true" in Constructor


Project Structure:
  |-public (to save images and fonts)
  |
  |-src  
  |   |-components (Reuse component and child route component)
  |   |-containers (Parent Route Component)
  |   |-redux (Redux operation)
  |   |-utils (nitialize to common methods, varaibles and constant api values)
  |   |
  |   |-index.html
  |   |-index.js (root js)
  |
  |-.eslint (follow up Standard format(intentation and es6 feature))
  |-package.json (package details)
  |-webpack.config.js (bundler)
  |
