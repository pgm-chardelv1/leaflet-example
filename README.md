# React Leaflet Example
Quick and simple example to use React Leaflet v3 to successfully render a map.

Source: [Map creation and interactions](https://react-leaflet.js.org/docs/api-map/#hooks)
## Run locally
- Clone the GitHub repository
  - `git clone https://github.com/pgm-chardelv1/leaflet-example.git`
- Open the folder containing the code
  - `cd leaflet-example`
- Install node modules
  - `yarn install`
- Run the project locally
  - `yarn start`

## Steps to use Leaflet in React to render a map
- Create a new React App with CRA
  - `npx create-react-app leaflet-example --template typescript`
- Install Leaflet, React Leaflet and TypeScript types
  - `yarn add leaflet react-leaflet`
  - `yarn add -D @types/leaflet`
- Include CSS and JS files for Leaflet in 'public/index.html' `<head>`
  - ```html  
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
     crossorigin=""/>
      <!-- Make sure you put this AFTER Leaflet's CSS -->
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
    integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
    crossorigin=""></script>
    ```

Example Map component under `/src/components/map/LeafletMap.tsx`