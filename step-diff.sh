#!/bin/bash

BASEDIR="src/app/book-monkey"
OUTDIR="diffs"

IT1="$BASEDIR/iteration-1"
IT2="$BASEDIR/iteration-2"
IT3="$BASEDIR/iteration-3"
IT4="$BASEDIR/iteration-4"
IT5="$BASEDIR/iteration-5"
IT6="$BASEDIR/iteration-6"

rm -fr $OUTDIR
mkdir $OUTDIR

DIFF="diff -u -r --unidirectional-new-file"
DIFF2HTML="node_modules/diff2html-cli/bin/diff2html -i stdin -o stdout --"

echo "creating .html-files with diffs between iterations/steps in folder..."
$DIFF $IT1/book-list $IT1/book-list-refactored       | $DIFF2HTML > $OUTDIR/it1-1_it1-2.html;
$DIFF $IT1/book-list-refactored $IT1/book-details    | $DIFF2HTML > $OUTDIR/it1-2_it1-3.html;
$DIFF $IT1/book-details $IT2/di                      | $DIFF2HTML > $OUTDIR/it1-3_it2-1.html;
$DIFF $IT2/di $IT2/navigation                        | $DIFF2HTML > $OUTDIR/it2-1_it2-2.html;
$DIFF $IT2/navigation $IT3/http                      | $DIFF2HTML > $OUTDIR/it2-2_it3-1.html;
$DIFF $IT3/http $IT4/template-driven-forms           | $DIFF2HTML > $OUTDIR/it3-1_it4-1.html;
$DIFF $IT4/template-driven-forms $IT4/reactive-forms | $DIFF2HTML > $OUTDIR/it4-1_it4-2.html;
$DIFF $IT4/reactive-forms $IT4/custom-validation     | $DIFF2HTML > $OUTDIR/it4-2_it4-3.html;
$DIFF $IT4/custom-validation $IT5/pipes              | $DIFF2HTML > $OUTDIR/it4-3_it5-1.html;
$DIFF $IT5/pipes $IT5/directives                     | $DIFF2HTML > $OUTDIR/it5-1_it5-2.html;
$DIFF $IT5/directives $IT6/modules                   | $DIFF2HTML > $OUTDIR/it5-2_it6-1.html;
$DIFF $IT6/modules $IT6/lazy-loading                 | $DIFF2HTML > $OUTDIR/it6-1_it6-2.html;
$DIFF $IT6/lazy-loading $IT6/routing                 | $DIFF2HTML > $OUTDIR/it6-2_it6-3.html;
echo "finished job. Diffs stored in folder: $OUTDIR"
