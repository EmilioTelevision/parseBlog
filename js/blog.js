Parse.initialize("rdoRfvEuXA8pGuDFHsPjnP4LdnluN4KM8ZOap07N", "qhhROpIuGhaNidCWbupvvECLjysQXPUoD76bjF6u");

var Blog = Parse.Object.extend("Blog");

var Blogs = Parse.Collection.extend({
    model: Blog
});

var blogs = new Blogs();

var BlogsView = Parse.View.extend({
	template: Handlebars.compile($('#blogs-tpl').html()),
	render: function() {
		var collection = { blog: this.collection.toJSON() };
		this.$el.html(this.template(collection));
	}
});

blogs.fetch({
    success: function(blogs) {
        var blogsView = new BlogsView({ collection: blogs });
	    blogsView.render();
	    $('.main-container').html(blogsView.el);
    },
    error: function(blogs, error) {
        console.log(error);
    }
});