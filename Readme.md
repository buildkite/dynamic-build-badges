# Dynamic Build Badges (WIP)

Dynamic [shields.io](http://shields.io) badges for your Buildkite builds.

An example Node.js app you can easily deploy to Heroku to dynamically generate build badges based off your [Buildkite build meta-data](https://buildkite.com/).

For example, say you had the following build script in any one of your build jobs:

```bash
buildkite meta-data set coverage $(./calculate-code-coverage)
```

You could then embed badge showing the coverage of the last passing build on the master branch with the following markdown:

```markdown
![](https://myapp.heroku.com/my-org/my-pipeline/coverage?label=Coverage&max=100)
```

(screenshot)

## Usage

1. **Copy your API token**<br>You’ll need to create a [Buildkite API Token]() with `read_builds` access so it can fetch the latest build and grab its meta-data.

1. **Deploy it to Heroku** <br>[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

4. **Use your badge** :tada:

## Personalizing

...

## License

See the [License](License.md) file for license rights and limitations (MIT).