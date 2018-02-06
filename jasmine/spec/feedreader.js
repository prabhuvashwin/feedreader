/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).toBeGreaterThan(0);
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('url defined for each feed', function() {
             for (let i = 0; i < allFeeds.length; i++) {
                 expect(allFeeds[i].url).toBeDefined();
                 expect(allFeeds[i].url.length).toBeGreaterThan(0);
             }

         });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name defined for each feed', function() {
             for (let i = 0; i < allFeeds.length; i++) {
                 expect(allFeeds[i].name).toBeDefined();
                 expect(allFeeds[i].name.length).toBeGreaterThan(0);
             }
         });

    });


    /* This test suite named "The menu" checks for the desired properties
     * if the menu.
     */
    describe('The menu', function() {

        /* This test that ensures the menu element is
         * hidden by default. The hidden property of the menu
         * element is achieved by adding menu-hidden class to the
         * body element. So in this test, we need to check whether the
         * body element has menu-hidden class
         */
        it ('menu element hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

         /* This test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again. To test this
          * functionality, we need to simulate the click of the element
          * programmatically. This is done using jQuery's trigger function
          */
         it('menu changes visibility when menu icon is clicked', function() {
             $('.menu-icon-link>.icon-list').trigger('click');
             expect($('body').hasClass('menu-hidden')).toBeFalsy();

             $('.menu-icon-link>.icon-list').trigger('click');
             expect($('body').hasClass('menu-hidden')).toBeTruthy();
         });
    });

    /* This test suite named "Initial Entries" tests the loadFeed
     * functionality of the feedreader
     */
    describe("Initial Entries", function() {
        /* This test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('Async: loadFeed loads the entry element into feed container', function() {
            expect($('.feed .entry').children().length).toBeGreaterThan(0);
        });
    });


    /* This test suite named "New Feed Selection" which tests for the
     * changing functionality in loadFeed
     */
    describe("New Feed Selection", function() {
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous. Here, we load the feeds 1
         * and 2 and store it in two variables before and after. Expectation
         * is that before and after will not have the same content
         */
        let before = null, after = null;
        beforeEach(function(done) {
            loadFeed(1, function() {
                before = $('.feed').html();
                loadFeed(2, function() {
                    after = $('.feed').html();
                    done();
                });
            });


        });

        it('Async: content changes after feed is loaded', function() {
            expect(after).not.toEqual(before);
        });

    });
}());
