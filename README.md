# Ember-bootstrap-nav-link

* Insert Bootstrap 3 compatible link in navigation bars.
* Compatible with Ember 2.1 or greater.

Manage active state properly in bootstrap navigation bar.

## Installation

```
ember install ember-bootstrap-nav-link
```

## Usage

```
<ul class="nav navbar-nav">
  {{#nav-link-to 'index'}}Home{{/nav-link-to}}
  {{#nav-link-to 'about'}}About{{/nav-link-to}}
  {{#nav-link-to 'contact'}}Contact{{/nav-link-to}}
</ul>
```
