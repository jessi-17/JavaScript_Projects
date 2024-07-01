import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
inquirer.prompt([
    {
        message: 'Enter your URL:',
        name:"URL",

 }])
.then((answers)=>{
    const url = answers.URL;

    const qr_image = qr.image(url,{type:"png"});

    qr_image.pipe(fs.createWriteStream("qr_code.png"));
    fs.writeFile("URL.txt",url,(err) => {
        if (err) throw err;
        console.log("The file has been saved!");
      });
});

