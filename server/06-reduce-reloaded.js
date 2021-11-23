const items = [1, 3, 2, 3];

const rta = items.reduce((obj, item) => {
	if (!obj[item]) {
		obj[item] = 1;
	} else {
		obj[item] = obj[item] + 1;
	}
	return obj;
}, {});

console.log(rta);

const data = [
	{
		name: 'Nicolas',
		level: 'low',
	},
	{
		name: 'Andrea',
		level: 'medium',
	},
	{
		name: 'Zulema',
		level: 'hight',
	},
	{
		name: 'Santiago',
		level: 'low',
	},
	{
		name: 'Valentina',
		level: 'medium',
	},
	{
		name: 'Lucia',
		level: 'hight',
	},
];

const rta1 = data
	.map((item) => item.level)
	.reduce((obj, item) => {
		if (!obj[item]) {
			obj[item] = 1;
		} else {
			obj[item] = obj[item] + 1;
		}
		return obj;
	}, {});

console.log(rta1);

const list = [];

for (let i = 0; i < 30; i++) {
	list.push(Math.floor(Math.random() * 11));
}

const caca = list.reduce(
	(obj, value) => {
		if (value < 6) obj['1-5'] += 1;
		else if (value < 9) obj['6-8'] += 1;
		else obj['9-10'] += 1;

		return obj;
	},
	{ '1-5': 0, '6-8': 0, '9-10': 0 }
);

console.log('====list================================');
console.log(list);
console.log('====caca================================');
console.log(caca);
console.log('====================================');
