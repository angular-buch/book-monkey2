# master

# 0.0.13

* Fail-over to copying files instead of linking (thanks @danlynn)
* Document `allowNone` option and make it work for multiple globs (thanks @searls)

# 0.0.12

* Rethrow original error object (thanks @diogoko)
* Updating source URL format from deprecated version. (thanks @ralphholzmann)
* Ignore broken symlinks. (thanks @rwjblue)

# 0.0.11

* Ensure that both cache and dest dirs are cleaned up (thanks @rwjblue)

# 0.0.10

* Link the same file if the content hasn’t changed from the previous build. (thanks @lukemelia)

# 0.0.9

* Follow symlinks

# 0.0.8

* Allow concat to output empty files

# 0.0.7

* Fix: should not stat directories (thanks @ppcano)
* Add header/footer & optional function wrapping (thanks @jeffjo)

# 0.0.6

* Use broccol-writer instead of broccoli-transform (thanks @mmun)

# 0.0.5

* Disable wrapInEval by default as causes issues with global variables

# 0.0.4

* Make the default separator newline (thanks @jaketrent)
* Backported wrapInEval functionality from broccoli-es6-concatenator (thanks @ap4y)

# 0.0.3

* Use broccoli-kitchen-sink-helpers instead of larger broccoli dependency

# 0.0.1

* Initial release
