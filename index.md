---
layout: default
description: >-
    PatchworkMC is a reimplementation of Minecraft Forge on top of the FabricMC
    ecosystem. The goal is to allow Forge mods to be patched so that they can run
    on top of Fabric, with other Fabric mods, and without installing Forge.
---

{{ page.description }}

# Installation

Currently, Patchwork is in the early stages of development. As such, we do not
yet provide pre-built releases of the any of the project's components. If you'd
like to build it yourself and try it out, you can find the code on
[GitHub]({{ site.github_url }}).


# Current State

Patchwork is currently able to run several small Forge mods. Development is
moving quickly, and the list of working mods is growing fast.


# Components

Similar to Fabric, Patchwork is split up into a few different components that
work together to allow Forge mods to work in Fabric.


## patchwork-patcher

The patcher converts Forge mods into a format that Fabric can load. Although
the patched mods can be loaded by Fabric, they still require the Patchwork API,
which provides features that were provided by Forge.

## patchwork-api

The Patchwork API is a reimplementation of the Minecraft Forge API built on top
of Fabric. This allows mods that have been patched to function properly under
Fabric.

# Contributing

Patchwork is still a work in progress, if you'd like to help us bridge the gap
between Fabric and Forge, come [join us on Discord]({{ site.discord_url }}).

