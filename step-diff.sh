#!/bin/bash

BASEDIR="src/app/book-monkey"
OUTDIR="diffs"

IT1="$BASEDIR/iteration-1"
IT2="$BASEDIR/iteration-2"
IT3="$BASEDIR/iteration-3"
IT4="$BASEDIR/iteration-4"
IT5="$BASEDIR/iteration-5"
IT6="$BASEDIR/iteration-6"

mkdir -p diffs

echo "creating .diff-files with diffs between iterations/steps in folder..."
diff -r $IT1/book-list $IT1/book-list-refactored       > $OUTDIR/it1-1_it1-2.diff;
diff -r $IT1/book-list-refactored $IT1/book-details    > $OUTDIR/it1-2_it1-3.diff;
diff -r $IT1/book-details $IT2/di                      > $OUTDIR/it1-3_it2-1.diff;
diff -r $IT2/di $IT2/navigation                        > $OUTDIR/it2-1_it2-2.diff;
diff -r $IT2/navigation $IT3/http                      > $OUTDIR/it2-2_it3-1.diff;
diff -r $IT3/http $IT4/template-driven-forms           > $OUTDIR/it3-1_it4-1.diff;
diff -r $IT4/template-driven-forms $IT4/reactive-forms > $OUTDIR/it4-1_it4-2.diff;
diff -r $IT4/reactive-forms $IT4/custom-validation     > $OUTDIR/it4-2_it4-3.diff;
diff -r $IT4/custom-validation $IT5/pipes              > $OUTDIR/it4-3_it5-1.diff;
diff -r $IT5/pipes $IT5/directives                     > $OUTDIR/it5-1_it5-2.diff;
diff -r $IT5/directives $IT6/modules                   > $OUTDIR/it5-2_it6-1.diff;
echo "finished job. Diffs stored in folder: $OUTDIR"
