#!/bin/bash

BASEDIR="src/app/book-monkey"
OUTDIR="diffs"

IT1="$BASEDIR/iteration-1"
IT2="$BASEDIR/iteration-2"
IT3="$BASEDIR/iteration-3"
IT4="$BASEDIR/iteration-4"
IT5="$BASEDIR/iteration-5"
IT6="$BASEDIR/iteration-6"

OUT01="it1-1_it1-2.html"
OUT02="it1-2_it1-3.html"
OUT03="it1-3_it2-1.html"
OUT04="it2-1_it2-2.html"
OUT05="it2-2_it3-1.html"
OUT06="it3-1_it4-1.html"
OUT07="it4-1_it4-2.html"
OUT08="it4-2_it4-3.html"
OUT09="it4-3_it5-1.html"
OUT10="it5-1_it5-2.html"
OUT11="it5-2_it6-1.html"
OUT12="it6-1_it6-2.html"
OUT13="it6-2_it6-3.html"

rm -fr $OUTDIR
mkdir $OUTDIR

DIFF="diff -u -r --unidirectional-new-file"
DIFF2HTML="node_modules/diff2html-cli/bin/diff2html -i stdin -o stdout -s side --"

echo "creating .html-files with diffs between iterations/steps in folder..."
$DIFF $IT1/book-list $IT1/book-list-refactored       | $DIFF2HTML > $OUTDIR/$OUT01;
$DIFF $IT1/book-list-refactored $IT1/book-details    | $DIFF2HTML > $OUTDIR/$OUT02;
$DIFF $IT1/book-details $IT2/di                      | $DIFF2HTML > $OUTDIR/$OUT03;
$DIFF $IT2/di $IT2/navigation                        | $DIFF2HTML > $OUTDIR/$OUT04;
$DIFF $IT2/navigation $IT3/http                      | $DIFF2HTML > $OUTDIR/$OUT05;
$DIFF $IT3/http $IT4/template-driven-forms           | $DIFF2HTML > $OUTDIR/$OUT06;
$DIFF $IT4/template-driven-forms $IT4/reactive-forms | $DIFF2HTML > $OUTDIR/$OUT07;
$DIFF $IT4/reactive-forms $IT4/custom-validation     | $DIFF2HTML > $OUTDIR/$OUT08;
$DIFF $IT4/custom-validation $IT5/pipes              | $DIFF2HTML > $OUTDIR/$OUT09;
$DIFF $IT5/pipes $IT5/directives                     | $DIFF2HTML > $OUTDIR/$OUT10;
$DIFF $IT5/directives $IT6/modules                   | $DIFF2HTML > $OUTDIR/$OUT11;
$DIFF $IT6/modules $IT6/lazy-loading                 | $DIFF2HTML > $OUTDIR/$OUT12;
$DIFF $IT6/lazy-loading $IT6/routing                 | $DIFF2HTML > $OUTDIR/$OUT13;

echo "
<!doctype html>
<html>
<head>
  <meta charset='utf-8'>
  <title>BookMonkey Diffs</title>
</head>
<body>
  <ol>
    <li><a href='$OUT01'>Iteration-1 Schritt 1 -> Iteration 1 Schritt 2</a></li>
    <li><a href='$OUT02'>Iteration-1 Schritt 2 -> Iteration 1 Schritt 3</a></li>
    <li><a href='$OUT03'>Iteration-1 Schritt 3 -> Iteration 2 Schritt 1</a></li>
    <li><a href='$OUT04'>Iteration-2 Schritt 1 -> Iteration 2 Schritt 2</a></li>
    <li><a href='$OUT05'>Iteration-2 Schritt 2 -> Iteration 3 Schritt 1</a></li>
    <li><a href='$OUT06'>Iteration-3 Schritt 1 -> Iteration 4 Schritt 1</a></li>
    <li><a href='$OUT07'>Iteration-4 Schritt 1 -> Iteration 4 Schritt 2</a></li>
    <li><a href='$OUT08'>Iteration-4 Schritt 2 -> Iteration 4 Schritt 3</a></li>
    <li><a href='$OUT09'>Iteration-4 Schritt 3 -> Iteration 5 Schritt 1</a></li>
    <li><a href='$OUT10'>Iteration-5 Schritt 1 -> Iteration 5 Schritt 2</a></li>
    <li><a href='$OUT11'>Iteration-5 Schritt 2 -> Iteration 6 Schritt 1</a></li>
    <li><a href='$OUT12'>Iteration-6 Schritt 1 -> Iteration 6 Schritt 2</a></li>
    <li><a href='$OUT13'>Iteration-6 Schritt 2 -> Iteration 6 Schritt 3</a></li>
  </ol>
</body>
</html>
" > $OUTDIR/index.html

echo "finished job. Diffs stored in folder: $OUTDIR"


if hash http-server 2>/dev/null; then
    echo "using globally installed http-server to serve files"
    http-server diffs
else
    echo "http-server does not exists globally, try to find it in node_modules..."
    if [ ! -f node_modules/http-server/bin/http-server ]; then
        echo "http-server not found (neither globally nor locally). Can't serve diffs."
        echo "You can open the served files manually in your browser or install http-server running the following command:"
        echo "npm install -g http-server"
    else
        echo "using http-server from node_modules to serve files"
        node_modules/http-server/bin/http-server diffs
    fi
fi
