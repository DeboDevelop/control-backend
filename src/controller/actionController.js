let actions = [
    {
        name: "Action 1",
        status: true,
    },
    {
        name: "Action 2",
        status: true,
    },
    {
        name: "Action 3",
        status: true,
    },
    {
        name: "Action 4",
        status: true,
    },
    {
        name: "Action 5",
        status: true,
    },
    {
        name: "Action 6",
        status: true,
    },
];

function getAction(req, res) {
    res.status(200).send(actions);
}

module.exports = { getAction };
