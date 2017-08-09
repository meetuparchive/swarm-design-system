---
layout: layout_subnav.hbs
collection: Design
title: Forms
order: 10
---

# Forms
Forms are provided for users to add or edit information. The design system provides a variety of input types to allow users to submit data quickly using a familiar interface. By default, form inputs have variations that indicate thier status (e.g.: error, disabled, focused, hovered, etc).

## General guidelines
* Forms should support a summary of errors
* Required form elements should be clearly marked (or implicitly understood)
* Don't override user agent styling too much
* When grouping sets of inputs (e.g.: lists of checkbox or radio options), make sure to provide a clear label that set of inputs
* Form elements needs space for hint/error text (like char counters)
* Don't remove `:focus` indication from inputs

---------------------------------------

## Text inputs
Text inputs allow users to interact with or input text data. Typically appear in forms or as a searching interface.

* [TextInput](https://meetup.github.io/meetup-web-components/?selectedKind=TextInput&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) (Single-line): For a text input that expects short content, use a single-line text input.
* [Textarea](https://meetup.github.io/meetup-web-components/?selectedKind=Textarea&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) (Multi-line): For a text input that expects longform content, use a multi-line text input.
* [NumberInput](https://meetup.github.io/meetup-web-components/?selectedKind=NumberInput&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) (Numeric values): For an input that expects a number.

### Best practices
* Labels should be provided for each input. If a visible label doesn't make sense, at least supply a label that is read aloud to screen readers.
	- _Do/don't example goes here_

* Labels should be stacked on top of inputs. This layout is better for readability and clarity.
	- _Do/don't example goes here_

* Placeholder text should not be used as a label. Placeholder text is best used to let people know how they might use the input (e.g.: 'Search members') or to show an example of what kind of text the input expects (e.g.: 'The Seattle Design Systems Meetup')
	- _Do/don't example goes here_

* Avoid segmenting inputs for single values (phone numbers, for example, should be a single field)
	- _Do/don't example goes here_

For more information about text inputs, check out the [TextInput](https://meetup.github.io/meetup-web-components/?selectedKind=TextInput&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel), [Textarea](https://meetup.github.io/meetup-web-components/?selectedKind=Textarea&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel), and [NumberInput](https://meetup.github.io/meetup-web-components/?selectedKind=NumberInput&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) examples in [meetup-web-components](https://github.com/meetup/meetup-web-components/).

---------------------------------------

## Checkboxes
Checkboxes are used to indicate if something is true or false or to indicate selection. Checkboxes allow the selection of multiple options from a set.
If [Checkbox](https://meetup.github.io/meetup-web-components/?selectedKind=Checkbox&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) doesn't suit your needs, also check out [TogglePills](https://meetup.github.io/meetup-web-components/?selectedKind=TogglePill&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) or feel free to design your own toggle referencing the [withToggleControl component](https://meetup.github.io/meetup-web-components/?selectedKind=withToggleControl&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) (e.g.: the 'like' action on comments uses `withToggleControl`).

### Best practices
* Each checkbox should work independently of any other checkboxes in the form, and toggling a checkbox should only affect _that_ checkbox's status unless you're designing an interface for a user to make a batch selection (e.g.: select all members).
* Avoid styling checkbox elements to look like native mobile app switches. This treathmen should be avoided for two reasons: 1. Native apps often saves the user's input instantly, and most of our flows on the web don't save the a user's input until a form is submitted; 2. The "switch" metaphor makes more sense for touch-only interfaces
	- _Do/don't example goes here_

For more information about date and time pickers, check out the [Checkbox](https://meetup.github.io/meetup-web-components/?selectedKind=Checkbox&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) example in [meetup-web-components](https://github.com/meetup/meetup-web-components/).

---------------------------------------

## Radio buttons (DOES NOT YET EXIST)
Radio buttons allow the selection of a single option from a set. If multiple selection is needed, use a [Checkbox](https://meetup.github.io/meetup-web-components/?selectedKind=Checkbox&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel).

### Best practices
* For a large number of items, use a [Select input](https://meetup.github.io/meetup-web-components/?selectedKind=SelectInput&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) instead
	- _Do/don't example goes here_
* Avoid using a [Radio input]() for a single field
	- _Do/don't example goes here_
* If a user is allowed to select none of the options, provide an option for the user to select none. This is necessary because once a Radio button is toggled on, it cannot be toggled off without the user making a new selection.
	- _Do/don't example goes here_

---------------------------------------

## Select input
Select inputs allow the selection of a single option from a set, and are useful for saving space in the UI.

### Best practices
* If a default value doesn't make sense, use an empty placeholder option.
	- _Do/don't example goes here_
* For small sets of options, consider using a set of [Radio inputs]() or [Checkbox inputs](https://meetup.github.io/meetup-web-components/?selectedKind=Checkbox&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel)
	- _Do/don't example goes here_

---------------------------------------

## Date and time picker
Date and time pickers are provided as a shortcut for users to select a date or a time instead of having to type one in manually. When designing with a date or time picker, refer to our [time and date content guidelines](/content/timeanddate.html).

### Best practices:
* When using default values, pick a default that make sense in the given context
	- _Do/don't example goes here - event create with "Today" vs 2 weeks from now_
* Don't use a custom date-picking or time-picking interface on mobile web. Instead, let the user retain access to their device's native date or time control.
	- _Do/don't example goes here_

For more information about date and time pickers, check out the [DateTimePicker](https://meetup.github.io/meetup-web-components/?selectedKind=DateTimePicker&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel)
