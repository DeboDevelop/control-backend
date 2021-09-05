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

function updateAction(req, res) {
    const index = parseInt(req.params.id, 10);
    if (index >= 0 && index < actions.length) {
        actions[index].status = !actions[index].status;
        return res.status(200).send("Action Executed");
    } else {
        return res.status(400).send("Invalid Id");
    }
}

module.exports = { getAction, updateAction };
