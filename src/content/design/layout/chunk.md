---
collection: Design
title: Chunk
order: 6
---

# Chunk
[Chunk](https://meetup.github.io/meetup-web-components/?selectedKind=Chunk&selectedStory=default&full=0&down=1&left=1&panelRight=0&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel) is the smallest unit used to separate discreet "chunks" of content.

While larger components like _Stripe_ and _Section_ divide larger collections of related content, _Chunk_ provides separation for smaller blocks of related content using whitespace.

_Chunk_ is usually a child of _Section_. _Chunk_ rarely contains other _Chunks_, but it's possible that you need to separate content within a _Chunk_—for example: in a member list, each member row is a _Chunk_, the member's name is a _Chunk_, and the member's bio is a _Chunk_.

_Chunk_ is not simply used for adding bottom space. _Chunk_ is a element used for visually grouping related content. If you need arbitrary spacing, see [swarm-sasstools](https://meetup.github.io/swarm-sasstools/).

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
