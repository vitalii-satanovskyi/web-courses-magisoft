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

// task:

// 1. implement function that recursively walks the tree and calcs sum of its leaf  
// 2. write tests for this function