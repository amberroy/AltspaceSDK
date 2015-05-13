Listing of Bug Fixes, Features, Performance Improvements, and Breaking Changes for each version. Version numbers are "unofficial" and may change in the future.

## v0.1.1 (2015-05-12)

## Features
# **FirebaseSync**: now supports adding and deleting synced objects while the app is running. 

## Breaking Changes
* Now must call FirebaseSync.connect before adding any objects via `FirebaseSync.addObject`.

## v0.1.0 (2015-04-20)
First version of the SDK deployed to [sdk.altvr.com] (http://sdk.altvr.com/src/AltRenderer.js)

### Bug Fixes

* **AltRenderer**: Removed transformation adjustments from AltRenderer, now done client-side 
([110096](../../commit/110096730d26e48d5d3457d5491c0ffbfa1dc7a9), [#5](../../issues/5), [#6](../../issues/6))
