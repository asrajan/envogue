#!/usr/bin/bash
##########################################################################################
## Browser sync automates some of the tasks of a web page development. One such task is to
## refresh/relad the page everytime you make a change.
## This script launches browser sync in server mode.
## --server indicates that we want to launch browser-sync in server mode
## --directory indicates that we want the browser to be refreshed anytime a file changes
## --files provides the pattern of files in the directory from which browser-sync is 
##         launched on which the refresh depends on
##
##########################################################################################
browser-sync start --server --directory --files "*"
