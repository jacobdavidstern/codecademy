Outfit Generator
Message generator that creates randomized outfits
Outfits include: Shirt, Pants, Shoes, and Accessory
Categories are stored as arrays of strings in an items object
Offline, Node.js, Kanban:

* Plan your project
    Visualize your end result. What is it built with? What can it do? Make sure that it satisfies all of the project objectives.
    Make a timeline for yourself and avoid the temptation to build things that aren’t required. Setting firm boundaries and deadlines will keep you on track and prevent scope creep. The following tasks will help you identify natural break points.

* Come Up with a Topic
    Decide on what types of messages you want your program to output. 
    Think about what kinds of messages you’d like your program to output. Is it a horoscope generator? A fortune teller? An inspiring phrase? Knock-knock jokes? Here’s an example of what the output of a horoscope generator could look like:
      Your sign is sun. 
      You are having good luck. 
      You should: "trust no one"
    Remember, to make your program truly random the message should really be made up of multiple strings that are output together.
    Think about what parts of the string could stay the same each time and what parts could change. In the output above, what do you think are the pieces that change each time?

* Next Steps
   You’re welcome to expand your program beyond these project tasks and get creative! 
   In addition to doing random messages, you could add random ASCII art.

* Set up version control
   Set up Git tracking in your directory and add and commit changes as you make them.
   If you want a refresher on the syntax, you can review the Git lesson or look at this cheat sheet. It is good practice to do your work on a separate branch, then merge to main in the end when you feel your code is ready.

* Store message components
   Decide how to store all of the message components for your game.
   Think about what kind of data structures would work best to store the information. An array would be a good choice here because you can randomly access an array’s elements. Remember, there will be at least 3 sets of data that make up your final message so you might consider having multiple arrays. You may want to nest these arrays inside of an object to keep them organized.

* Create the message
   Add functionality to randomly select the different message components so they can create a cohesive message
   You can use a loop to iterate through the object, with a switch case that can select and format each of the different message components.
   You can use a function to handle the overall formatting and display of the randomized message.

* Put the program together
   Combine the different parts of your program so the random messages are selected, combined, and then displayed to the user each time they run the program.
   You can use a function to handle the overall formatting and display of the randomized message.

* Create script and run it locally
   On your computer, create a JavaScript file to write your code in. Make sure you are able to run your script locally in Node.
   Create a script.js file and try logging some text to the console.
    In your terminal, navigate into your project directory and run your script in Node. You should see the text you wrote being printed to the terminal window. You can run your script at any point throughout this project to test it.

Note: Scripting refers to a specific type of coding that allows the user to make a program or application perform a certain function. While coding allows you to create static programs, scripting provides them with functionality, making them dynamic and adding elements that change based on user input. 

Note: This assignment is about branching, and this was created in the fse-2.3 branch, then it will get a Pull Request with the purpose and content of the branch, then it will be commented and accepted, and finally the Pull Request will be accepted, the fse-2.3 branch merged into master, and the fse-2.3 branch deleted.
