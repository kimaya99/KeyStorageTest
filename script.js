$(document).ready(function() {
  com.fc.CustomEventListeners = {};
  // LIBRARIES CODE
  // PROJECT CODE
  var _that = this;
  // Block#: )ibyg((+`;}C;`45|b%g
  function on_Button_click(e) {
    try {
      // Block#: Y-roez2]~y5ez*;_t3C/
      com.fc.JavaScriptDistLib.Storage.add('test', btoa(com.fc.JavaScriptDistLib.Textbox.getProperty["Text"]("EditBox"))) // Block#: PM5j~L]OKuS^7)i3/pG^
      com.fc.JavaScriptDistLib.Storage.remove('test')
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button"]').on('click', on_Button_click);
  // Block#: 35m72d/[vC9twh|Li,D]
  function on_Button2_click(e) {
    try {
      // Block#: _qzicJG^4f(aS~A3K@jE
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("Label2", (atob(com.fc.JavaScriptDistLib.Storage.getValue('test'))));
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="Button2"]').on('click', on_Button2_click);
  $('[obj-name="MainScreen"]').show();
});
// Generated by snapp
// 139181-953785-616055-36731
