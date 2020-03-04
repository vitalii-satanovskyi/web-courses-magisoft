export const arr = [
    {
        id: '1',
        isCompleted: true,
        description: 'Drink vodka'
    },
    {
        id: '2',
        isCompleted: false,
        description: 'Play dotka gdfgdfgdfgdfgffdg',
        dueDate: new Date()
    }
];

/**
 * filter by predicate
 */
const DAY_IN_MILLISECONDS = 24 * 3600 * 1000;

// predicates 
const completed = (o) => o.isCompleted;
const descLengthMore10 = (o) => o.description > 10;
const byDate = (o) => new Date().getTime() + DAY_IN_MILLISECONDS < new Date(o.dueDate).getTime()

export const filterArr = (predicate) => (arr) => arr.filter(predicate);

const filterCompleted = filterArr(descLengthMore10);

const res = filterCompleted(arr);

/**
 *  add new item 
 */

const newItem =   {
    description: 'have a good rest',
    isCompleted: false
};
const res = arr.concat(
  newItem
);

// alternative way 

const res = [...arr, newItem];
const newArr = [...arr];

arr.push(newItem);

/**
 * update item 
 */
 const id = '1';
 const newArr = [...arr];
const index = newArr.findIndex(o => o.id === id)
newArr[index] = newItem;

// updating nested object in ugly way

const obj = {
    a: 5, 
    b: 6, 
    c: {
        a: 7, 
        b: 8, 
        c: {
            a: 9, 
            b: 10 // update this value
        }
    }
}


const newObject = {
    ...obj, 
    c: {
        ...obj.c, 
        c: {
            ...obj.c.c,
            b: 100500
        }
    }
}

const blogPosts = [
    {
      id: 'post1',
      author: { username: 'user1', name: 'User 1' },
      body: '......',
      comments: [
        {
          id: 'comment1',
          author: { username: 'user2', name: 'User 2' },
          comment: '.....'
        },
        {
          id: 'comment2',
          author: { username: 'user3', name: 'User 3' },
          comment: '.....'
        }
      ]
    },
    {
      id: 'post2',
      author: { username: 'user2', name: 'User 2' },
      body: '......',
      comments: [
        {
          id: 'comment3',
          author: { username: 'user3', name: 'User 3' },
          comment: '.....'
        },
        {
          id: 'comment4',
          author: { username: 'user1', name: 'User 1' },
          comment: '.....'
        },
        {
          id: 'comment5',
          author: { username: 'user3', name: 'User 3' },
          comment: '.....'
        }
      ]
    }
    // and repeat many times
  ]

  const normalized = {
    posts : {
        byId : {
            "post1" : {
                id : "post1",
                author : "user1",
                body : "......",
                comments : ["comment1", "comment2"]
            },
            "post2" : {
                id : "post2",
                author : "user2",
                body : "......",
                comments : ["comment3", "comment4", "comment5"]
            }
        },
        allIds : ["post1", "post2"]
    },
    comments : {
        byId : {
            "comment1" : {
                id : "comment1",
                author : "user2",
                comment : ".....",
            },
            "comment2" : {
                id : "comment2",
                author : "user3",
                comment : ".....",
            },
            "comment3" : {
                id : "comment3",
                author : "user3",
                comment : ".....",
            },
            "comment4" : {
                id : "comment4",
                author : "user1",
                comment : ".....",
            },
            "comment5" : {
                id : "comment5",
                author : "user3",
                comment : ".....",
            },
        },
        allIds : ["comment1", "comment2", "comment3", "commment4", "comment5"]
    },
    users : {
        byId : {
            "user1" : {
                username : "user1",
                name : "User 1",
            },
            "user2" : {
                username : "user2",
                name : "User 2",
            },
            "user3" : {
                username : "user3",
                name : "User 3",
            }
        },
        allIds : ["user1", "user2", "user3"]
    }
};

const tree = {
    id: '1',
    value: 1,
	next: [
		{
            id: '2',
			value: 6,
			next: null
		},
		{
            id: '3',
			value: 2,
			next: [
				{
                    id: '4',
					value: 77,
					next: null
				},
				{
                    id: '5',
					value: 4,
					next: [
                        {
                            id: '6',
                            value: 55,
                            next: null
                        },
                        {
                            id: '7',
                            value: -5,
                            next: null
                        }
                    ]
				}
			]
		}
	]
};


const addParent = (cb, parent) => (m, item) => cb(m, {...item, parent })  

const flatten = (m, tree) => {
	if(Array.isArray(tree.next))  tree.next.reduce(addParent(flatten, tree.id), m);
	delete tree.next;
	m.push(tree);
	return m;
};


console.log(flatten([], tree))


const items = [
    { 
        groupId: 1, 
        featureA: 1, 
        featureB: 0,
        val: 2,
    },
    { 
        groupId: 1, 
        featureA: 1, 
        featureB: 1, 
        val: 3
    },
    { 
        groupId: 1, 
        featureA: 0, 
        featureB: 1, 
        val: 4
    },
    { 
        groupId: 1, 
        featureA: 0, 
        featureB: 0,
        val: 2
    }
];

// 
// item# 1 2 3 4     
//   1|  0 1 0 1
//   2|  1 0 1 1
//   3|  1 0 0 1
//   4|  1 0 0 0