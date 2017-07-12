---
layout: layout.hbs
collection: Design
title: Layout
---

# Layout
[Chunk](#chunk)

## Overview
`meetup-web-components` has a set of responsive layout components to design and build with. As well as handling general layout concerns (e.g.: creating columns, separating regions of the page, etc), layout components create consistent spacing between content.

Designers are encouraged to experiement with layout to suit a whatever content they’re designing for - these components and concepts are simply a baseline. Our layout components are designed to make it simple for engineers to quickly put together a responsive page layout with consistent spacing.

**Layout components, exploded view**
![Layout components, exploded view](http://via.placeholder.com/800x600 "Layout components, exploded view")

**Page layed out using layout components**
![Page layed out using layout components](http://via.placeholder.com/800x600 "Page layed out using layout components")

________________________

# <a name="chunk"></a>Chunk
Chunk is the smallest unit used to separate content.

While larger components like Stripe and Section divide larger collections of related content, Chunk provides separation for smaller blocks of related content using whitespace.

Chunk is usually a child of Section. Chunk rarely contains other Chunks, but it's possible that you need to separate content within a chunk—for example: in a member list, each member row is a chunk, the member's name is a chunk, and the member's bio is a chunk.

Chunk is not simply used for adding bottom space. Chunk is a element used for visually grouping related content. If you need arbitrary spacing, see swarm-sasstools.

**Chunk, in isolation**
![Chunk, in isolation](http://via.placeholder.com/800x600 "Chunk, in isolation")
