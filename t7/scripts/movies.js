// Load the application once the DOM is ready, using `jQuery.ready`:
$(function(){

  // Movie Model
  // ----------

  // Our basic **Movie** model has `title`, `order`, and `done` attributes.
  var Movie = Backbone.Model.extend({

    // Default attributes for the movie item.
    defaults: function() {
      return {
        title: "untitled",
		year: "no year",
        order: Movies.nextOrder(),
        done: false
      };
    },

    // Toggle the `done` state of this movie item.
    toggle: function() {
      this.save({done: !this.get("done")});
    }

  });

  // Movie Collection
  // ---------------

  // The collection of movies is backed by *localStorage* instead of a remote
  // server.
  var MovieList = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: Movie,

    // Save all of the movie items under the `"movies-backbone"` namespace.
    localStorage: new Backbone.LocalStorage("movies-backbone"),

    // Filter down the list of all movie items that are finished.
    done: function() {
      return this.where({done: true});
    },

    // Filter down the list to only movie items that are still not finished.
    remaining: function() {
      return this.without.apply(this, this.done());
    },

    // We keep the Movies in sequential order, despite being saved by unordered
    // GUID in the database. This generates the next order number for new items.
    nextOrder: function() {
      if (!this.length) return 1;
      return this.last().get('order') + 1;
    },

    // Movies are sorted by their original insertion order.            cambiar por year
    comparator: 'order'

  });

  // Create our global collection of **Movies**.
  var Movies = new MovieList;

  // Movie Item View
  // --------------

  // The DOM element for a movie item...
  var MovieView = Backbone.View.extend({

    //... is a list tag.
    tagName:  "li",

    // Cache the template function for a single item.
    template: _.template($('#item-template').html()),

    // The DOM events specific to an item.
    events: {
      "click .toggle"   : "toggleDone",
      "dblclick .view"  : "edit",
      "click a.destroy" : "clear",
      "keypress .edit"  : "updateOnEnter",
      "blur .edit"      : "close"
    },

    // The MovieView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Movie** and a **MovieView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
    },

    // Re-render the titles of the movie item.
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      this.$el.toggleClass('done', this.model.get('done'));
      this.input = this.$('.edit');
      return this;
    },

    // Toggle the `"done"` state of the model.
    toggleDone: function() {
      this.model.toggle();
    },

    // Switch this view into `"editing"` mode, displaying the input field.
    edit: function() {
      this.$el.addClass("editing");
      this.input.focus();
    },

    // Close the `"editing"` mode, saving changes to the movie.
    close: function() {
      var value = this.input.val();
      if (!value) {
        this.clear();
      } else {
        this.model.save({title: value});
        this.$el.removeClass("editing");
      }
    },

    // If you hit `enter`, we're through editing the item.
    updateOnEnter: function(e) {
      if (e.keyCode == 13) this.close();
    },

    // Remove the item, destroy the model.
    clear: function() {
      this.model.destroy();
    }

  });

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  var AppView = Backbone.View.extend({

    // Instead of generating a new element, bind to the existing skeleton of
    // the App already present in the HTML.
    el: $("#movieapp"),

    // Our template for the line of statistics at the bottom of the app.
    statsTemplate: _.template($('#stats-template').html()),

    // Delegated events for creating new items, and clearing completed ones.
    events: {
      "keypress #new-movie":  "createOnEnter",
      "click #clear-completed": "clearCompleted",
      "click #toggle-all": "toggleAllComplete"
    },

    // At initialization we bind to the relevant events on the `Movies`
    // collection, when items are added or changed. Kick things off by
    // loading any preexisting movies that might be saved in *localStorage*.
    initialize: function() {

      this.input = this.$("#new-movie");
      this.allCheckbox = this.$("#toggle-all")[0];

      this.listenTo(Movies, 'add', this.addOne);
      this.listenTo(Movies, 'reset', this.addAll);
      this.listenTo(Movies, 'all', this.render);

      this.footer = this.$('footer');
      this.main = $('#main');

      Movies.fetch();
    },

    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function() {
      var done = Movies.done().length;
      var remaining = Movies.remaining().length;

      if (Movies.length) {
        this.main.show();
        this.footer.show();
        this.footer.html(this.statsTemplate({done: done, remaining: remaining}));
      } else {
        this.main.hide();
        this.footer.hide();
      }

      this.allCheckbox.checked = !remaining;
    },

    // Add a single movie item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addOne: function(movie) {
      var view = new MovieView({model: movie});
      this.$("#movie-list").append(view.render().el);
    },

    // Add all items in the **Movies** collection at once.
    addAll: function() {
      Movies.each(this.addOne, this);
    },

    // If you hit return in the main input field, create new **Movie** model,
    // persisting it to *localStorage*.
    createOnEnter: function(e) {
      if (e.keyCode != 13) return;
      if (!this.input.val()) return;

      Movies.create({title: this.input.val()});
      this.input.val('');
    },

    // Clear all done movie items, destroying their models.
    clearCompleted: function() {
      _.invoke(Movies.done(), 'destroy');
      return false;
    },

    toggleAllComplete: function () {
      var done = this.allCheckbox.checked;
      Movies.each(function (movie) { movie.save({'done': done}); });
    }

  });

  // Finally, we kick things off by creating the **App**.
  var App = new AppView;

});
