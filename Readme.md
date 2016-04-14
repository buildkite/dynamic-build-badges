# Dynamic Build Badges ![](https://img.shields.io/badge/Woot-100%-green.svg?style=flat-square)

A dynamic [shields.io](http://shields.io) badge service for generating your own custom badges based on [Buildkite build meta-data](https://buildkite.com/docs/guides/build-meta-data). For example, say you had a code coverage calculation script that you ran as part of your build:

```bash
buildkite meta-data set coverage $(./calculate-code-coverage)
```

Embedding that in your Readme, based on the last passing master build, is as easy as:

```markdown
![](https://myapp.heroku.com/my-org/my-pipeline/coverage?label=Coverage)
```

(screenshot)

You can also set the `branch` and the `color` as you wish.

## Usage

1. **Copy your API token**<br>You’ll need to create a [Buildkite API Token]() with `read_builds` access so it can fetch the latest build and grab its meta-data.

1. **Deploy it to Heroku** <br>[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

4. **Use your badge** :tada:

## Personalizing

...

## License

See the [License](License.md) file for license rights and limitations (MIT).
