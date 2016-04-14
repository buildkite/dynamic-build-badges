# Dynamic Build Badges ![](https://img.shields.io/badge/Woot-100%-green.svg?style=flat-square)

A dynamic [shields.io](http://shields.io) badge service for generating your own custom badges based on [Buildkite build meta-data](https://buildkite.com/docs/guides/build-meta-data). For example, say you had a code coverage calculation script that you ran as part of your build:

```bash
buildkite meta-data set coverage $(./calculate-code-coverage)
```

Embedding that in your Readme, based on the last passing master build, is as easy as:

```markdown
![](https://myapp.heroku.com/my-org/my-pipeline/coverage?label=Coverage)
```

<img width="183" alt="Screenshot showing the badge" src="https://cloud.githubusercontent.com/assets/153/14534212/7dcfdf06-02ab-11e6-9dd3-d63c637c609f.png">

Available parameters:

* `branch` - the branch to find the last passing build from. Default is `master`.
* `color` - any valid SVG named color or hex value (e.g. `red` or `ff0033`). Default is `green`.
* `style` - one of the [shields.io styles](http://shields.io/#styles) (e.g. `flat-square`)
* `logo` - [shields.io logo](http://shields.io/#styles) (e.g. `data:image/png;base64,…`)
* `logoWidth` - [shields.io logoWidth](http://shields.io/#styles) (e.g. `40`)

## Usage

1. **Copy your API token**<br>You’ll need to create a [Buildkite API Token]() with `read_builds` access so it can fetch the latest build and grab its meta-data.

1. **Deploy it to Heroku** <br>[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

4. **Use your badge** :tada:

## Personalizing

...

## License

See the [License](License.md) file for license rights and limitations (MIT).
