# Ember-bootstrap-nav-link

https://travis-ci.org/zoltan-nz/ember-bootstrap-nav-link.svg?branch=master

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
        {{#nav-link-to 'index' data-toggle='collapse' data-target='#main-nav-bar'}}Home{{/nav-link-to}}
        {{#nav-link-to 'map' data-toggle='collapse' data-target='#main-nav-bar'}}Map{{/nav-link-to}}
        </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
```
