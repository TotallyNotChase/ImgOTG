# Documentation
Let's discuss briefly about the files:-
* `manifest.json` : Currently used scripts/html files are declared here, the only permission declared here currently is **activeTab**.
* `popup.html` : This is the `default_popup` under `browser_action`, the popup is designed here
* `popup.js` : Handles any events invoked in the **popup**
* `main.js` : This file should be used for any and all image manipulation commands

## The Source Code behind `popup`
The style CSS is declared at the top and the current CSS achieves the following:
* Declare the popup body size
* Set up the top title
* Set up the div that holds `rotator buttons` within
* Set up the `rotator_button`(s) themselves to each be symmetrically in the left and right corners of the popup respectively
The following HTML is only used to create the Title at top and the buttons.

## The Javascript Code behind `popup`
The `popup.js` file sends a message to activeTab according to the button that is clicked. This button invokes a function in `main.js`

## The Javascript Code behind `main.js`
The `main.js` file handles all **image manipulation** events. Currently, this either rotates the image on tab clockwise or anticlockwise (90 degrees) according the message received.
### Rotation
An angle is first declared to be 0. Every time the image is rotated 90 is added to the angle. The modulus value of angle with respect to 360 (i.e angle%360) is used to get the angle to put in `transform: rotate()`.  
