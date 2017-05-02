# args-example

If you want to develop a CLI app with subcommands, you have to add the files to the `bin` property in `package.json` like this:

```json
"bin": {
  "music": "music.js",
  "music-play": "music-play.js",
  "music-stop": "music-stop.js"
}
```

After that you have to run `npm link` to link the `bin` files to your local `bin` folder. Without that step you won't be able to execute subcommands like `music play`.