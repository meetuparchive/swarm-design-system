---
collection: Design
title: Buttons
order: 2
---

# Buttons
Buttons are a simple way to show calls to action. They can be used for triggering an action on a screen, or even for navigating to a new screen.

Button style              |Description                           |Importance
--------------------------|--------------------------------------|----------
<button className="button button--primary">Primary</button>|Used to highlight the most important action on a screen. Not intended to be used more than once on a screen/modal/section.|Very high
<button className="button">Secondary</button>|"Used to call attention to an action. Should not be used with Primary buttons, as they're both visually heavy"|High
<button className="button button--neutral">Neutral</button>|The standard button for most use cases. Other styles are available for buttons that need more visual weight|Medium
<button className="button button--bordered">Bordered</button>|Sometimes used in place of a Neutral button on shaded backgrounds to maintain the appropriate visual weight|Medium
<button className="button button--reset">Reset</button>|"Behaves like a button in the browser, but just looks like regular text or icons"|Low

---------------------------------------

## Best practices - general
When a button is an action, label it with clear actionable verbs. e.g.: "Schedule a Meetup", not "New Meetup"

Avoid having too many buttons, especially **Secondary** or **Primary** buttons, on the screen - it can be overwhelming

## Best practices - grouping
If one of the buttons in the group is the most important or common action, make it a Secondary or Primary button

Avoid having more than one Secondary or Primary button in a group

Don't pair a Secondary button with a Primary button

Buttons should be grouped when they're related actions

Avoid grouping too many buttons together - especially to account for smaller screen widths
