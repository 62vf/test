const fs = require('fs');

fs.rename("hey.txt", "hoi.txt", function(err) {
    if (err) console.error(err);
    else console.log("File renamed successfully!");
});