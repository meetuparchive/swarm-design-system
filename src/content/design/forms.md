---
layout: layout_subnav.hbs
collection: Design
title: Forms
order: 10
---

# Forms
Inputting any type of information should be clear and to the point. We like to add guidance in context—inside or outside the field—to help people feel supported.

## General guidelines
* Break large complex forms into smaller simpler patterns
* Form inputs should be tap-friendly
* When possible, forms should support a summary of errors instead of a generic (and unhelpful) error message
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
Labels should be provided for each input. If a visible label doesn't make sense, at least supply a label that is read aloud to screen readers.
![Labeled input example](/assets/contentImages/dosAndDonts/forms/forms_labelInputs.png "Labeled input example")

Labels should be stacked on top of inputs. This layout is better for readability and clarity.
![Stacked label example](/assets/contentImages/dosAndDonts/forms/forms_labelInputsAbove.png "Stacked label example")

Placeholder text should not be used as a label. Placeholder text is best used to let people know how they might use the input (e.g.: 'Search members') or to show an example of what kind of text the input expects (e.g.: 'The Seattle Design Systems Meetup')
![Don't use placeholder as label example](/assets/contentImages/dosAndDonts/forms/forms_noPlaceholderAsLabel.png "Don't use placeholder as label example")

Avoid segmenting inputs for single values (phone numbers, for example, should be a single field)
![Don't split inputs example](/assets/contentImages/dosAndDonts/forms/forms_noSplitInputs.png "Don't split inputs example")

For more information about text inputs, check out the [TextInput](https://meetup.github.io/meetup-web-components/?selectedKind=TextInput&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel), [Textarea](https://meetup.github.io/meetup-web-components/?selectedKind=Textarea&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel), and [NumberInput](https://meetup.github.io/meetup-web-components/?selectedKind=NumberInput&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) examples in [meetup-web-components](https://github.com/meetup/meetup-web-components/).

---------------------------------------

## Checkboxes
Checkboxes are used to indicate if something is true or false or to indicate selection. Checkboxes allow the selection of multiple options from a set.
If [Checkbox](https://meetup.github.io/meetup-web-components/?selectedKind=Checkbox&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) doesn't suit your needs, also check out [TogglePills](https://meetup.github.io/meetup-web-components/?selectedKind=TogglePill&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) or feel free to design your own toggle referencing the [withToggleControl component](https://meetup.github.io/meetup-web-components/?selectedKind=withToggleControl&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) (e.g.: the 'like' action on comments uses `withToggleControl`).

### Best practices
Each checkbox should work independently of any other checkboxes in the form, and toggling a checkbox should only affect _that_ checkbox's status unless you're designing an interface for a user to make a batch selection (e.g.: select all members).

---------------------------------------

## Radio buttons
Radio buttons allow the selection of a single option from a set. If multiple selection is needed, use a [Checkbox](https://meetup.github.io/meetup-web-components/?selectedKind=Checkbox&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel).

### Best practices

For a large number of items, use a [Select input](https://meetup.github.io/meetup-web-components/?selectedKind=SelectInput&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) instead
![Use dropdown select input for many options](/assets/contentImages/dosAndDonts/forms/forms_useSelectForMany.png "Use dropdown select input for many options")

Don't use a [Radio input](https://meetup.github.io/meetup-web-components/?knob-checked=true&knob-className=&knob-label=This%20is%20a%20radio&knob-Direction=row&knob-Selected=one&selectedKind=RadioButtonGroup&selectedStory=Basic%20usage&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) for a single field. Radio buttons are for groups
![Radios must be in groups](/assets/contentImages/dosAndDonts/forms/forms_noSingleRadio.png "Radios must be in groups")

If a user is allowed to select none of the options, provide an option for the user to select none. This is necessary because once a Radio button is toggled on, it cannot be toggled off without the user making a new selection.
![Provide a null option in radio groups when appropriate](/assets/contentImages/dosAndDonts/forms/forms_provideNullRadioOption.png "Provide a null option in radio groups when appropriate")

---------------------------------------

## Toggle switch
Toggle switches are used to indicate whether whether something is enabled or disabled. Toggle switches are like checkboxes, except checkboxes are for making a selection between options, and the the toggle is for turning an option on and off.

### Best practices
For selecting one or more out of a collection, use a set of [Checkboxes](https://meetup.github.io/meetup-web-components/?selectedKind=Checkbox&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) or [Radio inputs](https://meetup.github.io/meetup-web-components/?knob-checked=true&knob-className=&knob-label=This%20is%20a%20radio&knob-Direction=row&knob-Selected=one&selectedKind=RadioButtonGroup&selectedStory=Basic%20usage&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) instead
![Use radio or checkbox for collections](/assets/contentImages/dosAndDonts/forms/forms_avoidToggles.png "Use radio or checkbox for collections")

If a physical switch would work for the action, a toggle is okay to use.

Use toggle switches with caution, they may be misleading. Native apps often saves the user's input from a toggle switch instantly, and most of our flows on the web don't save the a user's input until a form is submitted.

Keep in mind that the "switch" metaphor makes more sense for touch-only interfaces.

For more information about toggle swtiches, check out the [Toggle Switch](https://meetup.github.io/meetup-web-components/?selectedKind=ToggleSwitch&selectedStory=Default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) example in [meetup-web-components](https://github.com/meetup/meetup-web-components/).

---------------------------------------

## Select input
Select inputs allow the selection of a single option from a set, and are useful for saving space in the UI.

### Best practices
If a default value doesn't make sense, use an empty placeholder option.
![Use a placeholder option for selects that can be null](/assets/contentImages/dosAndDonts/forms/forms_useEmptyPlaceholder.png "Use a placeholder option for selects that can be null")

For small sets of options, consider using a set of [Radio inputs](https://meetup.github.io/meetup-web-components/?knob-checked=true&knob-className=&knob-label=This%20is%20a%20radio&knob-Direction=row&knob-Selected=one&selectedKind=RadioButtonGroup&selectedStory=Basic%20usage&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) instead. It lets the user see more content at once
![Use set of radio buttons for few options](/assets/contentImages/dosAndDonts/forms/forms_useRadiosForFew.png "Use set of radio buttons for few options")

---------------------------------------

## Date and time picker
Date and time pickers are provided as a shortcut for users to select a date or a time instead of having to type one in manually. When designing with a date or time picker, refer to our [time and date content guidelines](/content/timeanddate).

### Best practices:
When using default values, pick a default that make sense in the given context. For example, it wouldn't make sense to default the date to "Today" in the event create flow

Don't use a custom date-picking or time-picking interface on mobile web. Instead, let the user retain access to their device's native date or time control.
![Use native date pickers](/assets/contentImages/dosAndDonts/forms/forms_useNativeDatePicker.png "Use native date pickers")

For more information about date and time pickers, check out the [Calendar](https://meetup.github.io/meetup-web-components/?knob-checked=true&knob-className=&knob-label=This%20is%20a%20radio&knob-Direction=row&knob-Selected=one&selectedKind=CalendarComponent&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) component, the [DateTimeLocal](https://meetup.github.io/meetup-web-components/?knob-checked=true&knob-className=&knob-label=This%20is%20a%20radio&knob-Direction=row&knob-Selected=one&selectedKind=DateTimeLocalInput&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) component, and [TimeInput](https://meetup.github.io/meetup-web-components/?knob-checked=true&knob-className=&knob-label=This%20is%20a%20radio&knob-Direction=row&knob-Selected=one&selectedKind=TimeInput&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) component
