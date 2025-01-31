const fs = require("fs");
// let abc = "hello";
// console.log(abc);

// let meh = "hello world";
// console.log(meh);

// let bcd = "hello mehul";
// console.log(bcd);

// ---------------------------------

// file read asynchrous method
// fs.readFile("example.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error("Error reading file:", err);
//     return;
//   }
//   console.log("File content:", data);
// });

// ---------------------------------

// file read synchrous method
// try {
//   const data = fs.readFileSync("example.txt", "utf8");
//   console.log("File content:", data);
// } catch (err) {
//   console.error("Error reading file:", err);
// }

// ---------------------------------

// file write asynchrous method
// fs.writeFile(
//   "example.txt",
//   "Hello, world! [write a operation perform]",
//   (err) => {
//     if (err) {
//       console.error("Error writing to file:", err);
//       return;
//     }
//     console.log("File written successfully!");
//   }
// );

// ---------------------------------

// file write synchrous method
// try {
//   fs.writeFileSync("example.txt", "Hello, world!");
//   console.log("File written successfully!");
// } catch (err) {
//   console.error("Error writing to file:", err);
// }

// ----------------------

// file append asynchrous method it is use to write a text in next line in the existing file
// fs.appendFile("example.txt", "\nAppending this line!", (err) => {
//   if (err) {
//     console.error("Error appending to file:", err);
//     return;
//   }
//   console.log("Data appended successfully!");
// });

// ----------------------

// file append synchrous method it is use to write a text in next line in the existing file
// try {
//   fs.appendFileSync("output.txt", "\nAppending this line!");
//   console.log("Data appended successfully!");
// } catch (err) {
//   console.error("Error appending to file:", err);
// }

// -------------------------
// To remove a file, use the unlink asynchronous Method
// fs.unlink("output.txt", (err) => {
//   if (err) {
//     console.error("Error deleting file:", err);
//     return;
//   }
//   console.log("File deleted successfully!");
// });

// -------------------------
// To remove a file, use the unlink synchronous Method
// try {
//   fs.unlinkSync("output.txt");
//   console.log("File deleted successfully!");
// } catch (err) {
//   console.error("Error deleting file:", err);
// }

// --------------------
// create a directory asynchrous method

// fs.mkdir("new-folder", { recursive: true }, (err) => {
//   if (err) {
//     console.error("Error creating directory:", err);
//     return;
//   }
//   console.log("Directory created successfully!");
// });

// --------------------
// create a directory synchrous method

// try {
//   fs.mkdirSync("new-folder2", { recursive: true });
//   console.log("Directory created successfully!");
// } catch (err) {
//   console.error("Error creating directory:", err);
// }

// ------------------
// checking file status asynchrous method

// fs.stat("example.txt", (err, stats) => {
//   if (err) {
//     console.error("Error getting file stats:", err);
//     return;
//   }
//   console.log("File stats:", stats);
//   console.log("Is file:", stats.isFile());
//   console.log("Is directory:", stats.isDirectory());
// });

// ------------------
// checking file status synchrous method

// try {
//   const stats = fs.statSync("example.txt");
//   console.log("File stats:", stats);
//   console.log("Is file:", stats.isFile());
//   console.log("Is directory:", stats.isDirectory());
// } catch (err) {
//   console.error("Error getting file stats:", err);
// }

// ------------------

// watching for file changes
// fs.watch("example.txt", (eventType, filename) => {
//   console.log(`File changed! Event: ${eventType}, Filename: ${filename}`);
// });
