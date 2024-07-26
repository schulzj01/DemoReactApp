This directory holds project types that ONLY span multiple components.  If a type is only accessible from in a single component, store it with the component itself.

The reason for this is 2 fold:
- Makes it easier to import types for objects that span multiple components
- Allows you to easily identify components which types are not used in other places
-

An argument could be made that we just make this a single file as well
