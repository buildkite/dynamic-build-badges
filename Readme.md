# Dynamic Build Badges ![](https://img.shields.io/badge/Woot-100%-green.svg?style=flat-square)

A dynamic build badge server that uses the [Buildkite Builds API](https://buildkite.com/docs/api/builds) and [shields.io](http://shields.io/) to turn any of your [build meta-data values](https://buildkite.com/docs/guides/build-meta-data) into a readme badge. Embed your code coverage, build timings, latest commit running on production, or anything you like!

For example, say you had the following code snippet somewhere in your `my-org/my-pipeline` build pipeline:

```bash
buildkite meta-data set coverage '95%'
```

To show the value from the last passing master build, you’d:

```html
<img src="https://my-app.heroku.com/my-org/my-pipeline/coverage?label=Coverage" alt="Coverage">
```

which would look like:

<img src="https://cloud.githubusercontent.com/assets/153/14535645/1cd6b448-02b2-11e6-91f4-382a288c5546.png" alt="Screenshot showing the badge" width="110" height="32">

Available parameters:

* `branch` - the branch to find the latest build from. Default is `master`.
* `state` - the required state of the latest build on the branch. Default is `passed`.
* `label` - the label for the badge. Default is meta-data key name.
* `color` - any valid SVG named color or hex value (e.g. `red` or `ff0033`). Default is `green`.
* `style` - [shields.io style](http://shields.io/#styles) (e.g. `flat-square`)
* `logo` - [shields.io logo](http://shields.io/#styles) (e.g. `data:image/png;base64,…`)
* `logoWidth` - [shields.io logoWidth](http://shields.io/#styles) (e.g. `40`)

## Usage

1. **Create an API token**<br>Create a [Buildkite API Token](https://buildkite.com/user/api-access-tokens) with `read_builds` access so it can fetch the latest build and grab its meta-data. Copy the API key and paste it into the next step, deploying to [Heroku](https://heroku.com/).

1. [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

4. **Embeddinate your badges** :tada:

## Roadmap

* Ability to specify a `range` parameter, and have the color change from red → green depending on the value
* Speed up badge display by removing 302 and serving it directly with [shields](https://github.com/badges/shields)

## Development

* `git clone`
* `env BUILDKITE_API_KEY=xxx npm run web`

## Contributing

Pull requests welcome!

## License

See the [License](License.md) file for license rights and limitations (MIT).
