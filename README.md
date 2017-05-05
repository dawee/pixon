# Pixon

Run Pixi.js games offline

## Usage

First install pixi.js and pixon

```sh
npm install --save pixi.js pixon
```

Fill your index.js with some Pixi.js code

```js
const { Application, Sprite } = require('pixi.js');


const app = new Application(800, 600, { backgroundColor : 0x1099bb });
const bunny = Sprite.fromImage('assets/bunny.png');


bunny.anchor.set(0.5);
bunny.x = app.renderer.width / 2;
bunny.y = app.renderer.height / 2;

app.stage.addChild(bunny);
app.ticker.add((delta) => bunny.rotation += 0.1 * delta);

module.exports = app;
```

Add **assets/bunny.png** in your project.

Add pixon in your start script :

```json
{
  "scripts": {
    "start": "pixon"
  }
}
```

Then, run :

```sh
npm start
```
