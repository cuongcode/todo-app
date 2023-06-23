const workout = {name: 'workout', color: 'red'}
const code = {name: 'code', color: 'green'}
const learn = {name: 'learn', color: 'yellow'}
const housework = {name: 'housework', color: 'blue'}

export const STATIC_DATA = [
    {
        id: 4546,
        title: 'upper body',
        description: '20 reps push up, 10 reps pull up',
        tags: [workout],
        status: 'to-do',
        priority: 0,
    },
    {
        id: 12456,
        title: 'to do app project',
        description: 'add components',
        tags: [code, learn],
        status: 'in-progress',
        priority: 0,
    },
    {
        id: 78953,
        title: 'clean room',
        description: 'clean all rooms on second floor',
        tags: [housework],
        status: 'to-do',
        priority: 1,
    },
    {
        id: 45621,
        title: 'feed the cat',
        description: 'buy new food for cat',
        tags: [housework],
        status: 'completed',
        priority: 0,
    },

]