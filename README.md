# booty-copy
Booty-copy is a JavaScript, that let you easily copy the text of an html element by clicking an (other) html element like a button, link or icon.

## Usage
Include the JS file
```HTML
<script src="booty-copy.min.js"></script>
```
Elements, that should copy some content by being clicked, must have the class "booty-copy". You can optionally define a target element by setting the data attribute "data-booty-copy-target-id". The contained text of the target element will be copied, if a user clicks the booty-copy element.
If you do not specify a target the text of the parent dom element will be copied.

Booty-copy also works with optionally added elements.

Demo: https://htmlpreview.github.io/?https://github.com/D0nQ/booty-copy/blob/master/demo.html

### Copy the text of a html element by defining a target
```HTML
<div>
    <div>
        <p id="some-text">Hello World #1</p>
    </div>
    <div>
        <button class="booty-copy" data-booty-copy-target-id="some-text">
          copy content of some-text
        </button>
    </div>
</div>
```
After clicking "copy content of some-text" the contained text of #some-text will be copied to the clipboard.

### Copy the text of a html element without defining a target
```HTML
<div>
    Hello World #2
    <button class="booty-copy">
        copy
    </button>
</div>
```
After clicking "copy" the contained text of its parent will be copied to the clipboard.

## License
The MIT License (MIT)

Copyright (c) 2022 Rudolf Proske

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
