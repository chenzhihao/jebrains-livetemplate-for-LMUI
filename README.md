# jetbrains-lmui

LMUI snippets(live templates) for JetBrains series editors (e.g. WebStorm, PHPStorm, IntelliJ IDEA, etc.)

## Installation

### Importing

1. Download `jetbrains-lmui.jar`;
2. Click `File` -> `Importing Settings...` on your IDE menubar, select `jetbrains-react.jar`, then click `OK`.

### Install Manually

1. Download and copy the `jetbrains/templates/ReactJS.xml` file to your templates folder:

  - Windows: `<your home directory>\.<product name><version number>\config\templates`
  - Linux: `~\.<product name><version number>\config\templates`
  - OS X: `~/Library/Preferences/<product name><version number>/templates`

  e.g. `~/Library/Preferences/WebStorm10/templates` on OS X for WebStorm 10

2. Restart your IDE.

3. To see all templates, go to `Preferences` -> `Live Templates` and expand the `ReactJS` Template Group.


## Usage

It's hard to remember shortcuts when there are a large number of options. A more efficient way is to take advantage of editor's Insert Live Template shortcut. Press `Cmd + J` and type as many letters as you want to filter the resulates.

For example, to create a new LMUI View JS class, type `es6` and press `Tab` or press `Cmd + J` and write `es6`.

**Documentation of available snippets:**

<!--DOC_START-->
### `es6`

```js
import LM from 'lmcore2';
import $ from 'jquery'; //eslint-disable-line
import _ from 'lodash'; //eslint-disable-line
import utils from 'lmutils2';
import templates from '/* your template*//templates';

export default $class$.extend({
    className: '/* class names */',

    template: templates['/* your template here */'],

    events: {},

    appEvents: {},

    broadcastEvents: {},

    initialize (options){
        //
        this._super(options);
    },

    render() {
        this.$el.html(this.template(/*your data*/));
        this._super();
    }
});

```

### `es5`

```js
define([
    'lmcore2',
    'lodash',
    '/* your template*//templates',
    'jquery',
    'lmutils2'
], function (LM, _, templates, $, utils) {
    return $class$.extend({
        className: '/* class names */',

        template: templates['/* your template here */'],

        events: {},

        appEvents: {},

        broadcastEvents: {},

        initialize (options) {
            this._super(options);
        },

        render () {
            this.$el.html(this.template(/*your data*/));
            this._super();
        }
    });
});

```


<!--DOC_END-->
