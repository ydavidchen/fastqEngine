#!/usr/bin/env ruby

## Load file:
require 'json'
file = open("../testCase1.json")
json = file.read
parsed = JSON.parse(json)
p parsed

## Run through each RNA-seq parameter:
parsed["Parameter"].each do |a|
	b = a[1]
	puts "Argument: #{b}"
end