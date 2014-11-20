$(function() {
 
    Parse.$ = jQuery;
 
    Parse.initialize("rdoRfvEuXA8pGuDFHsPjnP4LdnluN4KM8ZOap07N", "qhhROpIuGhaNidCWbupvvECLjysQXPUoD76bjF6u");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});