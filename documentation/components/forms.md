---
layout: documentation
title: Forms
description: Documentation and examples for forms.
group: components
toc: true
---


## Variables

| Name  | Type  | Value |
| ----- | ----- | ----- |
| `$input-padding`                    | <small>padding</small> | `.375rem .75rem` |
| `$input-border`                     | <small>border</small> | `$border-width solid $border-color` |
| `$input-radius`                     | <small>radius</small> | `$radius` |
| `$input-box-shadow`                 | <small>shadow</small> | `inset 0 1px 2px rgba($black, .075)` |
| `$input-placeholder-color`          | <small>color</small> | <span class="small-box" style="background:#6c757d"></span> `$gray-600` |
| `$input-disabled-background`        | <small>color</small> | <span class="small-box" style="background:#e9ecef"></span> `$gray-200` |
| `$input-transition`                 | <small>transition</small> | `border-color $speed ease-in-out, box-shadow $speed ease-in-out` |
| `$disabled-color`                   | <small>color</small> | <span class="small-box" style="background:#838f9b"></span> `darken($gray-500, 15%)`|
| `$help-font-size`                   | <small>font-size</small> | `.75rem` |
| `$help-margin-top`                  | <small>margin</small> | `.25rem` |
| `$select-height`                    | <small>unitless</small> | `calc(2.25rem + 2px)` |
| `$custom-select-padding-x`          | <small>padding</small> | `.75rem` |
| `$custom-select-indicator-padding`  | <small>unitless</small> | `1rem` |
| `$custom-select-indicator-color`    | <small>color</small> | <span class="small-box" style="background:#343a40"></span> `$gray-800` |
| `$custom-select-indicator`          | <small>unitless</small> | `icon_url` |
| `$custom-select-background-size`    | <small>size</small> | `8px 10px` |
| `$select-background`                | <small>color</small> | `transparent $custom-select-indicator no-repeat right $custom-select-padding-x center` |
| `$valid-color`                      | <small>color</small> | <span class="small-box" style="background:#28a745"></span> `$green`|
| `$invalid-color`                    | <small>color</small> | <span class="small-box" style="background:#dc3545"></span> `$red`|


## Form group

The `form-group` class expand the elements.

{% capture example %}
<form>
  <div class="form-group">
    <label>User:</label>
    <input type="text" placeholder="User">
    <span class="help">This is a help text</span>
  </div>
  <div class="form-group">
    <label>Password:</label>
    <input type="password" placeholder="Password">
  </div>  
  <div class="form-group">
    <label class="checkbox">
      <input type="checkbox">
      Check me out
    </label>
  </div>
  <button type="submit">Sign in</button>
</form>
{% endcapture %}
{% include example.html content=example %}


## Form elements

{% capture example %}
<form>
  <div class="form-group">
    <label>Input</label>
    <input type="text">
    <span class="help">This is a help text</span>
  </div>
  <div class="form-group">
    <label>Select</label>
    <select>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label>Multiple select</label>
    <select multiple>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div class="form-group">
    <label>Textarea</label>
    <textarea></textarea>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}


### Horizontal checkbox and radios

{% capture example %}
<form>
  <div class="form-group">
    <label class="checkbox">
      <input type="checkbox" name="horizotal-checkbox">
      First checkbox
    </label>
    <label class="checkbox">
      <input type="checkbox" name="horizotal-checkbox">
      Second checkbox
    </label>
    <label class="checkbox disabled">
      <input type="checkbox" name="horizotal-checkbox" disabled>
      Third checkbox
    </label>
  </div>
  <div class="form-group">
    <label class="radio">
      <input type="radio" name="horizotal-radio">
      First radio
    </label>
    <label class="radio">
      <input type="radio" name="horizotal-radio">
      Second radio
    </label>
    <label class="radio disabled">
      <input type="radio" name="horizotal-radio" disabled>
      Third radio
    </label>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}


### Vertical checkbox and radios

{% capture example %}
<form>
  <div class="form-group">
    <label class="checkbox-expanded">
      <input type="checkbox" name="vertical-checkbox">
      First checkbox
    </label>
    <label class="checkbox-expanded">
      <input type="checkbox" name="vertical-checkbox">
      Second checkbox
    </label>
    <label class="checkbox-expanded disabled">
      <input type="checkbox" name="vertical-checkbox" disabled>
      Third checkbox
    </label>
  </div>
  <div class="form-group">
    <label class="radio-expanded">
      <input type="radio" name="vertical-radio">
      First radio
    </label>
    <label class="radio-expanded">
      <input type="radio" name="vertical-radio">
      Second radio
    </label>
    <label class="radio-expanded disabled">
      <input type="radio" name="vertical-radio" disabled>
      Third radio
    </label>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}


### File input

{% capture example %}
<form>
  <div class="form-group">
    <input type="file">
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}


### Range input

{% capture example %}
<form>
  <div class="form-group">
    <input type="range">
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}


### Read only

{% capture example %}
<form>
  <div class="form-group">
    <input type="text" placeholder="Read only here" readonly>
  </div>
</form>
{% endcapture %}
{% include example.html content=example %}


### Disabled elements

On `checkbox` and `radio` is necessary to use a `disabled` class in the `label` tag.

{% capture example %}
<form>
  <div class="form-group">
    <input type="text" placeholder="Disabled here" disabled>
  </div>
  <div class="form-group">
    <select disabled>
      <option>Disabled select</option>
      <option>...</option>
    </select>
  </div>
  <div class="form-group">
    <label class="checkbox disabled">
      <input type="checkbox" disabled>
      Checkbox
    </label>
  </div>
  <div class="form-group">
    <label class="radio disabled">
      <input type="radio" disabled>
      Radio
    </label>
  </div>
  <button type="button" disabled>Disabled</button>
</form>
{% endcapture %}
{% include example.html content=example %}


## Form columns

With `form-columns` class you can use the column grid classes (`column` or `column-of-x`), depending on the situation.

For example:
* On the first row is used the class `column`, because is used only 2 columns with the same width size.
* On the second row is not neccesary a column class, because is only a `form-group`.
* On the thirth row is used the `column-of-x` class because is neccesary use diferent size of columns.

NOTE: The same number of columns of the original grid is used here too (12 columns).

{% capture example %}
<form>
  <div class="form-columns">
    <div class="column form-group">
      <label>Name:</label>
      <input type="text">
    </div>
    <div class="column form-group">
      <label>Last Name:</label>
      <input type="text">
    </div>
  </div>
  <div class="form-group">
    <label>Address:</label>
    <input type="text">
    <span class="help">Example: 123 Main St.</span>
  </div>
  <div class="form-columns">
    <div class="column-of-6 form-group">
      <label>City:</label>
      <input type="text">
    </div>
    <div class="column-of-4 form-group">
      <label>State:</label>
      <select>
        <option default>Choose state</option>
        <option>...</option>
      </select>
    </div>
    <div class="column-of-2 form-group">
      <label>Zip:</label>
      <input type="number">
    </div>
  </div>
  <div class="form-group">
    <label class="checkbox">
      <input type="checkbox">
      I agree with the <a href="#">terms and conditions</a>
    </label>
  </div>
  <button type="submit">Submit</button>
</form>
{% endcapture %}
{% include example.html content=example %}


### Two columns form

{% capture example %}
<form>
  <div class="form-columns">
    <div class="column-of-2 form-group">
      <label>Name:</label>
    </div>
    <div class="column form-group">
      <input type="text">
    </div>
  </div>
  <div class="form-columns">
    <div class="column-of-2 form-group">
      <label>Last Name:</label>
    </div>
    <div class="column form-group">
      <input type="text">
    </div>
  </div>
  <div class="form-columns">
    <div class="column-of-2 form-group">
      <label>Address:</label>
    </div>
    <div class="column form-group">
      <input type="text">
      <span class="help">Example: 123 Main St.</span>
    </div>
  </div>
  <div class="form-columns">
    <div class="column-of-2 form-group">
      <label>Checkbox:</label>
    </div>
    <div class="column form-group">
      <label class="checkbox">
        <input type="checkbox">
        I agree
      </label>
    </div>
  </div>
  <button type="submit">Submit</button>
</form>
{% endcapture %}
{% include example.html content=example %}


## Validations

{% capture example %}
<form>
  <div class="form-columns">
    <div class="column form-group">
      <label>Name:</label>
      <input class="valid" type="text" value="Giovanni">
      <span class="valid-feedback">Looks good!</span>
    </div>
    <div class="column form-group">
      <label>Last Name:</label>
      <input class="valid" type="text" value="Mendoza">
      <span class="valid-feedback">Looks good!</span>
    </div>
  </div>
  <div class="form-columns">
    <div class="column-of-6 form-group">
      <label>City:</label>
      <input class="invalid" type="text">
      <span class="invalid-feedback">Please type the city</span>
    </div>
    <div class="column-of-4 form-group">
      <label>State:</label>
      <select class="invalid">
        <option default>Choose state</option>
        <option>...</option>
      </select>
      <span class="invalid-feedback">Please select the state</span>
    </div>
    <div class="column-of-2 form-group">
      <label>Zip:</label>
      <input class="invalid" type="number">
      <span class="invalid-feedback">Please type the zip</span>
    </div>
  </div>
  <div class="form-group">
    <label class="checkbox invalid">
      <input type="checkbox">
      I agree with the <a href="#">terms and conditions</a>
      <span class="invalid-feedback">You must agree before submitting</span>
    </label>
  </div>
  <button type="submit">Submit</button>
</form>
{% endcapture %}
{% include example.html content=example %}