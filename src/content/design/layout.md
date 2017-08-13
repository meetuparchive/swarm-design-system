---
layout: layout_subnav.hbs
collection: Design
title: Layout
order: 7
subSections: Stripe, Bounds, Section, Flex, Chunk, Spacing, Sizing
---

# Layout

`meetup-web-components` has a set of responsive layout components to design and build with. As well as handling general layout concerns (e.g.: creating columns, separating regions of the page, etc), layout components create consistent spacing between content.

Designers are encouraged to experiement with layout to suit a whatever content they’re designing for - these components and concepts are simply a baseline. Our layout components are designed to make it simple for engineers to quickly put together a responsive page layout with consistent spacing.

**Layout components, exploded view**
![Layout components, exploded view](/assets/contentImages/layoutDocs/components/LayoutComponentsBlueprint_colored_v3_All(3D).png "Layout components, exploded view")

**Page layed out using layout components**
![Page layed out using layout components](/assets/contentImages/layoutDocs/components/LayoutComponentsBlueprint_colored_v3_All(flat--plain).png "Page layed out using layout components")

---------------------------------------

# Stripe
A [Stripe](https://meetup.github.io/meetup-web-components/?selectedKind=Stripe&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) is used to divide the view into regions of content. A _Stripe_ extends to the edges of the viewport whether it's top-to-bottom or left-to-right.

A _Stripe_ divides the page visually using a top border and a background color, or a background image. By default, _Stripe_ has a white background and a top border.

Every view has at least one _Stripe_ not including the global navigation header and footer - which are also Stripes.

**Stripe, in isolation**
![Stripe, in isolation](/assets/contentImages/layoutDocs/components/Stripe-isolated.png "Stripe, in isolation")

**Two Stripes dividing a page vertically**
![Two Stripes dividing a page vertically](/assets/contentImages/layoutDocs/components/Stripe(horiz).png "Two Stripes dividing a page vertically")

**Two Stripes dividing a page horizontally**
![Two Stripes dividing a page horizontally](/assets/contentImages/layoutDocs/components/Stripe(vert).png "Two Stripes dividing a page horizontally")


## Horizontal stripe examples:

**Event home**
![Event home](/assets/contentImages/layoutDocs/productExamples/Stripe-Events.png "Event home")

**Group home (v0 of redesign)**
![Group home (v0 of redesign)](/assets/contentImages/layoutDocs/productExamples/Stripe-Groups.png "Group home (v0 of redesign)")

## Vertical stripe examples:

**Messages**
![Messages](/assets/contentImages/layoutDocs/productExamples/Stripe-Messages.png "Messages")

**Photo detail**
![Photo detail](/assets/contentImages/layoutDocs/productExamples/Stripe-PhotoDetail.png "Photo detail")

---------------------------------------

# Bounds

[Bounds](https://meetup.github.io/meetup-web-components/?selectedKind=Bounds&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) is used to maintain a comfortable width for content by providing a maximum width and centering content on larger viewports.

_Bounds_ is commonly a direct child of _Stripe_

By default, _Bounds_ have a maximum width of 1100px. There is a narrow variant of _Bounds_ that is only 840px

**Bounds, in isolation**
![Bounds, in isolation](/assets/contentImages/layoutDocs/components/Bounds-isolated.png "Bounds, in isolation")

**Two Bounds nested in two Stripes**
![Two Bounds nested in two Stripes](/assets/contentImages/layoutDocs/components/Bounds-adjacent.png "Two Bounds nested in two Stripes")

## Bounds examples

**Event home**
![Event home](/assets/contentImages/layoutDocs/productExamples/Bounds-EventHome.png "Event home")

**Group home (v0 of redesign)**
![Group home (v0 of redesign)](/assets/contentImages/layoutDocs/productExamples/Bounds-GroupHome.png "Group home (v0 of redesign)")

**Attendees**
![Attendees](/assets/contentImages/layoutDocs/productExamples/Bounds-Attendees.png "Attendees")

---------------------------------------

# Section

[Section](https://meetup.github.io/meetup-web-components/?selectedKind=Section&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel), like _Stripe_, is used to separate content visually; it might help to think of _Section_ like a "sub-Stripe". While _Stripe_ cuts across the entire page to divide segments of content, _Section_ has left and right margins, so it's contents never touch the edges of the viewport.

_Section_ separates content visually using whitespace and an optional bottom border. There is a variant of _Section_ that has a bottom border and bottom padding.

Sections contain double spacing at the top, and a single space at the bottom. This is because a _Section_ typically contain Chunks, which also have a sinlge space at the bottom.

**Section (default), in isolation**
![Section (default), in isolation](/assets/contentImages/layoutDocs/components/Section-isolated.png "Section (default), in isolation")

**Section with bottom separator, in isolation**
![Section with bottom separator, in isolation](/assets/contentImages/layoutDocs/components/Section--withSeparator-isolated.png "Section with bottom separator, in isolation")

**Sections dividing page content**
![Sections dividing page content](/assets/contentImages/layoutDocs/components/SectionsDividingPageContent.png "Sections dividing page content")


## Section examples

**Event home**
![Event home](/assets/contentImages/layoutDocs/productExamples/Section-EventHome.png "Event home")

**Group home (v0 of redesign)**
![Group home (v0 of redesign)](/assets/contentImages/layoutDocs/productExamples/Section-GroupHomeOld.png "Group home (v0 of redesign)")

---------------------------------------

# Flex
[Flex](https://meetup.github.io/meetup-web-components/?selectedKind=Flex&selectedStory=Row%20%28default%29&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) and [FlexItem](https://meetup.github.io/meetup-web-components/?selectedKind=FlexItem&selectedStory=Flex%20Item%20grow%20%28default%29&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) are responsible for the heavy lifting in our responsive layouts. They’re used for laying elements out horizontally or vertically. Horizontal layouts can become vertical (e.g.: right column stacking on top of left column for small viewports), and vice versa

_Flex_ and _FlexItem_ can be used for macro layout, like a main content area and a sidebar, or they can be used for laying out smaller elements, like an icon next and a text label.

See the _Flex_ and _FlexItem_ Storybook stories in `mup-web-components` to preview all of the flexbox options that are controlled using props.

_Flex_ and _FlexItem_ are an abstraction of the CSS flexible box (flexbox) layout module. The concepts behind flexbox are also used in Android and iOS development, and is what Facebook’s cross-platform layout engine, Yoga, is based on.

The closest you can get to using flexbox-style layout in Sketch is using the Autolayout plugin:
https://animaapp.github.io/

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


---------------------------------------

# Chunk
[Chunk](https://meetup.github.io/meetup-web-components/?selectedKind=Chunk&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) is the smallest unit used to separate content.

While larger components like _Stripe_ and _Section_ divide larger collections of related content, _Chunk_ provides separation for smaller blocks of related content using whitespace.

_Chunk_ is usually a child of _Section_. _Chunk_ rarely contains other _Chunks_, but it's possible that you need to separate content within a _Chunk_—for example: in a member list, each member row is a _Chunk_, the member's name is a _Chunk_, and the member's bio is a _Chunk_.

_Chunk_ is not simply used for adding bottom space. _Chunk_ is a element used for visually grouping related content. If you need arbitrary spacing, see swarm-sasstools.

**Chunk, in isolation**
![Chunk, in isolation](/assets/contentImages/layoutDocs/components/Chunk-isolated.png "Chunk, in isolation")

**Chunks dividing smaller bits of content**
![Chunks dividing smaller bits of content](/assets/contentImages/layoutDocs/components/ChunkExample.png "Chunks dividing smaller bits of content")

## Chunk examples

**Event home basic info**
![Event home basic info](/assets/contentImages/layoutDocs/productExamples/ChunkBasicInfo.png "Event home basic info")

**Event home: Comments**
![Event home: Comments](/assets/contentImages/layoutDocs/productExamples/ChunkCommentList.png "Event home: Comments")

**Event home: Description**
![Event home: Description](/assets/contentImages/layoutDocs/productExamples/ChunkDescription.png "Event home: Description")

---------------------------------------

# Spacing

**Viewport width** | **SpaceHalf** | **Space** | **SpaceDouble**
------------------ | ------------- | --------- | ---------------
Small              | 8             | 16        | 32
Medium             | 9             | 18        | 36
Large              | 10            | 20        | 40

---------------------------------------

# Media sizes

**xxsmall** | **xsmall** | **small** | **medium** | **large** | **xlarge** | **xxlarge**
----------- | ---------- | --------- | ---------- | --------- | ---------- | -----------
12          | 18         | 24        | 36         | 48        | 72         | 120


