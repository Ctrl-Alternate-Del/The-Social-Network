#!/bin/bash

source activate env-name

cd "../pyscripts/webcam/"

python3 gen_sentence_with_emoticons.py

source deactivate