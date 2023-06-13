
const inquirer = require('inquirer');
const fs = require('fs');
const html = (name, location, bio, linkedIn, gitHubUrl) => {`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Portfolio Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
  </head>
  <body>
    <div>${name}</div>
    <div>${location}</div>
    <div>${bio}</div>
    <div>${linkedIn}</div>
    <div>${gitHubUrl}</div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
  </body>
</html>`
} 


const showNumInConsole = function(num){
  console.log(num);
}

const arrowShowNumConsole = (num) => {
  console.log(num);
}

  const getUserAnswers = () => {
    return inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'Where do you live?',
        name: 'location',
      },
      {
        type: 'input',
        message: 'Tell us about yourself:',
        name: 'bio',
      },
  
      {
          type: 'input',
          message: 'Paste your LinkedIn URL:',
          name: 'linkedIn',
        },
        {
          type: 'input',
          message: 'Paste your GitHub URL:',
          name: 'githubUrl',
        },
    ])
  }

  const otherFunctionThatCompletesThings = () => {
    let generatHtml = getUserAnswers()
                      .then((answers) => html(answers) );
    fs.writeFile('index.html', generatHtml, (err) =>
          err ? console.log(err) : console.log('Success!'))
  }

otherFunctionThatCompletesThings();
  // .then((data) => {
  //   // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

  //   fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
  //       err ? console.log(err) : console.log('Success!')
  //   );
  //   });