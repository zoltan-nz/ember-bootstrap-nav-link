# Ember-bootstrap-nav-link

[![Build Status](https://travis-ci.org/zoltan-nz/ember-bootstrap-nav-link.svg?branch=master)](https://travis-ci.org/zoltan-nz/ember-bootstrap-nav-link)

* Insert Bootstrap 3 compatible link in navigation bars.
* Compatible with Ember 3.12 or above. (Use version `0.1.5` for Ember v3.11 or below.)
* `data-toggle` and `data-target` attribute binding. (@fdlane)

Manage active state properly in bootstrap navigation bar.

Collapse navbar when nav-link clicked.


Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v3.12 or above
* Node.js v12 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-bootstrap-nav-link
```

## Usage

Simple navbar:

```html
<ul class="nav navbar-nav">
  <NavLinkTo @route="index">Home{{/NavLinkTo}}
  <NavLinkTo @route="about">About{{/NavLinkTo}}
  <NavLinkTo @route="contact">Contact{{/NavLinkTo}}
</ul>
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


Learn more about this plugin in [Ember.js tutorial](http://yoember.com)

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).

[Ember](http://yoember.com) | [Ember.js](http://yoember.com) | [Tutorial](http://yoember.com)
