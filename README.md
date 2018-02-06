# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


# Test cases implemented

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. In test suit `RSS Feeds`, write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
2. In test suit `RSS Feeds`, write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
3. Write a new test suite named `"The menu"`.
4. In test suite `The menu`, write a test that ensures the menu element is hidden by default.
5. In test suite `The menu`, Write a test that ensures the menu changes visibility when the menu icon is clicked.
6. Write a test suite named `"Initial Entries"`.
7. In test suite `Initial Entries`, write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
8. Write a test suite named `"New Feed Selection"`.
9. In test suite `New Feed Selection`, write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
10. No test should be dependent on the results of another.
11. Callbacks should be used to ensure that feeds are loaded before they are tested.
12. When complete - all of your tests should pass.

# How to run this project
1. Download or fork this application
2. Open index.html in a browser
