# 2.1.0
### New Features
* added a new `contain` relation, see readme for explanation
### Improvements
* as a shortcut for the config object, you can now provide
a string that will serve as the `relation` parameter
# 2.0.2
### Fixes
* measuring window's outerHeight for better mobile compatibility
# 2.0.1
### Fixes
* included onload event for internal size/scroll tracking
# 2.0.0
> Major Rewrite
### Improvements
* window size is cached once per resize event to improve performance
* window scroll position cached once per scroll event to improve
performance
* new config object parameter to allow for more options
* custom element height function
* provided minified version (<1kb)
### Breaking Changes
* return value now **inverted by default** (this is the new normal
to better compliment CSS layouts)
* previous parameters invalid, must **use config object** (see
documentation in README.md)

# 1.0.0
> Initial Release
