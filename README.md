# fastqEngine

A web-based user interface (WUI) for getting gene expression matrix from scratch with just few clicks

## Inspiration

![Motivation](./public/Motivation.jpg?raw=true)

## What it does

* Let user select RNA-seq raw data files (*.fastq* format), often from people with diseases such as cancer
* Operates locally -- no risk of exposing data files potentially subject to privacy and/or intellectual property (IP) rights
* Example: 

A publicly available [Paired-end Illumina HiSeq2000 MCF7 breast cancer cell line sample](https://www.ebi.ac.uk/ena/data/view/SRR1021668) could be used for code testing.

## How I built it

* Use a whiteboard to brainstorm!
* Present my idea/progress periodically to others

## Challenges I ran into

* Triggering execution of bash shell from html and Javascript
* Retrieving actual vs. fakepaths based on user input

## Accomplishments that I'm proud of

* Make a solution to real-world problem that I personally encountered come true
* Being a "solo hacker" in a hackathon for the first time

## What I learned (beyond the organizational detail)

* Efficient loading of *.css* and *.js* using the minimalized file version

## What's next for fastqEngine

* Scalability
* Implementation on remote computer cluster
* Implementation on cloud platform
* Adaptabiility as new experimental platforms come up