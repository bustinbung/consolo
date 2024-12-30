---
title: "Markdown Test Document"
description: "Content to help style text of markdown posts."
date: 2024-12-27
updateDate: 2024-12-28
---
## Overview

Some text, etc, etc. This serves as the main body content.

## Headers

Posts should never be written with heading level 1 (the h1 level is reserved for page and post titles).

## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

Please god don't ever go beyond h4.

## Paragraphs

These have been seen already, but just in case, here you go.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet dapibus urna. Nullam vulputate nisl vel nunc ultrices vulputate. Curabitur dolor est, egestas in lobortis nec, rutrum eu sem. Curabitur mollis justo vel mi lacinia, at ornare sapien condimentum. Morbi eu elit ac odio pretium faucibus vitae sed libero. Quisque at ex est. Integer condimentum risus et elit tristique, a imperdiet neque mollis.

Mauris iaculis suscipit dui, et consequat velit iaculis volutpat. Praesent sodales, urna ut pharetra interdum, est magna efficitur est, a placerat libero libero id erat. Proin ultricies, dolor eget efficitur bibendum, enim eros imperdiet urna, non ultricies lacus arcu in purus. Donec euismod magna a mauris laoreet, in efficitur odio cursus. Donec vitae urna blandit, imperdiet purus vel, elementum ipsum. Phasellus dignissim, magna quis molestie sodales, ligula turpis tempus elit, vel scelerisque mi erat vel turpis.

## Emphasis

**Bold text** is great! So are _italics_. How about **_both in the same spot_**?

## Blockquotes

> Someone said something important here.

> And someone quoted it
>> Someone said something important here.

## Lists

Ordered:
1. One
2. Two
3. Three

and unordered:
- Item 1
- Item 2
- Item 3

## Code

I ran the command `npm run dev` to start the dev server.

Here's some TS code!

```ts
document.body.addEventListener('click', toggleDialog);

let currentOpenDialog: HTMLDialogElement | null = null;
function toggleDialog(event: MouseEvent) {
    if (currentOpenDialog != null) {
        const currentOpenDialogRect = currentOpenDialog?.getBoundingClientRect();
        if (
            event.clientX <= currentOpenDialogRect.left ||
            event.clientX >= currentOpenDialogRect.right ||
            event.clientY <= currentOpenDialogRect.top ||
            event.clientY >= currentOpenDialogRect.bottom
        ) {
            currentOpenDialog.close()
        }
    }

    if ((event.target as HTMLElement).nodeName != "IMG") {
        return;
    }

    const targetEntry = (event.target as HTMLElement).parentElement!;
    const targetDialog = targetEntry.children[1] as HTMLDialogElement;

    targetDialog.show();
    currentOpenDialog = targetDialog;
}
```

## Images

![A random image](https://picsum.photos/600/600)

## Horizontal Rules

Break up some content!

---

Back!!

## Links

Visit my current search engine, [Startpage](https://startpage.com)!
