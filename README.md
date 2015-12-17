# Ember-bootstrap-nav-link

* Insert Bootstrap 3 compatible link in navigation bars.
* Compatible with Ember 2.1 or greater.

Manage active state properly in bootstrap navigation bar.

Collapse navbar when nav-link clicked.

## Installation

```
ember install ember-bootstrap-nav-link
```

## Usage

```
<div class="collapse navbar-collapse">
  <ul class="nav navbar-nav">
    {{#nav-link-to 'index'}}Home{{/nav-link-to}}
    {{#nav-link-to 'about'}}About{{/nav-link-to}}
    {{#nav-link-to 'contact'}}Contact{{/nav-link-to}}
    {{#nav-link-to 'foo' data-toggle="collapse" data-target=".navbar-collapse.in"}}Collapse on click{{/nav-link-to}}
  </ul>
</div>
```
