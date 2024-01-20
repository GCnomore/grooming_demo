export const BASE_URL = "http://localhost:1337";
export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/**
 Security examples
 
*! Avoid javascript: URL-based script injection.
   function validateURL(url) {
      const parsed = new URL(url)
      return ['https:', 'http:'].includes(parsed.protocol)
   }
   <a href={validateURL(url) ? url : ''}>Click here!</a> 

*! Avoid concatenating strings onto the output of renderToStaticMarkup() before sending the strings to the client for hydration.
app.get("/", function (req, res) {
  return res.send(
    ReactDOMServer.renderToStaticMarkup(
      React.createElement("h1", null, "Hello World!")
    ) + otherData
  );
});

 */
