# Dynamic Build Badges (WIP)

A dynamic [shields.io](http://shields.io) badge service for generating your own custom badges based on [Buildkite build meta-data](https://buildkite.com/docs/guides/build-meta-data). For example, say you had a code coverage calculation script that you ran as part of your build:

```bash
buildkite meta-data set coverage $(./calculate-code-coverage)
```

You can now embed a badge in your Readme showing the coverage of the last passing build on the master branch:

```markdown
![](https://myapp.heroku.com/my-org/my-pipeline/coverage?label=Coverage)
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
