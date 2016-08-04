riot.tag2('hello-world', '<h3>{opts.title}</h3> <input name="helloInput" placeholder="Enter your name"> <button class="myButton" onclick="{sayHello}">Say {opts.title}</button> <h4>{message}</h4>', '.myButton { background-color:#44c767; -moz-border-radius:18px; -webkit-border-radius:18px; border-radius:18px; border:1px solid #18ab29; display:inline-block; cursor:pointer; color:#ffffff; font-family:Arial; font-size:17px; padding:6px 21px; text-decoration:none; text-shadow:0px 1px 0px #2f6627; } .myButton:hover { background-color:#5cbf2a; } .myButton:active:enabled { position:relative; top:1px; cursor: pointer; }', '', function(opts) {
'use strict';

var _this = this;

// <script> tag is required if we provide style too
this.message = '';

this.sayHello = function (e) {
  if (_this.message.length > 0) {
    _this.message = '';
  }
  if (_this.helloInput.value) {
    _this.message = _this.opts.say(_this.helloInput.value);
  } else {
    _this.message = '';
  }
};
});