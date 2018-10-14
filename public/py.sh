#!/bin/bash

source activate env-name

cd "../pyscripts2/webcam/"

python3 gen_sentence_with_emoticons.py > answer.txt

source deactivate