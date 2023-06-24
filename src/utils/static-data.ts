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
        isPinned: true,
    },
    {
        id: 12456,
        title: 'to do app project',
        description: 'add components',
        tags: [code, learn, housework],
        status: 'in-progress',
        isPinned: true,
    },
    {
        id: 78953,
        title: 'clean room',
        description: 'clean all rooms on second floor',
        tags: [housework],
        status: 'to-do',
        isPinned: false,
    },
    {
        id: 45621,
        title: 'feed the cat',
        description: 'buy new food for cat',
        tags: [housework],
        status: 'completed',
        isPinned: false,
    },
    {
        id: 1572,
        title: 'dish washing',
        description: '',
        tags: [housework],
        status: 'completed',
        isPinned: true,
    },
    {
        id: 75652,
        title: 'read book',
        description: '10 pages',
        tags: [learn],
        status: 'to-do',
        isPinned: false,
    },
    {
        id: 731583,
        title: 'run',
        description: '5km',
        tags: [workout],
        status: 'to-do',
        isPinned: true,
    },

]