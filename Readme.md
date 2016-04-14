# Dynamic Build Badges ![](https://img.shields.io/badge/Woot-100%-green.svg?style=flat-square)

Emebed a dynamic [shields.io](http://shields.io) badge into your readmes based on [Buildkite build meta-data](https://buildkite.com/docs/guides/build-meta-data) you have set. For example, you could calculate your code coverage as part of your build, and store it in the `coverage` meta-data key:

```bash
buildkite meta-data set coverage $(./calculate-code-coverage)
```

To embed it in your readme:

```markdown
![](https://myapp.heroku.com/my-org/my-pipeline/coverage?label=Coverage)
```

<img src="https://cloud.githubusercontent.com/assets/153/14535645/1cd6b448-02b2-11e6-91f4-382a288c5546.png" alt="Screenshot showing the badge" width="110" height="32">

Available parameters:

* `branch` - the branch to find the last passing build from. Default is `master`.
* `state` - the state of the build to search for. Default is `passed`.
* `color` - any valid SVG named color or hex value (e.g. `red` or `ff0033`). Default is `green`.
* `style` - one of the [shields.io styles](http://shields.io/#styles) (e.g. `flat-square`)
* `logo` - [shields.io logo](http://shields.io/#styles) (e.g. `data:image/png;base64,…`)
* `logoWidth` - [shields.io logoWidth](http://shields.io/#styles) (e.g. `40`)

## Usage

1. **Create an API token**<br>Create a [Buildkite API Token](https://buildkite.com/user/api-access-tokens) with `read_builds` access so it can fetch the latest build and grab its meta-data. Copy this key and paste it into the next step.

1. [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

4. **Embeddinate your badges** :tada:

## Roadmap

* Ability to specify a `range` parameter, and have the color change from red → green depending on the value

## Contributing

Pull requests welcome!

## License

See the [License](License.md) file for license rights and limitations (MIT).
