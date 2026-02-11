import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Test App" });
});

export default router;

// export default function homepage() {
//   <html lang="en">
//     <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>Document</title>
//       <script src="/htmx.min.js.2.0.8"></script>
//     </head>
//     <body>
//       <h1>TESTING</h1>
//     </body>
//   </html>;
// }
