---
collection: Design
title: Flex
order: 5
---

# Flex
[Flex](https://meetup.github.io/meetup-web-components/?selectedKind=Flex&selectedStory=Row%20%28default%29&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) and [FlexItem](https://meetup.github.io/meetup-web-components/?selectedKind=FlexItem&selectedStory=Flex%20Item%20grow%20%28default%29&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) are responsible for the heavy lifting in our responsive layouts. They’re used for laying elements out horizontally or vertically. Horizontal layouts can become vertical (e.g.: right column stacking on top of left column for small viewports), and vice versa

_Flex_ and _FlexItem_ can be used for macro layout, like a main content area and a sidebar, or they can be used for laying out smaller elements, like an icon next and a text label.

See the _Flex_ and _FlexItem_ Storybook stories in [mup-web-components](https://meetup.github.io/meetup-web-components/) to preview all of the flexbox options that are controlled using props.

_Flex_ and _FlexItem_ are an abstraction of the CSS flexible box (flexbox) layout module. The concepts behind flexbox are also used in Android and iOS development, and is what Facebook’s cross-platform layout engine, Yoga, is based on.

The closest you can get to using flexbox-style layout in Sketch is using the [Autolayout plugin](https://animaapp.github.io/).

**Flex with FlexItems being used to lay out a component**
![Flex with FlexItems being used to lay out a component](/assets/contentImages/layoutDocs/components/Flex_with_FlexItems-isolated.png "Flex with FlexItems being used to lay out a component")

**Flex can re-order flex items to adapt designs for larger viewports**
![Flex can re-order flex items to adapt designs for larger viewports](/assets/contentImages/layoutDocs/components/Flex-rwdLayoutExample--simple.png "Flex can re-order flex items to adapt designs for larger viewports")

**Flex can re-order flex items to adapt designs for larger viewports**
![Flex can re-order flex items to adapt designs for larger viewports](/assets/contentImages/layoutDocs/components/Flex(macro).png "Flex can re-order flex items to adapt designs for larger viewports")

**Flex and Flex item laying out a row in a list**
![Flex and Flex item laying out a row in a list](/assets/contentImages/layoutDocs/components/Flex(micro).png "Flex and Flex item laying out a row in a list")

## Flex examples

**Event home: Page header**
![Event home: Page header](/assets/contentImages/layoutDocs/productExamples/Flex-EventHomePageHead.png "Event home: Page header")

**Event home: Comments**
![Event home: Comments](/assets/contentImages/layoutDocs/productExamples/Flex-CommentList.png "Event home: Comments")

**Event home basic info**
![Event home basic info](/assets/contentImages/layoutDocs/productExamples/Flex-EventInfo.png "Event home basic info")

**Event home 2-column layout**
![Event home 2-column layout](/assets/contentImages/layoutDocs/productExamples/Flex-EventHome.png "Event home 2-column layout")

**Photo detail**
![Event home 2-column layout](/assets/contentImages/layoutDocs/productExamples/Flex-PhotoDetail.png "Event home 2-column layout")

**Attendees**
![Attendees](/assets/contentImages/layoutDocs/productExamples/Flex-Attendees.png "Attendees")
