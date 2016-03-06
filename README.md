# Ember-bootstrap-nav-link

[![Build Status](https://travis-ci.org/zoltan-nz/ember-bootstrap-nav-link.svg?branch=master)](https://travis-ci.org/zoltan-nz/ember-bootstrap-nav-link)

* Insert Bootstrap 3 compatible link in navigation bars.
* Compatible with Ember 2.1 or greater.
* `data-toggle` and `data-target` attribute binding. (@fdlane)

Manage active state properly in bootstrap navigation bar.

Collapse navbar when nav-link clicked.

## Installation

```
ember install ember-bootstrap-nav-link
```

## Usage

Simple navbar:

```html
<ul class="nav navbar-nav">
  {{#nav-link-to 'index'}}Home{{/nav-link-to}}
  {{#nav-link-to 'about'}}About{{/nav-link-to}}
  {{#nav-link-to 'contact'}}Contact{{/nav-link-to}}
</ul>
```

Collapsable navbar with `data-toggle` and `data-target`:

```html
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
              data-target="#main-nav-bar" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      {{#link-to 'index' class="navbar-brand"}}Map-touch{{/link-to}}
    </div>

    <div class="collapse navbar-collapse" id="main-nav-bar">
      <ul class="nav navbar-nav">
        {{#nav-link-to 'index' data-toggle='collapse' data-target='#main-nav-bar.in'}}Home{{/nav-link-to}}
        {{#nav-link-to 'map' data-toggle='collapse' data-target='#main-nav-bar.in'}}Map{{/nav-link-to}}
        </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
```

**Note**: Don't forget the `.in` selector in `data-target` in the component line, because we would like to close the menu only when it is open. If you miss the `.in`, the menu in desktop mode would try to collapse which would cause a strange flickering.
