
#Task for practicing app architecture skills#

##Main task##

1. create simple todo list app. 
2. todo item must have next structure: 

{
    title: "Visit all lectures", 
    createdAt: "15.02.2020", 
    dueDate: "16.02.2020",
    isDone: false
}

3. implement next features: 
    3.1 add new todo list item;
    3.2 delete todo list item;
    3.3 mark todo list item as done.

4. cover your code with tests

App design may be something like https://miro.medium.com/max/800/1*lJ_VieryamJayJNfU4RzOw.png
But you are free to choose 

##Bonus tasks##

1. Make app a PWA.
2. Add filters: 
    2.1 show only outdated tasks;
    2.2 show only not finished tasks;
    3.3 show tasks that must be done by tomorrow.
3. Add tests for your new functionality;


#Task for practicing JS skills#
(* -- default, ** -- hard, *** -- very hard)

1. Sort objects by date *
const myArray = [
  {
    name: "Joe Blow",
    date: "Mon Oct 31 2016 00:00:00 GMT-0700 (PDT)"
  },
  {
    name: "Sam Snead",
    date: "Sun Oct 30 2016 00:00:00 GMT-0700 (PDT)"
  },
  {
    name: "John Smith",
    date: "Sat Oct 29 2016 00:00:00 GMT-0700 (PDT)"  
  }
];

2. Implement function zipObject *
    (takes 2 arrays: - array of keys, - array of values; returns object with given keys and values);
    zipObject(['a', 'b', 'c'], [1, 2, 3]) // => { 'a': 1, 'b': 2, 'c', 3 }

3. Return the length of the longest word in the provided sentence. *

    findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.

4. Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. **

["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].

5. Find the missing letter in the passed letter range and return it. **
    fearNotLetter("abce") should return "d".

6. Convert the given number into a roman numeral. **
    
    convertToRoman(29) should return "XXIX".

7. Find sum of tree leafs ***
const tree = {
	value: 1,
	next: [
		{
			value: 6,
			next: null
		},
		{
			value: 2,
			next: [
				{
					value: 77,
					next: null
				},
				{
					value: 4,
					next: [
                        {
                            value: 55,
                            next: null
                        },
                        {
                            value: -5,
                            next: null
                        }
                    ]
				}
			]
		}
	]
};





