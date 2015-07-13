# Meteoric-Mobile-Starter-Project
A full-featured starter project for a tabbed mobile app with a list (the "star" section), using [Meteor](www.meteor.com) &amp; [Meteoric (Meteor-Ionic)](https://github.com/meteoric/meteor-ionic).  I've used the [Meteor Device Detection package](https://github.com/mystor/meteor-device-detection) and extensive dynamic templating to create alternate views for non-mobile screens, which sometimes require separate logic.

Check out the demo here: http://meteoric-starter.meteor.com/

To use, clone the repo, start `meteor`, and navigate to `localhost:3000`.  To check it out as an iPhone or Android app, just do `meteor add-platform ios` (or `android`), then `meteor run ios-device -p <local port>`.

## Requires:
- anti:fake                 Random text and data generator (for demonstration/prototyping)
- fourseven:scss            Style with attitude. Sass and SCSS support for Meteor.js
- iron:router               Routing specifically designed for Meteor
- meteoric:ionic            Ionic components for Meteor. No Angular!
- meteoric:ionic-sass       Ionic's CSS Framework in SASS and bundled for Meteor.
- meteoric:ionicons-sass    Ionic's Ionicons library in SASS and bundled for Meteor.
- mystor:device-detection   Client-Side Device Type Detection & Template Switching with Optional Meteor-Router Support
